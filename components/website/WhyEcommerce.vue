<script setup lang="ts">
const items = [
  {
    title: "ব্যবসা ২৪/৭ খোলা থাকবে",
    description:
      "অনলাইন দোকান সবসময় সক্রিয় থাকবে এবং কাস্টমার যেকোনো সময় অর্ডার করতে পারবে।",
    icon: "hugeicons:store-verified-01",
    bg: "bg-blue-100",
    color: "text-blue-800",
  },
  {
    title: "দ্রুত ডেলিভারি সুবিধা",
    description: "সারা দেশে দ্রুত ও নিরাপদ ডেলিভারি সিস্টেম যুক্ত করা যাবে।",
    icon: "hugeicons:dashboard-speed-01",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    title: "বিজ্ঞাপনে বিক্রি বাড়বে",
    description: "ফেসবুক, গুগল বিজ্ঞাপন দিয়ে আরও বেশি কাস্টমার আনা সম্ভব।",
    icon: "hugeicons:rocket-01",
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "অটোমেশন & ম্যানেজমেন্ট",
    description: "অর্ডার, স্টক, কাস্টমার—সব কিছু সহজেই পরিচালনা করতে পারবেন।",
    icon: "hugeicons:ai-chip",
    bg: "bg-gray-100",
    color: "text-gray-700",
  },
  {
    title: "মার্কেটিং—১০ গুণ সহজ",
    description:
      "পণ্যের প্রচার থেকে বিক্রি পর্যন্ত সব কিছু সহজে পরিচালনা করতে পারবেন।",
    icon: "hugeicons:activity-04",
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "অনলাইন পেমেন্ট সাপোর্ট",
    description:
      "বিকাশ, নগদ, কার্ড পেমেন্টসহ সম্পূর্ণ অটোমেটেড পেমেন্ট সিস্টেম থাকবে।",
    icon: "hugeicons:payment-02",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    title: "বিক্রির রিপোর্টিং সিস্টেম",
    description: "প্রতিদিনের বিক্রি, লাভ–সব কিছু রিপোর্ট আকারে দেখতে পারবেন।",
    icon: "hugeicons:chart-increase",
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "কাস্টমার সাপোর্ট সুবিধা",
    description: "লাইভ চ্যাট, কল, মেসেজ—সব মাধ্যমে কাস্টমার হ্যান্ডলিং সহজ।",
    icon: "hugeicons:customer-service",
    bg: "bg-gray-100",
    color: "text-gray-700",
  },
  {
    title: "ব্র্যান্ডের প্রতি বিশ্বাস বাড়বে",
    description:
      "একটি প্রফেশনাল ই–কমার্স ওয়েবসাইট ব্র্যান্ড ভ্যালু অনেক বাড়ায়।",
    icon: "hugeicons:account-setting-03",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
];
</script>

<template>
  <section class="py-12 px-4 md:px-8 lg:px-16">
    <!-- Title -->
    <div class="text-center mb-10">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
        আপনার <span class="text-rose-500"> ই–কমার্স ওয়েবসাইট</span><br />
        থাকলে যে সুবিধা পাবেন
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        আমাদের তৈরি ল্যান্ডিং পেজ শুধু সুন্দর নয়—এটি সাইকোলজিক্যালি কনভার্টিং
        করার মতো করে তৈরি।
      </p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="p-4 rounded-xl shadow-sm flex gap-3 items-center  sm:items-start border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
      >
        <!-- Icon -->
        <div
          :class="`${item.bg} ${item.color} w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg p-2`"
        >
          <!-- Icon Handling -->
          <Icon
            :name="item.icon"
            class="w-8 h-8 md:w-10 md:h-10"
          />
        </div>

        <!-- Text -->
        <div>
          <h4 class="text-base md:text-lg font-bold">
            {{ item.title }}
          </h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
