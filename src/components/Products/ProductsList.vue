<template>
    <tTable :items="products" :headers="headers" :loading="loadingProducts">
        <template #column-status="{ item }">
            <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">{{
                item.status }}</span>
        </template>
        <template #column-actions="{ item }">
            <span class="flex gap-x-2 w-full justify-end">

                <font-awesome-icon
                    class="text-red-400 text-lg cursor-pointer hover:text-red-600 hover:scale-110 transform transition-all duration-100"
                    :icon="['fas', 'trash']" />
            </span>
        </template>
    </tTable>
</template>
  
<script lang="ts" setup>
import { ref } from "vue";
import { onMounted } from "vue";
import tTable from "@/components/general/T-Table.vue";


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

const headers = ref([
    {
        title: "Nombre",
        key: "name",
    },
    {
        title: "",
        key: "actions",
    },
]);
</script>