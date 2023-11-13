<script setup lang="ts">
import { RouterView } from 'vue-router'
import sidebar from "./components/layouts/SideBar.vue";
import navbar from "./components/layouts/NavBar.vue";
</script>


<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">

    <navbar/>
    <sidebar/>
    <main class="p-4 md:ml-64 h-auto pt-20">

      <RouterView />
    </main>
  </div>
</template>


