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

import { ref, uploadBytes } from 'firebase/storage'

export const useProductStore = defineStore('products', () => {
  const createProduct = async (product: any) => {
    const db = getDb()
    if (
      product.name === '' ||
      product.price <= 0 ||
      product.description === '' ||
      product.images.lenght === 0 ||
      product.category === ''
    ) {
      return
    }
    const productsCollection = collection(db, 'products')
    const docRef = doc(productsCollection)

    const productExist = await getDocs(productsCollection).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().name === product.name) {
          return true
        }
      })
      return false
    })

    if (productExist) {
      return
    }

    setDoc(docRef, {
      ...product,
      createdAt: serverTimestamp(),
      updateAt: serverTimestamp(),
      available: true,
      deleted: false,
      id: docRef.id
    })
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
  }

  const deleteProduct = async (id: string) => {
    const db = getDb()
    const productDoc = doc(db, 'products', id)
    setDoc(
      productDoc,
      {
        deleted: true,
        active: false,
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

  const saveImage = async (file: File) => {
    // Create a reference to the storage bucket.
    const storage = getStorage()
    const storageRef = ref(storage, 'images/' + file.name)
    // 'file' comes from the Blob or File API
    await uploadBytes(storageRef, file)

    return `
      https://firebasestorage.googleapis.com/v0/b/cocoverano-8df51.appspot.com/o/images%2F${file.name}?alt=media
      `
  }

  return {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    getProduct,
    saveImage
  }
})
