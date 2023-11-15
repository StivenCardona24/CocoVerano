import './assets/style.css'
import './flowbite.ts';
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
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App.vue'
import router from './router'

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

app.mount('#app')
