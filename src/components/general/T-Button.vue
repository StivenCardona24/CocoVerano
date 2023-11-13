<template>
    <button
      :class="{
        'bg-primary-600 hover:bg-primary-800': props.type === 'primary',
        'bg-secondary-600 hover:bg-secondary-800': props.type === 'secondary',
        'bg-error-600 hover:bg-error-800': props.type === 'error',
        'bg-success-600 hover:bg-success-800': props.type === 'success',
        'bg-warning-600 hover:bg-warning-800': props.type === 'warning',
        'bg-info-600 hover:bg-info-800': props.type === 'info',
        'w-full': props.block,
        'rounded-full p-4': props.rounded,
        'rounded-lg px-6 py-2': !props.rounded,
      }"
      class="flex justify-center text-white tracking-wide font-semibold transition ease-in duration-100"
    >
      <div v-if="props.loading">cargando ...</div>
      <slot v-else></slot>
    </button>
  </template>
  <script lang="ts" setup>
  // eslint-disable-next-line no-undef
  const props = defineProps<{
    type: "primary" | "secondary" | "error" | "success" | "warning" | "info";
    loading?: boolean;
    block?: boolean;
    rounded?: boolean;
  }>();
  </script>