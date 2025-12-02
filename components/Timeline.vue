<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui";

// i18n
const { t } = useI18n({ useScope: "global" });


// Track screen width
const width = ref<number>(0);

const updateWidth = () => {
  width.value = window.innerWidth;
};

onMounted(() => {
  updateWidth();
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

// Mobile breakpoint
const isMobile = computed(() => width.value < 768);

// Multilingual timeline items
const items = computed<TimelineItem[]>(() => [
  {
    title: t("process.step1.title"),
    description: t("process.step1.description"),
    icon: "hugeicons:time-setting-03",
  },
  {
    title: t("process.step2.title"),
    description: t("process.step2.description"),
    icon: "hugeicons:paint-board",
  },
  {
    title: t("process.step3.title"),
    description: t("process.step3.description"),
    icon: "hugeicons:laptop-programming",
  },
  {
    title: t("process.step4.title"),
    description: t("process.step4.description"),
    icon: "hugeicons:checkmark-circle-03",
  },
  {
    title: t("process.step5.title"),
    description: t("process.step5.description"),
    icon: "hugeicons:live-streaming-01",
  },
]);
</script>

<template>
  <section class="py-16 relative">
    <div class="text-center mb-10 max-w-2xl mx-auto px-3">
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
        {{ t("process.title") }}
        <span class="text-rose-500">{{ t("process.highlight") }}</span>
      </h2>

      <p class="mt-2 text-sm sm:text-lg">
        {{ t("process.subtitle") }}
      </p>
    </div>

    <div class="flex justify-center items-center px-3">
      <UTimeline
        :orientation="isMobile ? 'vertical' : 'horizontal'"
        :default-value="4"
        :items="items"
        size="2xl"
        color="error"
        class="w-full max-w-5xl mx-auto"
      />
    </div>
  </section>
</template>
