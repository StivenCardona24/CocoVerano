import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getDb } from '@/firebase'
import { collection, getDocs, addDoc, serverTimestamp, query, where, doc, setDoc } from 'firebase/firestore'


export const useProductStore = defineStore('products', () => {
  const products = ref(<any[]>[])

  const newProduct = ref({
    name: '',
    price: 0,
    description: '',
    image: '',
    category: '',
    quantity: 0
  })

  const addProduct = async (product: any) => {
    const db = getDb()
    if (
      product.name.trim() === '' ||
      product.price <= 0 ||
      product.description.trim() === '' ||
      product.image.trim() === '' ||
      product.category.trim() === '' ||
      product.quantity <= 0
    ) {
      return
    }
    const productsCollection = collection(db, 'products')
    const docRef = doc(productsCollection);

    const productExist = await getDocs(productsCollection).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().name === product.name) {
          return true
        }
      })
      return false
    })

    if(productExist) {
      return
    }

    setDoc(docRef, {
      ...product,
      createdAt: serverTimestamp(),
      updateAt: serverTimestamp(),
      available: true,
      deleted: false,
      id: docRef.id,
    });


    // const productExist = await getDocs(collection(db, 'products')).then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     if (doc.data().name === product.name) {
    //       return true
    //     }
    //   })
    //   return false
    // })

    // if (productExist) {
    //   return
    // }

    // await addDoc(collection(db, 'products'), {
    //   name: product.name,
    //   price: product.price,
    //   description: product.description,
    //   image: product.image,
    //   createdAt: serverTimestamp(),
    //   available: true,
    //   category: product.category,
    //   quantity: product.quantity,
    //   deleted: false
    // })
  }

  const getProducts = async () => {
    const db = getDb()
    const productsCollection = collection(db, 'products')
    const productsQuery = query(productsCollection, where('deleted', '==', false))
    const snapshot = await getDocs(productsQuery)
    console.log(snapshot)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    snapshot.forEach((doc) => {
      products.value.push(doc.data())
    })

    return products.value
  }

  return { products, newProduct, addProduct, getProducts }
})