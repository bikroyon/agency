<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <section class="py-20 sm:pb-20 sm:pb-pt-8 px-2">
    <div class="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-6">
      <!-- Image Card -->
      <div class="relative sm:w-[30%] lg:w-1/2 flex justify-center">
        <div class="dark:bg-slate-700 bg-slate-100 p-2 rounded-2xl shadow-lg">
          <img
            src="https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1150347%2F8b3d1def-3d1f-47ee-b939-f6625010148a.jpg"
            alt="Founder"
            class="rounded-2xl w-[200px] h-[200px] sm:w-[300px] sm:h-[360px] object-cover"
          />
        </div>
      </div>

      <!-- Text Content -->
      <div class="sm:w-[70%] lg:w-1/2 sm:p-12 sm:pl-0">
        <h2 class="text-xl font-bold mb-2 sm:mb-4">
          {{ t("founder.title") }}
        </h2>
        <p class="text-xs leading-relaxed mb-2 sm:mb-4">
          {{ t("founder.p1") }}
        </p>
        <p class="text-xs leading-relaxed mb-2 sm:mb-4">
          {{ t("founder.p2") }}
        </p>

        <!-- Signature Block -->
        <div
          class="flex flex-col sm:flex-row sm:items-center justify-start gap-4 border-t border-gray-300 dark:border-gray-700 pt-2 sm:pt-4"
        >
          <div>
            <h4 class="text-sm font-semibold">{{ t("founder.name") }}</h4>
            <p class="text-xs text-gray-400">{{ t("founder.role") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
