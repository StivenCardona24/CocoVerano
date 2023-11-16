import Category from '@/Interfaces/category';
<template>
    <h1
        class="mt-10  text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Categorias</h1>
    <div class="flex justify-center flex-wrap">


        <div v-for="(category, index) in categories" :key="index"
            class="m-5 text-center w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg object-cover w-full h-96" :src="category.image" alt="" />
            </a>
            <div class="p-5 flex flex-col justify-start h-52">
                <a href="#">
                    <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ category.name  }}
                    </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ category.description }}</p>

            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>



const categories = [
    {
    name: "Mujeres",
    description: "Aquí encontrarás una exquisita selección de los vestidos de baño más elegantes y a la moda diseñados especialmente para mujeres.",
    image: "/src/assets/Images/Mujeres.png",
},
{
    name: "Hombres",
    description: "Aquí descubrirás una destacada variedad de vestidos de baño diseñados con estilo y elegancia, pensados exclusivamente para hombres.",
    image: "/src/assets/Images/Hombres.png",
},
{
    name: "Niños",
    description: "Explora nuestra colección de trajes de baño para niños, llena de colores vibrantes y diseños divertidos. ",
    image: "/src/assets/Images/nino.png",
},
{
    name: "Niñas",
    description: "Descubre la moda de trajes de baño para niñas con nuestra exclusiva selección. Para que las niñas disfruten de sus días de sol con confianza y estilo.",
    image: "/src/assets/Images/nina.png",
},

]

</script>