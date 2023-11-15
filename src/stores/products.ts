import { defineStore } from 'pinia'
import { getDb, getStorage } from '@/firebase'
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  query,
  where,
  doc,
  setDoc,
  Timestamp,
  getDoc
} from 'firebase/firestore'

import { deleteObject, ref, uploadBytes } from 'firebase/storage'

export const useProductStore = defineStore('products', () => {
  const createProduct = async (product: any) => {
    console.log('entro')
    const db = getDb()
    let productExist = false

    if (product.name === '' || product.price <= 0 || product.category === '') {
      return {
        title: 'Error',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      }
    }

    if (product.images.length === 0 || product.images === undefined) {
      return {
        title: 'Error',
        text: 'Debe seleccionar al menos una imagen',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      }
    }

    const productsCollection = collection(db, 'products')
    const querySnapshot = await getDocs(productsCollection)

    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
      if (doc.data().name.toLowerCase() === product.name.toLowerCase()) {
        productExist = true
      }
    })

    if (productExist) {
      return {
        title: 'Info',
        text: 'El producto ya existe',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      }
    }

    product.S = product.S > 0 ? product.S : 0
    product.M = product.M > 0 ? product.M : 0
    product.L = product.L > 0 ? product.L : 0
    product.XL = product.XL > 0 ? product.XL : 0

    const docRef = doc(productsCollection)
    setDoc(docRef, {
      ...product,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      available: true,
      deleted: false,
      id: docRef.id
    })

    return {
      title: 'Success',
      text: 'El producto se ha creado correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }
  }

  const getProducts = async () => {
    const db = getDb()
    const productsCollection = collection(db, 'products')
    const productsQuery = query(productsCollection, where('deleted', '==', false))
    const snapshot = await getDocs(productsQuery)
    console.log(snapshot)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const products: any[] = []
    snapshot.forEach((doc) => {
      products.push(doc.data())
    })

    return products
  }

  const updateProduct = async (product: any) => {
    const db = getDb()
    const productDoc = doc(db, 'products', product.id)
    setDoc(
      productDoc,
      {
        ...product,
        updatedAt: Timestamp.now().toDate()
      },
      { merge: true }
    )

    return {
      title: 'Success',
      text: 'El producto se ha actualizado correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }
  }

  const deleteProduct = async (id: string) => {
    const db = getDb()
    const productDoc = doc(db, 'products', id)
    setDoc(
      productDoc,
      {
        deleted: true,
        available: false,
        updatedAt: Timestamp.now().toDate()
      },
      { merge: true }
    )
  }

  const getProduct = async (id: string) => {
    const db = getDb()
    const productDoc = doc(db, 'products', id)
    const productSnap = await getDoc(productDoc)
    return productSnap?.data()
  }

  const saveImage = async (file: File, name: String, number: number) => {
    // Create a reference to the storage bucket.
    const storage = getStorage()
    const storageRef = ref(storage, `images/${name}/${file.name}${number}`)
    // 'file' comes from the Blob or File API
    await uploadBytes(storageRef, file)

    return {
      file: `${name}/${file.name}${number}`,  // file.}` ,
      url: `https://firebasestorage.googleapis.com/v0/b/cocoverano-8df51.appspot.com/o/images%2F${name}%2F${file.name}${number}?alt=media`
    }
  }

  const deleteImage = async (file:any, product:any) => {
    // Create a reference to the file to delete
    const storage = getStorage()
    const desertRef = ref(storage, 'images/' + file.file)

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        console.log('File deleted successfully')
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error)
      })

      if(product.id){
        const db = getDb()
        const productDoc = doc(db, 'products', product.id)
        setDoc(
          productDoc,
          {
            images: product.images.filter((image:any) => image !== file),
            updatedAt: Timestamp.now().toDate()
          },
          { merge: true }
        )
      }


  }

  return {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    getProduct,
    saveImage,
    deleteImage
  }
})
