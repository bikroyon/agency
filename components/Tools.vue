<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });
const brandLogos = [
  "/tools/DailyFoodShop.png",
  "/tools/FalaqFood.png",
  "/tools/HFFood.png",
  "/tools/KhasFood.png",
  "/tools/LaOrganika.png",
  "/tools/OrganicOnline.png",
  "/tools/ShefaNaturalFood.png",
  "/tools/Sukkar.png",
];
</script>

<template>
  <section class="py-16 relative">
    <div class="text-center max-w-2xl mb-10 mx-auto px-3">
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
        {{ t("about_page.tools.title")
        }}<span class="text-rose-500">
          {{ t("about_page.tools.highlight") }}
        </span>
        {{ t("about_page.tools.title_last") }}
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        {{ t("about_page.tools.subtitle") }}
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
