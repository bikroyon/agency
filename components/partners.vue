<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });
const brandLogos = [
  "/brands/DailyFoodShop.png",
  "/brands/Logo00.png",
  "/brands/FalaqFood.png",
  "/brands/Logo02.png",
  "/brands/HFFood.png",
  "/brands/Logo03.png",
  "/brands/KhasFood.png",
  "/brands/LaOrganika.png",
  "/brands/Logo05.png",
  "/brands/OrganicOnline.png",
  "/brands/Logo04.png",
  "/brands/ShefaNaturalFood.png",
  "/brands/Sukkar.png",
  "/brands/Logo01.png",
];
</script>

<template>
  <section class="py-16 relative">
    <div class="text-center max-w-2xl mb-10 mx-auto px-3">
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
        {{ t("home.partners.title")
        }}<span class="text-rose-500"> {{ t("home.partners.highlight") }}</span>
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        {{ t("home.partners.subtitle") }}
      </p>
    </div>

    <UMarquee class="flex items-center gap-8">
      <img
        v-for="(logo, index) in brandLogos"
        :key="index"
        :src="logo"
        class="h-10 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-500 ease-in-out "
        :alt="`Brand ${index + 1}`"
      />
    </UMarquee>
  </section>
</template>
