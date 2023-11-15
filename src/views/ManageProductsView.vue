<template>

  <ProductsOptions/>
  <ProductsList/>
</template>

<script lang="ts" setup>
import ProductsOptions from '@/components/Products/ProductsOptions.vue';
import ProductsList from '@/components/Products/ProductsList.vue'
import { on } from 'events';
import { onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';
import { storeToRefs } from 'pinia';
import router from '@/router';

const authStore = useAuthStore();
const {user} = storeToRefs(authStore);

onMounted(() => {
  if(!user.value || user.value.role !== 'admin') {
        router.push('/');
    }
})
</script>