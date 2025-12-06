<template>
  <section class="py-6 pt-0 sm:py-16 px-6 md:px-20">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      <!-- Left Side (Image and Text) -->
      <div class="flex justify-start flex-col">
        <div class="flex items-center h-[220px] overflow-hidden">
          <Lottie style="height: 400px" :data="Thinking" />
        </div>
        <h2 class="text-left text-3xl md:text-3xl font-bold mb-1">
          {{ t("landing_faq.heading_line1") }}<br />
          <span class="text-rose-500">{{ t("landing_faq.heading_highlight") }}</span>
        </h2>
        <p class="leading-relaxed text-xs sm:text-sm">
          {{ t("landing_faq.subtext") }}
        </p>
      </div>

      <!-- Right Side (FAQ Accordion) -->
      <div class="">
        <UAccordion :items="faqItems" color="blue" class="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Thinking from "~/assets/lottie/Thinking.json";
const { t } = useI18n({ useScope: "global" });

const faqItems = computed(() => [
  {
    label: t("landing_faq.q1"),
    content: t("landing_faq.a1"),
  },
  {
    label: t("landing_faq.q2"),
    content: t("landing_faq.a2"),
  },
  {
    label: t("landing_faq.q3"),
    content: t("landing_faq.a3"),
  },
  {
    label: t("landing_faq.q4"),
    content: t("landing_faq.a4"),
  },
  {
    label: t("landing_faq.q5"),
    content: t("landing_faq.a5"),
  },
  {
    label: t("landing_faq.q6"),
    content: t("landing_faq.a6"),
  },
  {
    label: t("landing_faq.q7"),
    content: t("landing_faq.a7"),
  },
  {
    label: t("landing_faq.q8"),
    content: t("landing_faq.a8"),
  },
]);
</script>

<style lang="scss" scoped></style>
