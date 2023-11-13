<template>
  <div class="flex justify-center items-center w-full max-w-sm">
    <div class="bg-white rounded shadow-md p-8 text-center">
      <h2 class="mb-6 text-xl font-semibold">Inicio de sesión</h2>

      <form @submit.prevent="onSubmit">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Correo electrónico</label
          >
          <input
            id="email"
            type="email"
            class="form-control w-full px-3 py-2 border-gray-300 focus:border-indigo-300 focus:ring-indigo-200 focus:ring-offset-2"
            v-model="email"
          />
        </div>

        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            id="password"
            type="password"
            class="form-control w-full px-3 py-2 border-gray-300 focus:border-indigo-300 focus:ring-indigo-200 focus:ring-offset-2"
            v-model="password"
          />
        </div>

        <div class="mb-4">
          <t-button type="primary" block> Iniciar sesión </t-button>
        </div>
        
      </form>

      <div class="mt-4 text-sm text-gray-500">
        ¿No tienes una cuenta?
        <router-link to="/register" class="font-semibold underline">Regístrate</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import tButton from '@/components/general/T-Button.vue';

   let   email: ""
   let   password: ""




    function onSubmit() {
      // Realiza la lógica de inicio de sesión aquí
    }
</script>
