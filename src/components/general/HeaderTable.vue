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
         
        </slot>
      </div>
    </div>
  </div>
</template>
