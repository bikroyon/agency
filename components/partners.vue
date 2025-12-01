<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
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
    <div class="text-center max-w-2xl mb-10 mx-auto px-3">
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
        {{ t("partners.title") }}<span class="text-rose-500"> {{ t("partners.highlight") }}</span>
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        {{t("partners.subtitle")}}
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
