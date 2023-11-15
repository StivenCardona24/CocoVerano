<template>
    <headerTable>
        <!-- Contenido personalizado para el input -->
        <template #search-input>
            <t-input type="text" id="searchManageProduct" label="Buscar Producto" v-model="search">
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

                <font-awesome-icon class="w-6 h-6 mr-2" :icon="['fas', 'plus']" />

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
import { ref } from 'vue';

const search = ref('');
const router = useRouter();
const createProduct = () => {
    router.push({ name: "manageProduct", params: { id: "new" } });
};
</script>