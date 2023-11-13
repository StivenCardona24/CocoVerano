<template>
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Agregar un nuevo producto</h2>
        <form action="#">
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div class="sm:col-span-2">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del
                        producto</label>
                    <input type="text" name="name" id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Nombre del producto" required>
                </div>

                <div class="w-full">
                    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                    <input type="number" name="price" id="price"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="$2999" required>
                </div>
                <div>
                    <label for="category"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                    <select id="category"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option selected disabled>Select category</option>
                        <option v-for="(category, index) in Category" :key="index" :value="category">{{ category }}</option>
                    </select>
                </div>
                <div class="sm:col-span-2">
                    <h3 class="mb-2">Tallas</h3>
                    <div class="flex justify-between">
                        <div>
                            <label for="quantity-S"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">S</label>
                            <input type="number" name="quantity-S" id="quantity-S"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="12" required>
                        </div>
                        <div>
                            <label for="quantity-M"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">M</label>
                            <input type="number" name="quantity-M" id="quantity-M"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="12" required>
                        </div>
                        <div>
                            <label for="quantity-L"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">L</label>
                            <input type="number" name="quantity-L" id="quantity-L"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="12" required>
                        </div>
                        <div>
                            <label for="quantity-XL"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">XL</label>
                            <input type="number" name="quantity-XL" id="quantity-XL"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="12" required>
                        </div>
                    </div>

                </div>

                <div class="sm:col-span-2">
                    <h3>Imagenes</h3>

                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div v-for="(image, index) in images" :key=index>
                            <img class="h-auto max-w-full rounded-lg" :src="image.url" alt="">
                            <t-Button type="warning"></t-Button>
                        </div>

                    </div>

                </div>


                <div class="sm:col-span-2">
                    <label for="description"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción del
                        producto</label>
                    <textarea id="description" rows="6"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Una descripción del producto"></textarea>
                </div>



            </div>
            <button type="submit"
                class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Add product
            </button>
        </form>
    </div>
</template>


<script lang="ts" setup>
import tInput from "@/components/general/T-Input.vue";
import tButton from "@/components/general/T-Button.vue";
import { ref } from "vue";
import { onMounted } from "vue";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";


import { useProductStore } from "@/stores/products";
import Category from '../../Interfaces/category';



const productStore = useProductStore();
const { getProduct, createProduct, updateProduct } = productStore;





const router = useRouter();
const route = useRoute();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const product = ref<any>({
    name: "",
    id: "",
    createdAt: "",
    updatedAt: "",
});

const images = ref([{
    url: "https://cdn-icons-png.flaticon.com/512/263/263100.png"
}])

const loading = ref(false);

const save = async () => {
    loading.value = true;
    if (route.params.id === "new") {
        await createProduct(product.value);
    } else {
        await updateProduct(product.value);
    }
    loading.value = false;
    router.go(-1);
};

onMounted(async () => {
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
