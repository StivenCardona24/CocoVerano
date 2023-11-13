<template>
  <div class="mt-8">
    <div class="flex flex-col mt-6">
      <div class="py-2 overflow-x-auto sm:-mx-3 sm:px-6 lg:-mx-4 lg:px-8">
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
          v-if="!props.loading"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  v-for="(column, index) in props.headers"
                  :key="'table-header-column-' + column.title + '-' + index"
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                >
                  {{ column.title }}
                </th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(item, itemIndex) in props.items" :key="itemIndex">
                <td
                  v-for="(column, index) in props.headers"
                  :key="
                    'table-body-column-item-' +
                    itemIndex +
                    '-' +
                    column.title +
                    '-' +
                    index
                  "
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <slot :name="'column-' + column.key" :item="item">
                    {{ item[column.key] }}
                  </slot>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <div
            role="status"
            class="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
          >
            <div class="flex items-center justify-between">
              <div>
                <div
                  class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
                ></div>
                <div
                  class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
                ></div>
              </div>
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"
              ></div>
            </div>
            <div class="flex items-center justify-between pt-4">
              <div>
                <div
                  class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
                ></div>
                <div
                  class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
                ></div>
              </div>
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"
              ></div>
            </div>
            <div class="flex items-center justify-between pt-4">
              <div>
                <div
                  class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
                ></div>
                <div
                  class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
                ></div>
              </div>
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"
              ></div>
            </div>
            <div class="flex items-center justify-between pt-4">
              <div>
                <div
                  class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
                ></div>
                <div
                  class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
                ></div>
              </div>
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"
              ></div>
            </div>
            <div class="flex items-center justify-between pt-4">
              <div>
                <div
                  class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
                ></div>
                <div
                  class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
                ></div>
              </div>
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"
              ></div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// eslint-disable-next-line no-undef

const props = defineProps({
  headers: {
    type: Array as () => { title: string; key: string }[],
    required: true
  },
  items: {
    type: Array as () => any[],
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
});
</script>