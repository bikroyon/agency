<script setup lang="ts">
import { computed } from "vue";

const { t } = useI18n({ useScope: "global" });

const benefits = computed(() => [
  {
    icon: "mdi:cog-outline",
    title: t("custom_app.why.benefits.0.title"),
    description: t("custom_app.why.benefits.0.desc"),
  },
  {
    icon: "mdi:chart-line",
    title: t("custom_app.why.benefits.1.title"),
    description: t("custom_app.why.benefits.1.desc"),
  },
  {
    icon: "mdi:shield-check",
    title: t("custom_app.why.benefits.2.title"),
    description: t("custom_app.why.benefits.2.desc"),
  },
  {
    icon: "mdi:autorenew",
    title: t("custom_app.why.benefits.3.title"),
    description: t("custom_app.why.benefits.3.desc"),
  },
  {
    icon: "mdi:storefront-outline",
    title: t("custom_app.why.benefits.4.title"),
    description: t("custom_app.why.benefits.4.desc"),
  },
  {
    icon: "mdi:tools",
    title: t("custom_app.why.benefits.5.title"),
    description: t("custom_app.why.benefits.5.desc"),
  },
]);
</script>
<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto text-center">
      <!-- Heading -->
      <h2 class="text-3xl sm:text-4xl font-bold leading-snug">
        {{ t("custom_app.why.title_before") }}
        <span class="text-rose-500">
          {{ t("custom_app.why.title_highlight") }}
        </span>
        {{ t("custom_app.why.title_after") }}
      </h2>

      <!-- Subtitle -->
      <p class="mt-4 text-sm sm:text-lg max-w-3xl mx-auto">
        {{ t("custom_app.why.subtitle") }}
      </p>

      <!-- Benefits -->
      <section class="py-8">
        <div
          class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 border border-gray-300 dark:border-gray-700 rounded-2xl p-2 md:p-3"
        >
          <div
            v-for="(feature, index) in benefits"
            :key="index"
            class="p-3 md:p-4 flex flex-col items-center text-center border-gray-300 dark:border-gray-700"
            :class="[
              // add top border if not in first row
              index >= 3 ? 'md:border-t' : '',
              // add left border if not first in the row
              index % 3 !== 0 ? 'md:border-l' : '',
            ]"
          >
            <div class="text-rose-500">
              <Icon :name="feature.icon" class="w-8 h-8 md:w-12 md:h-12" />
            </div>
            <h3
              class="text-lg md:text-xl font-semibold mb-2 leading-snug"
              v-html="feature.title"
            />
            <p class="text-xs md:text-xs leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </section>
      
      <!-- CTA বাটন -->
      <div class="mt-6 flex justify-center gap-2 sm:gap-4 flex-wrap">
        <NuxtLink
          to="https://wa.me/8801904015818"
          @click="trackMessage"
          class="bg-rose-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-rose-600 flex items-center gap-2 transition text-sm sm:text-base"
        >
          <Icon name="hugeicons:whatsapp" /> {{ t("smm.hero.cta_primary") }}
        </NuxtLink>
        <NuxtLink
          to="#video"
          class="border border-rose-500 text-rose-500 px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-3 rounded-md hover:bg-rose-500 hover:dark:bg-rose-500 hover:text-white flex items-center gap-2 transition"
        >
          {{ t("smm.hero.cta_secondary") }}
          <Icon name="hugeicons:arrow-down-double" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
