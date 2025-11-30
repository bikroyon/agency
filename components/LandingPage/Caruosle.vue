<script setup lang="ts">
const items = [
  "https://picsum.photos/468/468?random=1",
  "https://picsum.photos/468/468?random=2",
  "https://picsum.photos/468/468?random=3",
  "https://picsum.photos/468/468?random=4",
  "https://picsum.photos/468/468?random=5",
  "https://picsum.photos/468/468?random=6",
];
</script>

<template>
  <div class="container mx-auto py-12">
    <!-- Section Heading -->
    <div class="text-center mb-10">
      <!-- Heading -->
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
        আমাদের তৈরি করা কিছু <span class="text-rose-500">ল্যান্ডিং পেইজে</span>
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        আমাদের তৈরি ল্যান্ডিং পেজ শুধু সুন্দর নয়—এটি সাইকোলজিক্যালি কনভার্টিং
        করার মতো করে তৈরি।
      </p>
    </div>
    <!-- Carousel -->
    <div class="md:px-4 px-2">
      <UCarousel
        v-slot="{ item }"
        :prev="{ color: 'error' }"
        :next="{ color: 'error' }"
        loop
        arrows
        dots
        :autoplay="{ delay: 2000 }"
        :items="items"
        :ui="{ item: 'basis-full sm:basis-1/3' }"
      >
        <img :src="item" width="500" height="400" class="rounded-lg" />
      </UCarousel>
    </div>
  </div>
</template>
