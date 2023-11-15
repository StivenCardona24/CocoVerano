import './assets/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { faPerson, faPersonDress, faChild, faChildDress } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';



import { createApp } from 'vue'
import { createPinia, storeToRefs } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App.vue'
import router from './router'
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth, getDb } from './firebase';
import { useAuthStore } from './stores/auth';
import { doc, getDoc } from 'firebase/firestore';

/* add icons to the library */
library.add(faUserSecret)
library.add(faTrashCan)
library.add(faList)
library.add(faChartPie)
library.add(faBagShopping)
library.add(faUserGear)
library.add(faFilter)
library.add(faUserLock)
library.add(faPerson)
library.add(faPersonDress)
library.add(faChild)
library.add(faChildDress)
library.add(faPlus)
library.add(faTrash)
library.add(faPenToSquare)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueSweetalert2)
app.use(createPinia())
app.use(router)

const initializeAppAndUser = async () => {
    const authStore = useAuthStore()
    const { user } = storeToRefs(authStore)
    
    const db = getDb()
    const auth = getAuth();
    
    const userLogin:any = await new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          unsubscribe();
          resolve(user);
        });
      });
      if (userLogin) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = userLogin.uid;
        const UserDoc = doc(db, 'users', uid)
        const productSnap = await getDoc(UserDoc)
        user.value = productSnap.data()
        
      } else {
        user.value = null
      }
    console.log(userLogin)

}

await initializeAppAndUser();


app.mount('#app')



