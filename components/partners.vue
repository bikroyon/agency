<script setup lang="ts">
const brandLogos = [
  "/brands/DailyFoodShop.png",
  "/brands/FalaqFood.png",
  "/brands/HFFood.png",
  "/brands/KhasFood.png",
  "/brands/LaOrganika.png",
  "/brands/OrganicOnline.png",
  "/brands/ShefaNaturalFood.png",
  "/brands/Sukkar.png",
];
</script>

<template>
  <section class="py-16 relative">
    <div class="text-center mb-10">
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
        আমাদের<span class="text-rose-500"> পার্টনার ব্র্যান্ডস</span>
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        আমাদের ওয়েবসাইট ও ল্যান্ডিং পেজের মাধ্যমে শত শত উদ্যোক্তা আজ ব্যবসায়
        ৩-৪গুন সফলতা পেয়েছেন— আপনিও হতে পারেন পরবর্তী সাফল্যের অংশ।
      </p>
    </div>

    <UMarquee class="flex items-center gap-8">
      <img
        v-for="(logo, index) in brandLogos"
        :key="index"
        :src="logo"
        class="h-10 md:h-16 w-auto"
        :alt="`Brand ${index + 1}`"
      />
    </UMarquee>
  </section>
</template>
