<!-- error.vue -->
<script setup lang="ts">
import type { NuxtError } from '#app'
import DefaultLayout from '~/layouts/default.vue'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <DefaultLayout>
    <div class="min-h-screen flex flex-col justify-center items-center">
      <h1 class="text-9xl font-bold text-gray-600">{{ error?error.statusCode : 'Ops...' }}</h1>
      <p class="mb-4 text-xl font-semibold text-gray-300">{{ error?error.message:'Somthing went to Wrong' }}</p>
      <NuxtLink to="/" class="text-white-500 flex items-center gap-2 text-lg rounded-2xl bg-rose-900 px-4 py-2">
        <Icon name="hugeicons:home-09"/>
        <span>Go back Home</span>
      </NuxtLink>
    </div>
  </DefaultLayout>
</template>
