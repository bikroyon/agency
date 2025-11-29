<script setup lang="ts">
const brandLogos = [
  "/brands/DailyFoodShop.png",
  "/brands/FalaqFood.png",
  "/brands/HFFood.png",
  "/brands/KhasFood.png",
  "/brands/LaOrganika.png",
  "/brands/OrganicOnline.png",
  "/brands/ShefaNaturalFood.png",
  "/brands/Sukkar.png"
];
</script>

<template>
  <section class="py-16 relative">
    <div class="text-center mb-10">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
        আমাদের থেকে <span class="text-rose-500">উপকৃত</span> হয়েছেন যারা
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        আমি সবসময় চেষ্টা করি একটা ভালো মানের সার্ভিস ক্লাইন্টদের দিতে। আলহামদুলিল্লাহ্‌ এই ধারাবাহিকতা আমি ২০২২ সাল থেকে ধরে রেখেছি
      </p>
    </div>

    <UMarquee class="flex items-center gap-8">
      <img
        v-for="(logo, index) in brandLogos"
        :key="index"
        :src="logo"
        class="h-16 w-auto"
        :alt="`Brand ${index + 1}`"
      />
    </UMarquee>
  </section>
</template>
