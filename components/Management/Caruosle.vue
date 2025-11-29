<script setup lang="ts">
const items = [
  'https://picsum.photos/468/468?random=1',
  'https://picsum.photos/468/468?random=2',
  'https://picsum.photos/468/468?random=3',
  'https://picsum.photos/468/468?random=4',
  'https://picsum.photos/468/468?random=5',
  'https://picsum.photos/468/468?random=6'
]
</script>

<template>
  <div class="container mx-auto py-12">
    <!-- Section Heading -->
    <div class="text-center mb-10">
      <!-- Heading -->
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
        আমাদের ম্যানেজ করা <span class="text-rose-500">কিছু ওয়েবসাইট</span>
      </h2>
      <p class="mt-2 text-sm sm:text-lg">বিশ্বস্তভাবে ম্যানেজ করা আমাদের কিছু নির্বাচিত ওয়েবসাইট দেখুন।</p>
    </div>
    <UCarousel v-slot="{ item }" :prev="{ color: 'secondary' }" :next="{ color: 'secondary' }" loop arrows dots
      :autoplay="{ delay: 2000 }" :items="items" :ui="{ item: 'basis-full sm:basis-1/3' }">
      <img :src="item" width="500" height="500" class="rounded-lg" />
    </UCarousel>

  </div>
</template>
