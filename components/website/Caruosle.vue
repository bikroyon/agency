<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });

const images = [
        "https://picsum.photos/468/468?random=1",
        "https://picsum.photos/468/468?random=2",
        "https://picsum.photos/468/468?random=3",
        "https://picsum.photos/468/468?random=4",
        "https://picsum.photos/468/468?random=5",
        "https://picsum.photos/468/468?random=6"
      ]
</script>

<template>
  <div class="container mx-auto py-12">
    <!-- Section Heading -->
    <div class="text-center mb-10">
      <!-- Heading -->
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
        {{t("ecommerce_page.portfolio_section.heading_first")}} <span class="text-rose-500">{{t("ecommerce_page.portfolio_section.heading_highlight")}}</span>
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        {{t("ecommerce_page.portfolio_section.subheading")}}
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
        :items="images"
        :ui="{ item: 'basis-full sm:basis-1/3' }"
      >
        <img :src="item" width="500" height="400" class="rounded-lg" />
      </UCarousel>
    </div>
  </div>
</template>
