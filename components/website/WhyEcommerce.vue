<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

// Dynamic benefits items from translation
const items = computed(() => [
  {
    title: t("ecommerce_page.ecommerce_benefits.items[0].title"),
    description: t("ecommerce_page.ecommerce_benefits.items[0].description"),
    icon: t("ecommerce_page.ecommerce_benefits.items[0].icon"),
    bg: "bg-blue-100",
    color: "text-blue-800",
  },
  {
    title: t("ecommerce_page.ecommerce_benefits.items[1].title"),
    description: t("ecommerce_page.ecommerce_benefits.items[1].description"),
    icon: t("ecommerce_page.ecommerce_benefits.items[1].icon"),
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    title: t("ecommerce_page.ecommerce_benefits.items[2].title"),
    description: t("ecommerce_page.ecommerce_benefits.items[2].description"),
    icon: t("ecommerce_page.ecommerce_benefits.items[2].icon"),
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: t("ecommerce_page.ecommerce_benefits.items[3].title"),
    description: t("ecommerce_page.ecommerce_benefits.items[3].description"),
    icon: t("ecommerce_page.ecommerce_benefits.items[3].icon"),
    bg: "bg-gray-100",
    color: "text-gray-700",
  },
  {
    title: t("ecommerce_page.ecommerce_benefits.items[4].title"),
    description: t("ecommerce_page.ecommerce_benefits.items[4].description"),
    icon: t("ecommerce_page.ecommerce_benefits.items[4].icon"),
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: t("ecommerce_page.ecommerce_benefits.items[5].title"),
    description: t("ecommerce_page.ecommerce_benefits.items[5].description"),
    icon: t("ecommerce_page.ecommerce_benefits.items[5].icon"),
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    title: t("ecommerce_page.ecommerce_benefits.items[6].title"),
    description: t("ecommerce_page.ecommerce_benefits.items[6].description"),
    icon: t("ecommerce_page.ecommerce_benefits.items[6].icon"),
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: t("ecommerce_page.ecommerce_benefits.items[7].title"),
    description: t("ecommerce_page.ecommerce_benefits.items[7].description"),
    icon: t("ecommerce_page.ecommerce_benefits.items[7].icon"),
    bg: "bg-gray-100",
    color: "text-gray-700",
  },
  {
    title: t("ecommerce_page.ecommerce_benefits.items[8].title"),
    description: t("ecommerce_page.ecommerce_benefits.items[8].description"),
    icon: t("ecommerce_page.ecommerce_benefits.items[8].icon"),
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
]);
const { $fbq } = useNuxtApp();

const trackMessage = () => {
  if ($fbq) {
    $fbq("track", "Message");
  }
};
</script>

<template>
  <section class="py-6 sm:py-12 px-2 md:px-8 lg:px-16">
    <!-- Title -->
    <div class="text-center mb-4 sm:mb-10">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
        {{ t("ecommerce_page.ecommerce_benefits.heading_first") }}
        <span class="text-rose-500">
          {{ t("ecommerce_page.ecommerce_benefits.heading_highlight") }}
        </span>
        {{ t("ecommerce_page.ecommerce_benefits.heading_last") }}
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        {{ t("ecommerce_page.ecommerce_benefits.subheading") }}
      </p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="p-4 rounded-xl shadow-sm flex gap-3 items-center sm:items-start border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
      >
        <!-- Icon -->
        <div
          :class="`${item.bg} ${item.color} w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg p-2`"
        >
          <Icon :name="item.icon" class="w-8 h-8 md:w-10 md:h-10" />
        </div>

        <!-- Text -->
        <div>
          <h4 class="text-base md:text-lg font-bold">
            {{ item.title }}
          </h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Buttons -->
      <div id="video" class="mt-3 sm:mt-6 flex justify-center gap-2 sm:gap-4 flex-wrap">
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
  </section>
</template>
