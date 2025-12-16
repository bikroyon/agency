<template>
  <section class="py-16">
    <div class="max-w-6xl mx-auto">
      <!-- Heading -->
      <div class="text-center mb-10">
        <h2 class="text-3xl sm:text-4xl font-bold">
          {{ t("smm.prob_solve_smm.heading_first") }}
          <span class="text-rose-500">
            {{ t("smm.prob_solve_smm.heading_highlight") }}
          </span>
          {{ t("smm.prob_solve_smm.heading_last") }}
        </h2>
        <p
          class="sm:mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto"
        >
          {{ t("smm.prob_solve_smm.subheading") }}
        </p>
      </div>

      <!-- Problem vs Solution -->
      <div class="grid md:grid-cols-2 gap-5 sm:gap-10 mb-10">
        <!-- Problems -->
        <div
          class="p-3 sm:p-6 bg-gray-50 dark:bg-slate-800/60 rounded-xl shadow"
        >
          <h3 class="text-xl font-semibold mb-4 text-red-500">
            {{ t("smm.prob_solve_smm.problems.title") }}
          </h3>
          <ul class="space-y-4">
            <li
              v-for="(item, index) in problems"
              :key="index"
              class="flex gap-3"
            >
              <Icon :name="item.icon" class="text-red-500 w-5 h-5" />
              <p class="text-sm">{{ item.text }}</p>
            </li>
          </ul>
        </div>

        <!-- Solutions -->
        <div class="p-6 bg-green-50 dark:bg-green-800/20 rounded-xl shadow">
          <h3
            class="text-xl font-semibold mb-4 text-green-600 dark:text-green-400"
          >
            {{ t("smm.prob_solve_smm.solutions.title") }}
          </h3>
          <ul class="space-y-4">
            <li
              v-for="(item, index) in solutions"
              :key="index"
              class="flex gap-3"
            >
              <Icon :name="item.icon" class="text-green-500 w-5 h-5" />
              <p class="text-sm">{{ item.text }}</p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Buttons -->
      <div class="mt-1 sm:mt-0 flex justify-center gap-2 sm:gap-4 flex-wrap">
        <NuxtLink
          to="https://wa.me/+8801904015818"
          class="bg-rose-500 text-sm sm:text-base flex items-center justify-center gap-2 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-rose-700 transition"
        >
          <Icon name="hugeicons:whatsapp" />
          <span>{{ t("smm.why.cta") }}</span>
        </NuxtLink>
        <NuxtLink
          to="#pricing"
          class="border text-sm sm:text-base flex items-center justify-center gap-2 border-rose-500 text-rose-500 px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-rose-600 hover:text-rose-50 transition"
        >
          <span>{{ t("smm.why.cta_pricing") }}</span>
          <Icon name="hugeicons:arrow-down-double" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });

// Problems array as real array
const problems = computed(() => [
  {
    icon: "hugeicons:cancel-01",
    text: t("smm.prob_solve_smm.problems.items.0"),
  },
  {
    icon: "hugeicons:cancel-01",
    text: t("smm.prob_solve_smm.problems.items.1"),
  },
  {
    icon: "hugeicons:cancel-01",
    text: t("smm.prob_solve_smm.problems.items.2"),
  },
  {
    icon: "hugeicons:cancel-01",
    text: t("smm.prob_solve_smm.problems.items.3"),
  },
  {
    icon: "hugeicons:cancel-01",
    text: t("smm.prob_solve_smm.problems.items.4"),
  },
]);

// Solutions array as real array
const solutions = computed(() => [
  {
    icon: "hugeicons:checkmark-circle-01",
    text: t("smm.prob_solve_smm.solutions.items.0"),
  },
  {
    icon: "hugeicons:checkmark-circle-01",
    text: t("smm.prob_solve_smm.solutions.items.1"),
  },
  {
    icon: "hugeicons:checkmark-circle-01",
    text: t("smm.prob_solve_smm.solutions.items.2"),
  },
  {
    icon: "hugeicons:checkmark-circle-01",
    text: t("smm.prob_solve_smm.solutions.items.3"),
  },
  {
    icon: "hugeicons:checkmark-circle-01",
    text: t("smm.prob_solve_smm.solutions.items.4"),
  },
]);
</script>
