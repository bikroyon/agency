<template>
  <section class="py-16">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Heading -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold">
          {{ t("custom_app.industries_section.heading_before") }}
          <span class="text-rose-500">
            {{ t("custom_app.industries_section.heading_highlight") }}
          </span>
          {{ t("custom_app.industries_section.heading_after") }}
        </h2>

        <p class="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-lg">
          {{ t("custom_app.industries_section.subheading") }}
        </p>
      </div>

      <!-- Grid Cards -->
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        <div
          v-for="(item, index) in industries"
          :key="index"
          class="p-6 bg-gray-50 dark:bg-slate-800/30 rounded-xl shadow hover:shadow-lg transition flex flex-row gap-2"
        >
          <div class="text-rose-500 text-3xl mb-3">
            <Icon :name="item.icon" />
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-1">
              {{ item.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-300 text-sm">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- CTA বাটন -->
      <div id="video" class="mt-6 flex justify-center gap-2 sm:gap-4 flex-wrap">
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
<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });

const industries = computed(() => [
  {
    icon: "hugeicons:store-01",
    title: t("custom_app.industries_section.items.0.title"),
    description: t("custom_app.industries_section.items.0.description"),
  },
  {
    icon: "hugeicons:health",
    title: t("custom_app.industries_section.items.1.title"),
    description: t("custom_app.industries_section.items.1.description"),
  },
  {
    icon: "hugeicons:school",
    title: t("custom_app.industries_section.items.2.title"),
    description: t("custom_app.industries_section.items.2.description"),
  },
  {
    icon: "hugeicons:truck-delivery",
    title: t("custom_app.industries_section.items.3.title"),
    description: t("custom_app.industries_section.items.3.description"),
  },
  {
    icon: "hugeicons:restaurant",
    title: t("custom_app.industries_section.items.4.title"),
    description: t("custom_app.industries_section.items.4.description"),
  },
  {
    icon: "hugeicons:chart-03",
    title: t("custom_app.industries_section.items.5.title"),
    description: t("custom_app.industries_section.items.5.description"),
  },
]);
</script>
