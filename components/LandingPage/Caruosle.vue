<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });

const items = computed(() => [
  t("landing_portfolio_section.images.0"),
  t("landing_portfolio_section.images.1"),
  t("landing_portfolio_section.images.2"),
  t("landing_portfolio_section.images.3"),
]);
</script>

<template>
  <div class="container mx-auto py-12">
    <!-- Section Heading -->
    <div class="text-center mb-10">
      <!-- Heading -->
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
        {{t("landing_portfolio_section.heading_first")}} <span class="text-rose-500">{{t("landing_portfolio_section.heading_highlight")}}</span>
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        {{t("landing_portfolio_section.subheading")}}
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
