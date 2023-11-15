import { getAuth, getDb } from '@/firebase'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import Swal from 'sweetalert2'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<any>(null)
  const error = ref<any>(null)
  const loading = ref<boolean>(false)
  const openLogin = ref<boolean>(false)
  const openRegister = ref<boolean>(false)

  const auth = ref(getAuth())

  const toggleLogin = () => {
    openRegister.value = false
    return (openLogin.value = !openLogin.value)
  }

  const toggleRegister = () => {
    openLogin.value = false
    return (openRegister.value = !openRegister.value)
  }

  const login = async (email: string, password: string) => {
    loading.value = true
    try {
      const { user: userCredential } = await signInWithEmailAndPassword(auth.value, email, password)
      loading.value = false
      toggleLogin()
      return Swal.fire({
        title: 'Success',
        text: 'El usuario se ha logueado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
    } catch (err) {
      loading.value = false
      return Swal.fire({
        title: 'Error',
        text: `El usuario no se ha logueado correctamente : ${err}}`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }
  }

  const logout = async () => {
    signOut(auth.value)
      .then(() => {
        Swal.fire({
          title: 'Success',
          text: 'El usuario ha cerrado sesión correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        })
        user.value = null
      })
      .catch((error) => {
        // An error happened.
        Swal.fire({
          title: 'Error',
          text: `El usuario no se ha cerrado sesión correctamente : ${error}`,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      })
  }

  const register = async (newUser: any) => {
    loading.value = true
    try {
      const { user: userCredential } = await createUserWithEmailAndPassword(
        auth.value,
        newUser.email,
        newUser.password
      )

      const db = getDb()
      const userRef = doc(db, 'users', userCredential.uid)

      newUser.role = newUser.role === 'admin' ? 'admin' : 'user'
      const userData = {
        id: userCredential.uid,
        name: newUser.name,
        lastName: newUser.lastName,
        phoneNumber: newUser.phoneNumber,
        gender: newUser.gender,
        role: newUser.role,
        email: newUser.email
      }
      await setDoc(userRef, {
        ...userData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      })
      toggleRegister()
      Swal.fire({
        title: 'Success',
        text: 'El usuario se ha creado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
       
    } catch (err) {
      console.log(err)
      Swal.fire({
        title: 'Error',
        text: 'El usuario no se ha creado correctamente',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    } finally {
      loading.value = false
    }
  }

    onAuthStateChanged(auth.value, async (userLogin) => {
        console.log('cambio')
        if (userLogin) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = userLogin.uid
        const db = getDb()
        const UserDoc = doc(db, 'users', uid)
        const productSnap = await getDoc(UserDoc)
        user.value = productSnap.data()
        } else {
        user.value = null
        }
    })


  return {
    user,
    error,
    loading,
    login,
    logout,
    register,
    toggleLogin,
    openLogin,
    toggleRegister,
    openRegister,
  }
})
