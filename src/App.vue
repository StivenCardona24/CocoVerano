<script setup lang="ts">
import { RouterView } from 'vue-router'
import sidebar from "./components/layouts/SideBar.vue";
import navbar from "./components/layouts/NavBar.vue";
import LogIn from "./components/Auth/LogIn.vue";
import SignUp from "./components/Auth/SignUp.vue";


import { useAuthStore } from './stores/auth';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
const authStore = useAuthStore();
const { openLogin, openRegister } = storeToRefs(authStore);




</script>


<template>
  <div class="antialiased">

    <navbar/>
    <sidebar/>
    <main class="p-4 md:ml-64 h-auto pt-4 md:pt-32">

      <RouterView />
      
    </main>
    <LogIn v-if="openLogin"/>
    <SignUp v-if="openRegister"/>
  </div>
</template>



