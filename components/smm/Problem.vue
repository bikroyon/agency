<template>
  <section class="py-16">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Heading -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold">
          {{ t("smm.prob_solve_smm.heading_first") }}
          <span class="text-rose-500">
            {{ t("smm.prob_solve_smm.heading_highlight") }}
          </span>
          {{ t("smm.prob_solve_smm.heading_last") }}
        </h2>
        <p class="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-lg">
          {{ t("smm.prob_solve_smm.subheading") }}
        </p>
      </div>

      <!-- Problem vs Solution -->
      <div class="grid md:grid-cols-2 gap-10">
        <!-- Problems -->
        <div class="p-6 bg-gray-50 dark:bg-slate-800/60 rounded-xl shadow">
          <h3 class="text-xl font-semibold mb-4 text-red-500">
            {{ t("smm.prob_solve_smm.problems.title") }}
          </h3>
          <ul class="space-y-4">
            <li
              v-for="(item, index) in problems"
              :key="index"
              class="flex gap-3"
            >
              <Icon :name="item.icon" class="text-red-500 text-xl" />
              <p>{{ item.text }}</p>
            </li>
          </ul>
        </div>

        <!-- Solutions -->
        <div class="p-6 bg-rose-50 dark:bg-rose-800/20 rounded-xl shadow">
          <h3
            class="text-xl font-semibold mb-4 text-rose-600 dark:text-rose-400"
          >
            {{ t("smm.prob_solve_smm.solutions.title") }}
          </h3>
          <ul class="space-y-4">
            <li
              v-for="(item, index) in solutions"
              :key="index"
              class="flex gap-3"
            >
              <Icon :name="item.icon" class="text-rose-500 text-xl" />
              <p>{{ item.text }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from "vue";

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
