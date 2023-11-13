<template>
    <headerTable>
        <!-- Contenido personalizado para el input -->
        <template #search-input>
            <t-input type="text" id="searchManageProduct" label="Buscar Producto">
                <template #icon>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </template>
            </t-input>
        </template>

        <!-- Contenido personalizado para el botón -->
        <template #action-button>
            <t-button type="primary" block @click="createProduct">
                <div class="flex items-center gap-x-2 text-sm md:text-lg">
                    <svg class="h-4 w-4 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                    </svg>
                </div>
                Agregar Producto
            </t-button>
        </template>
    </headerTable>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import headerTable from '@/components/general/HeaderTable.vue';
import tButton from '@/components/general/T-Button.vue';
import tInput from '@/components/general/T-Input.vue';


const router = useRouter();
const createProduct = () => {
  router.push({ name: "manageProduct", params: { id: "new" } });
};
</script>