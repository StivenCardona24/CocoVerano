<template>
    <div class="flex justify-center items-center w-full max-w-sm">
      <div class="bg-white rounded shadow-md p-8 text-center">
        <h2 class="mb-6 text-xl font-semibold">Registro</h2>
  
        <form @submit.prevent="onSubmit">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Nombres</label>
            <input
              id="name"
              type="text"
              class="form-control w-full px-3 py-2 border-gray-300 focus:border-indigo-300 focus:ring-indigo-200 focus:ring-offset-2"
              v-model="name"
            />
          </div>

         
          <div class="mb-4">
            <label for="lastName" class="block text-sm font-medium text-gray-700">Apellidos</label>
            <input
              id="lastName"
              type="text"
              class="form-control w-full px-3 py-2 border-gray-300 focus:border-indigo-300 focus:ring-indigo-200 focus:ring-offset-2"
              v-model="lastName"
            />
          </div>

          <div class="mb-4">
            <label for="birthdate" class="block text-sm font-medium text-gray-700">Fecha de nacimiento</label>
            <input
             id="birthdate"
             type="date"
             class="form-control w-full px-3 py-2 border-gray-300 focus:border-indigo-300 focus:ring-indigo-200 focus:ring-offset-2"
             v-model="birthdate"
             />
          </div>        
          
          <div class="mb-4">
            <label for="address" class="block text-sm font-medium text-gray-700">dirección</label>
            <input
              id="address"
              type="text"
              class="form-control w-full px-3 py-2 border-gray-300 focus:border-indigo-300 focus:ring-indigo-200 focus:ring-offset-2"
              v-model="address"
            />
          </div>
          
          

  
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
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
            <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
            <input
              id="password_confirmation"
              type="password"
              class="form-control w-full px-3 py-2 border-gray-300 focus:border-indigo-300 focus:ring-indigo-200 focus:ring-offset-2"
              v-model="password_confirmation"
            />
          </div>
  
          

            <div class="mb-4">
          <t-button type="primary" block>   Registrarse </t-button>
        </div>

           
          <div class="mt-4 text-sm text-gray-500">
            ¿Ya tienes una cuenta?
            <router-link to="/login" class="font-semibold underline">Iniciar sesión</router-link>
          </div>
        </form>
      </div>
    </div>
  </template>





  
  <script lang="ts" setup>
import tButton from '@/components/general/T-Button.vue';
    
    let    name: ""
    let    lastName: ""
    let    birthdate: ""
    let    address: ""
    let    email: ""
    let    password: ""
    let    password_confirmation: ""
    

  

    function  onSubmit() {
        // Realiza la lógica de registro aquí
      }
  
  </script>
  