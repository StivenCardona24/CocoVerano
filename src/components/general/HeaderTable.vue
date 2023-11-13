<template>
  <div class="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
    <div class="flex flex-col items-center justify-around p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
      <div class="w-full md:w-1/2">
        <form class="flex items-center">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            
            <!-- Input como slot -->
            <slot name="search-input">
            
            </slot>
          </div>
        </form>
      </div>
      <div class="flex flex-col items-stretch justify-center flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
        <!-- Botón como slot -->
        <slot name="action-button">
          <button
            type="button"
            class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            <svg class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
            </svg>
            Add product
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>
