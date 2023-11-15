<template>
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-24 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidenav" id="drawer-navigation">
    <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
      <form action="#" method="GET" class="md:hidden mb-2">
        <label for="sidebar-search" class="sr-only">Search</label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
              </path>
            </svg>
          </div>
          <input type="text" name="search" id="sidebar-search"
            class="bg-gray-50 border border-gray-300 text-primary-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Search" />
        </div>
      </form>
      <ul class="space-y-2">
        <li v-if=" user && user.role == 'admin'">
          <a href="#"
            class="flex items-center p-2 text-base font-medium text-primary-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <font-awesome-icon class="w-6 h-6 " :icon="['fas', 'chart-pie']" />
            <span class="ml-3">Overview</span>
          </a>
        </li>

        <li>
          <button type="button"
            class="flex items-center p-2 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-categories" data-collapse-toggle="dropdown-categories">
            <font-awesome-icon class="w-6 h-6" :icon="['fas', 'list']" />
            <span class="flex-1 ml-3 text-left whitespace-nowrap">Categorias</span>
            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <ul id="dropdown-categories" class="hidden py-2 space-y-2">
            <li>
              <a href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <font-awesome-icon class="h-4 w-4 mr-2" :icon="['fas', 'person']" />
                Hombre</a>
            </li>
            <li>
              <a href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <font-awesome-icon class="h-4 w-4 mr-2" :icon="['fas', 'person-dress']" />
                Mujer
              </a>
            </li>
            <li>
              <a href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <font-awesome-icon class="h-4 w-4 mr-2" :icon="['fas', 'child-dress']" />
                Niña</a>
            </li>
            <li>
              <a href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <font-awesome-icon class="h-4 w-4 mr-2" :icon="['fas', 'child']" />
                Niño
              </a>
            </li>
          </ul>
        </li>

        <li>
          <button type="button"
            class="flex items-center p-2 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-filter" data-collapse-toggle="dropdown-filter">
            <font-awesome-icon class="w-6 h-6" :icon="['fas', 'filter']" />
            <span class="flex-1 ml-3 text-left whitespace-nowrap">Filtros</span>
            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <ul id="dropdown-filter" class="hidden py-2 space-y-2">
            <li>
              <router-link to="/manageProducts">

                <a
                  class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
              </router-link>
            </li>

            <li class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group">
              <h3>Tallas</h3>
            </li>
            <li class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <input id="s-checkbox" type="checkbox" value="" v-model="sFilter" @change="applySizeFilter" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="s-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">S</label>
            </li>
            <li class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <input id="m-checkbox" type="checkbox" value="" v-model="mFilter" @change="applySizeFilter" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="m-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">M</label>
            </li>
            <li class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <input id="l-checkbox" type="checkbox" value="" v-model="lFilter" @change="applySizeFilter" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="l-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">L</label>
            </li>
            <li class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <input id="xl-checkbox" type="checkbox" value="" v-model="xlFilter" @change="applySizeFilter" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="xl-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">XL</label>
            </li>

            <li class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group">
              <h3>Novedades</h3>
            </li>
            <li class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <input id="today-checkbox" type="checkbox" value="" v-model="todayFilter" @change="applyTimeFilter" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="today-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hoy</label>
            </li>
            <li class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <input id="this-week-checkbox" type="checkbox" value="" v-model="weekFilter" @change="applyTimeFilter" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="this-week-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Esta semana</label>
            </li>
            <li class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <input id="this-month-checkbox" type="checkbox" value="" v-model="monthFilter" @change="applyTimeFilter" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="this-month-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Últimos 30 días</label>
            </li>

          </ul>
        </li>

        <li v-if="user">
          <button type="button"
            class="flex items-center p-2 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            <font-awesome-icon class="w-6 h-6" :icon="['fas', 'bag-shopping']" />
            <span class="flex-1 ml-3 text-left whitespace-nowrap">Compras</span>
          </button>

        </li>


        <li  v-if="user && user.role == 'admin'">
          <button type="button"
            class="flex items-center p-2 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-manage" data-collapse-toggle="dropdown-manage">
            <font-awesome-icon class="w-6 h-6" :icon="['fas', 'user-gear']" />
            <span class="flex-1 ml-3 text-left whitespace-nowrap">Administrador</span>
            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <ul id="dropdown-manage" class="hidden py-2 space-y-2">
            <li>
              <router-link to="/manageProducts">

                <a
                  class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Productos</a>
              </router-link>
            </li>
            <li>
              <a href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Pedidos</a>
            </li>
            <li>
              <a href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Categorias</a>
            </li>
            <li>
              <a href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Estados</a>
            </li>
          </ul>
        </li>


        <li v-if="!user">
          <button type="button"
            class="flex items-center p-2 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
            <font-awesome-icon class="h-6 w-6" :icon="['fas', 'user-lock']" />
            <span class="flex-1 ml-3 text-left whitespace-nowrap">Authentication</span>
            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <ul id="dropdown-authentication" class="hidden py-2 space-y-2">
            <li>
              <a href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Iniciar
                Sesión</a>
            </li>
            <li>
              <a href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Registrarse</a>
            </li>
            <li>
              <a href="#"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-primary-700 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Olvidaste
                la contraseña?</a>
            </li>
          </ul>
        </li>
      </ul>
      
    </div>
    
  </aside>
</template>

<script>
export default {
  data() {
    return {
      sFilter: false,
      mFilter: false,
      xFilter: false,
      xlFilter: false,
      todayFilter: false,
      weekFilter: false,
      monthFilter: false

    };
  },
  computed: {
    productosFiltrados() {
      // Lógica para filtrar los productos según los checkboxes seleccionados
      let productosFiltrados = this.productos;

      if (this.filtroHombre) {
        productosFiltrados = productosFiltrados.filter(producto => producto.categoria === 'hombre');
      }

      if (this.filtroMujer) {
        productosFiltrados = productosFiltrados.filter(producto => producto.categoria === 'mujer');
      }

      // Agrega más lógica de filtrado según tus necesidades
      // ...

      return productosFiltrados;
    },
  },
  methods: {
    applySizeFilter() {
      
    },

    applyTimeFilter() {
      
    }
  },
};
</script>