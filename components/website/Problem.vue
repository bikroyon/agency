<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });

// Problems array like FAQ style
const problemItems = computed(() => [
  { label: t("ecommerce_page.why_choose.problems[0]") },
  { label: t("ecommerce_page.why_choose.problems[1]") },
  { label: t("ecommerce_page.why_choose.problems[2]") },
  { label: t("ecommerce_page.why_choose.problems[3]") },
  { label: t("ecommerce_page.why_choose.problems[4]") },
]);

// Solutions array like FAQ style
const solutionItems = computed(() => [
  { label: t("ecommerce_page.why_choose.solutions[0]") },
  { label: t("ecommerce_page.why_choose.solutions[1]") },
  { label: t("ecommerce_page.why_choose.solutions[2]") },
  { label: t("ecommerce_page.why_choose.solutions[3]") },
  { label: t("ecommerce_page.why_choose.solutions[4]") },
]);
</script>

<template>
  <section class="py-16">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Heading -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold">
          {{ t("ecommerce_page.why_choose.heading_first") }}
          <span class="text-rose-500">{{
            t("ecommerce_page.why_choose.heading_highlight")
          }}</span>
          {{ t("ecommerce_page.why_choose.heading_last") }}
        </h2>
        <p class="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-lg">
          {{ t("ecommerce_page.why_choose.subheading") }}
        </p>
      </div>

      <!-- Problem vs Solution -->
      <div class="grid md:grid-cols-2 gap-10">
        <!-- Problems -->
        <div class="p-6 bg-gray-50 dark:bg-slate-800/60 rounded-xl shadow">
          <h3 class="text-xl font-semibold mb-4 text-red-500">
            {{ t("ecommerce_page.why_choose.problems_title") }}
          </h3>
          <ul class="space-y-4">
            <li v-for="(item, i) in problemItems" :key="i" class="flex gap-3">
              <Icon name="hugeicons:cancel-01" class="text-red-500 text-xl" />
              <p>{{ item.label }}</p>
            </li>
          </ul>
        </div>

        <!-- Solutions -->
        <div class="p-6 bg-rose-50 dark:bg-rose-800/20 rounded-xl shadow">
          <h3
            class="text-xl font-semibold mb-4 text-rose-600 dark:text-rose-400"
          >
            {{ t("ecommerce_page.why_choose.solutions_title") }}
          </h3>
          <ul class="space-y-4">
            <li v-for="(item, i) in solutionItems" :key="i" class="flex gap-3">
              <Icon
                name="hugeicons:checkmark-circle-01"
                class="text-rose-500 text-xl"
              />
              <p>{{ item.label }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
