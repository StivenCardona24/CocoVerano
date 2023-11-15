<template>
  <div>
    <h1
      class="mt-10 text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      Nuestros Productos
    </h1>
    <div class="flex justify-center flex-wrap">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="m-5 text-center w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <!-- Muestra la primera imagen del mapa 'images' del producto -->
        <a href="#">
          <img
            class="rounded-t-lg object-cover w-full h-90 aspect-w-1 aspect-h-1"
            :src="product.images[0].url"
            :alt="product.name"
          />
        </a>
        <div class="p-5 flex flex-col justify-start h-52">
          <a href="#">
            <h5
              class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ product.name }}
            </h5>
          </a>
          <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">Para {{ product.category }}</p>
          <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">${{ product.price }}</p>
          <div class="flex justify-center">
            <span 
                v-if="product.S !== 0"
                class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                S
            </span>
            <span 
                v-if="product.M !== 0"
                class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                M
            </span>
            <span 
                v-if="product.L !== 0"
                class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                L
            </span>
            <span 
                v-if="product.XL !== 0"
                class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                XL
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EventBus } from '@/utils/event-bus.js';
import { ref, onMounted } from "vue";
import { useProductStore } from "@/stores/products";

const productStore = useProductStore();
const { getProducts } = productStore;

const products = ref([]);
const loadingProducts = ref(false);

onMounted(async () => {
  loadingProducts.value = true;
  products.value = await getProducts();
  console.log(products.value);
  loadingProducts.value = false;
});

</script>

<style scoped>
.aspect-w-1 {
  aspect-ratio: 1;
}
.aspect-h-1 {
  aspect-ratio: 1;
}
</style>
