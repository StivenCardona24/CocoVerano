<template>
    <TTable :items="products" :headers="headers" :loading="loadingProducts">
        <template #column-image="{ item }">
            <img class="w-16 md:w-32 max-w-full max-h-full" :src="item.images[0].url" :alt="item.name">
        </template>
        <template #column-status="{ item }">
            <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">{{
                item.status }}</span>
        </template>
        <template #column-actions="{ item }">
            <span class="flex gap-x-3 ">
                <router-link :to="{ name: 'manageProduct', params: { id: item.id } }">
                    <font-awesome-icon
                        class="text-orange-300 text-lg cursor-pointer hover:text-orange-400 hover:scale-110 transform transition-all duration-100"
                        :icon="['fas', 'pen-to-square']" />
                </router-link>
                <font-awesome-icon @click="handleDeleteProduct(item.id)"
                    class="text-red-400 text-lg cursor-pointer hover:text-red-600 hover:scale-110 transform transition-all duration-100"
                    :icon="['fas', 'trash']" />
            </span>
        </template>
    </tTable>
</template>
  
<script lang="ts" setup>
import { ref } from "vue";
import { onMounted } from "vue";
import TTable from "@/components/general/T-Table.vue";



import { useProductStore } from "@/stores/products";
const productStore = useProductStore();
const { getProducts, deleteProduct } = productStore;



const products = ref(<any[]>[]);
const loadingProducts = ref(false);


const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id);
    products.value = await getProducts();
};

onMounted(async () => {
    loadingProducts.value = true;
    products.value = await getProducts();
    console.log(products.value);
    loadingProducts.value = false;
});

const headers = ref([
    {
        title: "Imagen",
        key: "image",
    },
    {
        title: "Nombre",
        key: "name",
    },
    {
        title: "Precio",
        key: "price",
    },
    {
        title: "Categoria",
        key: "category",
    },
    {
        title: "S",
        key: "S",
    },
    {
        title: "M",
        key: "M",
    },
    {
        title: "L",
        key: "L",
    },
    {
        title: "XL",
        key: "XL",
    },
    {
        title: "Acciones",
        key: "actions",
    },

]);
</script>