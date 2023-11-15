<template>
    <!-- Modal toggle -->

    <div class="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-40 z-50"></div>
    <!-- Main modal -->
    <div id="authentication-modal" tabindex="-1"
        class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
        arial-modal="true" role="dialog">
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Registrate
                    </h3>
                    <button @click="toggleRegister" type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for="name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres</label>
                            <input v-model="newUser.name" type="text" name="name" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Ingrese su nombre" required>
                        </div>
                        <div>
                            <label for="lastName"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos</label>
                            <input v-model="newUser.lastName" type="text" name="lastName" id="lastName"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Ingrese sus apellidos" required>
                        </div>
                        <div>
                            <label for="phoneNumber"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número
                                telefonico</label>
                            <input v-model="newUser.phoneNumber" type="text" name="phoneNumber" id="phoneNumber"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Ingrese su número de celular" required
                                maxlength="10"
                                minlength="7">
                        </div>
                        <div>
                            <label for="genero"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genero</label>
                            <select v-model="newUser.gender" id="genero"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option disabled value="" selected>Seleccione un genero</option>
                                <option value="MUJER">MUJER</option>
                                <option value="HOMBRE">HOMBRE</option>
                                <option value="OTRO">OTRO</option>

                            </select>
                        </div>



                    </div>

                    <div class="mb-6">
                        <label for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                        <input v-model="newUser.email" type="email" id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="john.doe@company.com" required>
                    </div>
                    <div class="mb-6">
                        <label for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                        <input v-model="newUser.password" type="password" id="password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="•••••••••" required>
                    </div>
                    <div class="mb-4">
                        <label for="confirm_password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirma la
                            Contraseña</label>
                        <input v-model="newUser.password_confirmation" type="password" id="confirm_password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="•••••••••" required>
                    </div>
                    <div class="text-sm font-medium text-gray-500 mb-4 dark:text-gray-300">
                            Tienes una cuenta? <a href="#"
                            @click="toggleLogin"
                                class="text-primary-700 hover:underline dark:text-primary-500">Inicia Sesión</a>
                        </div>
                    <button v-if="!loading" @click="beforeRegister" type="submit"
                        class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        Registrarse
                    </button>
                    <button v-else disabled type="button"
                            class="text-white bg-info-700 hover:bg-info-800 focus:ring-4 focus:outline-none focus:ring-info-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-info-600 dark:hover:bg-info-700 dark:focus:ring-info-800 inline-flex items-center">
                            <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin"
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor" />
                            </svg>
                            Guardando...
                        </button>
                        
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>

import { ref } from "vue";
import Swal from 'sweetalert2';
import { storeToRefs } from "pinia";

import { useAuthStore } from "@/stores/auth";

const AuthStore = useAuthStore();

const { register, toggleRegister, toggleLogin } = AuthStore;
const { loading } = storeToRefs(AuthStore);
const newUser = ref({
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    password: '',
    password_confirmation: ''
})

const beforeRegister = () => {
    if (newUser.value.password !== newUser.value.password_confirmation) {
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden',
        })
    }

    if (newUser.value.name == '' || newUser.value.lastName == '' || newUser.value.email == ''
        || newUser.value.phoneNumber == '' || newUser.value.gender == '' || newUser.value.password == '' || newUser.value.password_confirmation == '') {
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios',
        })
    }

    register(newUser.value);


}


</script>