<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });

const items = computed(() => [
  t("smm.portfolio.images.0"),
  t("smm.portfolio.images.1"),
  t("smm.portfolio.images.2"),
  t("smm.portfolio.images.3"),
  t("smm.portfolio.images.4"),
  t("smm.portfolio.images.5"),
]);
</script>

<template>
  <div class="container mx-auto py-12">
    <!-- Section Heading -->
    <div class="text-center mb-10">
      <!-- Heading -->
      <h2 class="text-3xl sm:text-4xl font-bold">
        {{t("smm.portfolio.heading_first")}} <span class="text-rose-500">{{t("smm.portfolio.heading_highlight")}}</span>
      </h2>
      <p class="mt-2 text-sm sm:text-lg max-w-2xl mx-auto">
        {{t("smm.portfolio.subheading")}}
      </p>
    </div>
    <!-- Carousel -->
    <div class="md:px-4 px-3">
      <UCarousel
        v-slot="{ item }"
        :prev="{ color: 'error' }"
        :next="{ color: 'error' }"
        loop
        arrows
        :autoplay="{ delay: 2000 }"
        :items="items"
        :ui="{ item: 'basis-full sm:basis-1/3' }"
      >
        <img :src="item" width="500" height="400" class="rounded-lg" />
      </UCarousel>
    </div>
  </div>
</template>
