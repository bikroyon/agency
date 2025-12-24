<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n({
  inheritLocale: true,
  useScope: "global"
});

</script>
<template>
  <section class="py-12 sm:pb-20 sm:pb-pt-8 px-2">
    <div class="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-6">
      <!-- Image Card -->
      <div class="relative sm:w-[30%] lg:w-1/2 flex justify-center">
        <div class="dark:bg-slate-700 bg-slate-100 p-2 rounded-2xl shadow-lg">
          <img
            src="/teams/founder.png"
            alt="Founder"
            class="rounded-2xl w-[200px] h-[200px] sm:w-[300px] sm:h-[360px] object-cover grayscale"
          />
        </div>
      </div>

      <!-- Text Content -->
      <div class="sm:w-[70%] lg:w-1/2 sm:p-12 sm:pl-0">
        <h2 class="text-xl font-bold mb-2 sm:mb-4">
          {{ t("home.founder.title") }}
        </h2>
        <p class="text-xs leading-relaxed mb-2 sm:mb-4">
          {{ t("home.founder.p1") }}
        </p>
        <p class="text-xs leading-relaxed mb-2 sm:mb-4">
          {{ t("home.founder.p2") }}
        </p>

        <!-- Signature Block -->
        <div
          class="flex flex-col sm:flex-row sm:items-center justify-start gap-4 border-t border-gray-300 dark:border-gray-700 pt-2 sm:pt-4"
        >
          <div>
            <h4 class="text-sm font-semibold">{{ t("home.founder.name") }}</h4>
            <p class="text-xs text-gray-400">{{ t("home.founder.role") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
