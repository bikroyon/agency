<template>
  <section class="py-6 pt-0 sm:py-16 px-6 md:px-20">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      <!-- Left Side (Image and Text) -->
      <div class="flex justify-start flex-col">
        <div class="flex items-center h-[220px] overflow-hidden">
          <Lottie style="height: 400px" :data="Thinking" />
        </div>
        <h2 class="text-left text-2xl md:text-3xl font-bold mb-1">
          {{ t("smm.faq_section.heading_first") }}<br />
          <span class="text-rose-500">{{
            t("smm.faq_section.heading_highlight")
          }}</span>
        </h2>
        <p class="leading-relaxed text-xs sm:text-sm">
          {{ t("smm.faq_section.description") }}
        </p>
      </div>
      <!-- Right Side (FAQ Accordion) -->
      <div class="">
        <UAccordion :items="faqItems" color="blue" class="" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Thinking from "~/assets/lottie/Thinking.json";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

const faqItems = [
  {
    label: t("smm.faq_section.items.0.label"),
    content: t("smm.faq_section.items.0.content"),
  },
  {
    label: t("smm.faq_section.items.1.label"),
    content: t("smm.faq_section.items.1.content"),
  },
  {
    label: t("smm.faq_section.items.2.label"),
    content: t("smm.faq_section.items.2.content"),
  },
  {
    label: t("smm.faq_section.items.3.label"),
    content: t("smm.faq_section.items.3.content"),
  },
  {
    label: t("smm.faq_section.items.4.label"),
    content: t("smm.faq_section.items.4.content"),
  },
  {
    label: t("smm.faq_section.items.5.label"),
    content: t("smm.faq_section.items.5.content"),
  },
  {
    label: t("smm.faq_section.items.6.label"),
    content: t("smm.faq_section.items.6.content"),
  },
  {
    label: t("smm.faq_section.items.7.label"),
    content: t("smm.faq_section.items.7.content"),
  },
];
</script>

<style lang="scss" scoped></style>
