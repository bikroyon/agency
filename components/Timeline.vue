<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import type { TimelineItem } from "@nuxt/ui";

// Track screen width manually
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

// Breakpoint check
const isMobile = computed(() => width.value < 768);

const items = ref<TimelineItem[]>([
  {
    title: "বিস্তারিত আলোচনা",
    description:
      "ক্লায়েন্টের প্রয়োজন অনুযায়ী বিস্তারিত আলোচনা ও প্রজেক্টের লক্ষ্য নির্ধারণ।",
    icon: "hugeicons:time-setting-03",
  },
  {
    title: "মার্কেট এনালাইসি করে ডিজাইন",
    description:
      "UI/UX ডিজাইন তৈরি করা, ল্যান্ডিং পেজ বা ওয়েবসাইটের লেআউট প্রস্তাব।",
    icon: "hugeicons:paint-board",
  },
  {
    title: "ডেভেলপমেন্ট স্টেজ",
    description: "Laravel বা WordPress-এ ওয়েবসাইট/ল্যান্ডিং পেজ ডেভেলপ করা।",
    icon: "hugeicons:laptop-programming",
  },
  {
    title: "টেস্টিং ও রিভিউ",
    description:
      "ক্লায়েন্টের সাথে ফাইনাল রিভিউ, বাগ ফিক্স এবং ফাংশনালিটি পরীক্ষা।",
    icon: "hugeicons:checkmark-circle-03",
  },
  {
    title: "ডেলিভারি ও লঞ্চ",
    description: "সর্বশেষ ফাইনাল ওয়েবসাইট হোস্টিং করা এবং লঞ্চ সম্পন্ন করা।",
    icon: "hugeicons:live-streaming-01",
  },
]);
</script>

<template>
  <section class="py-16 relative">
    <div class="text-center mb-10">
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
        আমরা যে ভাবে <span class="text-rose-500">কাজ করি</span>
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        আইডিয়া থেকে লঞ্চ পর্যন্ত—আপনার ব্যবসাকে এগিয়ে নিতে আমাদের কাজের প্রতিটি ধাপই পরিকল্পিত ও প্রমাণিত।
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
