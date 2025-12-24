<template>
  <section class="py-6 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <!-- Heading -->
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
        {{ t("ecommerce_page.features_section.heading_first") }}
        <span class="text-rose-500">{{
          t("ecommerce_page.features_section.heading_highlight")
        }}</span>
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        {{ t("ecommerce_page.features_section.subheading") }}
      </p>

      <section class="py-8">
        <div
          class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 border border-gray-300 dark:border-gray-700 rounded-2xl p-2 md:p-3"
        >
          <div
            v-for="(feature, index) in features"
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
      <div id="video" class="mt-3 flex justify-center gap-2 sm:gap-4 flex-wrap">
        <NuxtLink
          to="https://wa.me/+8801904015818"
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

<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });

const features = computed(() => [
  {
    icon: t("ecommerce_page.features_section.features.0.icon"),
    title: t("ecommerce_page.features_section.features.0.title"),
    description: t("ecommerce_page.features_section.features.0.description"),
  },
  {
    icon: t("ecommerce_page.features_section.features.1.icon"),
    title: t("ecommerce_page.features_section.features.1.title"),
    description: t("ecommerce_page.features_section.features.1.description"),
  },
  {
    icon: t("ecommerce_page.features_section.features.2.icon"),
    title: t("ecommerce_page.features_section.features.2.title"),
    description: t("ecommerce_page.features_section.features.2.description"),
  },
  {
    icon: t("ecommerce_page.features_section.features.3.icon"),
    title: t("ecommerce_page.features_section.features.3.title"),
    description: t("ecommerce_page.features_section.features.3.description"),
  },
  {
    icon: t("ecommerce_page.features_section.features.4.icon"),
    title: t("ecommerce_page.features_section.features.4.title"),
    description: t("ecommerce_page.features_section.features.4.description"),
  },
  {
    icon: t("ecommerce_page.features_section.features.5.icon"),
    title: t("ecommerce_page.features_section.features.5.title"),
    description: t("ecommerce_page.features_section.features.5.description"),
  },
]);
</script>

<style lang="scss" scoped></style>
