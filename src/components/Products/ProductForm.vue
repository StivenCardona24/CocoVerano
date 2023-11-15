<template>
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">{{ title }}</h2>

        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div class="sm:col-span-2">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del
                    producto</label>
                <input v-model="product.name" type="text" name="name" id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Nombre del producto" required>
            </div>

            <div class="w-full">
                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                <input v-model="product.price" type="number" name="price" id="price"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$10000" required  min="0">
            </div>
            <div>
                <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                <select v-model="product.category" id="category"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected disabled value="">Seleccione una categoria</option>
                    <option v-for="(category, index) in Category" :key="index" :value="category">{{ category }}</option>
                </select>
            </div>
            <div class="sm:col-span-2">
                <h3 class="mb-2">Tallas</h3>
                <div class="flex justify-between">
                    <div>
                        <label for="quantity-S"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">S</label>
                        <input v-model="product.S" type="number" name="quantity-S" id="quantity-S"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="0" required
                            min="0"
                            >
                    </div>
                    <div>
                        <label for="quantity-M"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">M</label>
                        <input v-model="product.M" type="number" name="quantity-M" id="quantity-M"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="0" required  min="0">
                    </div>
                    <div>
                        <label for="quantity-L"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">L</label>
                        <input v-model="product.L" type="number" name="quantity-L" id="quantity-L"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="0" required  min="0">
                    </div>
                    <div>
                        <label for="quantity-XL"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">XL</label>
                        <input v-model="product.XL" type="number" name="quantity-XL" id="quantity-XL"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="0" required  min="0">
                    </div>
                </div>

            </div>

            <div class="sm:col-span-2">
                <h3>Imagenes</h3>


                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file"
                        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click
                                    to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" @change="handleImageUpload" />
                    </label>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                    <div v-for="(image, index) in product.images" :key=index>
                        <img class="h-auto max-w-full rounded-lg mb-4" :src="image.url" :alt="image.file">
                        <t-Button type="warning" block @click="handleImageDelete(image)">
                            <font-awesome-icon icon="fa-regular fa-trash-can" style="color: #fafafa;" />
                        </t-Button>
                    </div>

                </div>

            </div>


            <div class="sm:col-span-2">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción
                    del
                    producto</label>
                <textarea v-model="product.description" id="description" rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Una descripción del producto"></textarea>
            </div>



        </div>
        <button @click="save"
            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Guardar Producto
        </button>

    </div>
</template>


<script lang="ts" setup>
import tButton from "@/components/general/T-Button.vue";
import { ref } from "vue";
import { onMounted } from "vue";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";


import { useAuthStore } from "@/stores/auth";
import { useProductStore } from "@/stores/products";
import Category from '../../Interfaces/category';
import Swal from 'sweetalert2'
import { storeToRefs } from "pinia";


const productStore = useProductStore();
const { getProduct, createProduct, updateProduct, saveImage, deleteImage } = productStore;

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const router = useRouter();
const route = useRoute();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const product = ref<any>({
    name: "",
    category: "",
    images: [],
    description: "",

});

const loading = ref(false);

const save = async () => {
    let message: any = {
        title: 'Error',
        text: 'No se pudo guardar el producto',
        icon: 'error',
        confirmButtonText: 'Aceptar'
    }
    loading.value = true;
    if (route.params.id === "new") {
        message = await createProduct(product.value);
    } else {
        message = await updateProduct(product.value);
    }
    Swal.fire({
        title: message.title,
        text: message.text,
        icon: message.icon,
        confirmButtonText: message.confirmButtonText,
    });

    if (message.icon === 'success') {
        router.go(-1);
    }
    loading.value = false;

};

const handleImageUpload = async (event: any) => {
    const file = event.target.files[0];
    if (product.value.name === '') {
        Swal.fire({
            title: 'Error',
            text: 'Por favor ingrese el nombre del producto',
            icon: 'warning',
            showConfirmButton: false,
        });

        return;
    }
    const img = await saveImage(file, product.value.name, product.value.images.length);
    console.log(img)
    product.value.images.push(img);
}

const handleImageDelete = async (image: any) => {


    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: true
    });
    swalWithBootstrapButtons.fire({
        title: "Estas seguro?",
        text: "No podras revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, Eliminalo!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {

            deleteImage(image, product.value);
            product.value.images.splice(product.value.images.indexOf(image), 1);
            swalWithBootstrapButtons.fire({
                title: "Eliminada!",
                text: "Tu imagen ha sido eliminada.",
                icon: "success"
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: "Tu imagen esta guardada :)",
                icon: "error"
            });
        }
    });



}



onMounted(async () => {
    if(!user.value || user.value.role !== 'admin') {
        router.push('/');
    }
    if (route.params.id !== "new") {
        const data = await getProduct(route.params.id as string);
        product.value = data || product.value;
    }
});

const title = computed(() => {
    if (route.params.id === "new") {
        return "Crear Producto";
    }
    return `Editando Producto: ${capitalize(product.value.name)}`;
});

const capitalize = (value: string) => {
    if (!value) return "";
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};
</script>
