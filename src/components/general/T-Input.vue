<template>
    <div class="relative flex items-center">
      <!-- Slot para el icono -->
      <slot name="icon" class="absolute left-2.5 text-gray-500" />
  
      <input
        :type="props.type"
        :id="props.id"
        class="block pl-10 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border appearance-none border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
        placeholder=" "
        v-model="value"
      />
      <label
        :for="props.id"
        class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >{{ props.label }}</label>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed } from "vue";
  
  const props = defineProps<{
    type: "text" | "password" | "email" | "number";
    label: string;
    id: string;
    modelValue: string | number;
  }>();
  
  const emit = defineEmits(["update:modelValue"]);
  
  const value = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit("update:modelValue", value);
    },
  });
  </script>
  