<template>
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <!-- Heading -->
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
        {{ t("landing_features_section.heading_first") }}
        <span class="text-rose-500">{{
          t("landing_features_section.heading_highlight")
        }}</span>
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        {{ t("landing_features_section.subheading") }}
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
      <!-- Buttons -->
      <div class="mt-6 flex justify-center gap-4 flex-wrap">
        <NuxtLink
          to="https://wa.me/+8801799568976"
          class="bg-rose-500 text-xs sm:text-base flex items-center justify-center gap-2 text-white px-4 py-1.5 rounded-md hover:bg-rose-700 transition"
        >
          <Icon name="hugeicons:whatsapp" />
          <span>{{ t("landing_features_section.btn_contact") }}</span>
        </NuxtLink>
        <NuxtLink
          to="#pricing"
          class="border text-xs sm:text-base flex items-center justify-center gap-2 border-rose-500 text-rose-500 px-4 py-1.5 rounded-md hover:bg-rose-600 hover:text-rose-50 transition"
        >
          <span>{{ t("landing_features_section.btn_details") }}</span>
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
    icon: t("landing_features_section.features.0.icon"),
    title: t("landing_features_section.features.0.title"),
    description: t("landing_features_section.features.0.description"),
  },
  {
    icon: t("landing_features_section.features.1.icon"),
    title: t("landing_features_section.features.1.title"),
    description: t("landing_features_section.features.1.description"),
  },
  {
    icon: t("landing_features_section.features.2.icon"),
    title: t("landing_features_section.features.2.title"),
    description: t("landing_features_section.features.2.description"),
  },
  {
    icon: t("landing_features_section.features.3.icon"),
    title: t("landing_features_section.features.3.title"),
    description: t("landing_features_section.features.3.description"),
  },
  {
    icon: t("landing_features_section.features.4.icon"),
    title: t("landing_features_section.features.4.title"),
    description: t("landing_features_section.features.4.description"),
  },
  {
    icon: t("landing_features_section.features.5.icon"),
    title: t("landing_features_section.features.5.title"),
    description: t("landing_features_section.features.5.description"),
  },
]);
</script>

<style lang="scss" scoped></style>
