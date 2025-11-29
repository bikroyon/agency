<template>
  <section id="services" class="py-8 sm:py-18 px-2 relative">
    <div
      class="absolute inset-0 h-full w-full opacity-40 -z-10 bg-[radial-gradient(#99a1af_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
    ></div>
    <div
      class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-12 pt-20"
    >
      <!-- Left Side: Image and Text -->
      <div class="w-full lg:w-[40%] text-center lg:text-left">
        <div class="text-left h-[200px] overflow-hidden">
          <Lottie style="height: 200px" :data="developerSkils" />
        </div>
        <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
          <span class="">আমাদের </span>
          <span class="text-rose-500">সার্ভিস সমূহ</span>
        </h2>
        <p class="mt-4 text-sm leading-relaxed">
          ৮০০+ উদ্যোক্তার আস্থা এবং হাজারো সফল গল্পের নির্মাতা। ২০২০ সাল থেকে এই
          ৫ বছরে ৮০০+ উদ্দোক্তাদের সাথে কাজ করে ৩০০০+ কাস্টমাইজড ল্যান্ডিং পেজ
          এবং ১৫০০+ ই-কমার্স ওয়েবসাইট তৈরি করেছি। দিনে ৪৫০+ ও মাসে ১২ হাজার+
          অর্ডার ১টি সাইট থেকে এমন সাফল্যের গল্প ঝুলি ভরা।
        </p>
      </div>

      <!-- Right Side: Tutorials Cards -->
      <div
        class="w-full lg:w-[60%] grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-6"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          class="border backdrop-blur-lg border-slate-200 dark:border-slate-700 rounded-lg p-3 flex flex-col items-center justify-center hover:shadow-lg transition duration-300"
        >
          <div class="text-4xl mb-2 flex items-center justify-center">
            <Icon :name="service.icon" class="w-10 h-10 text-rose-500" />
          </div>
          <h3 class="text-center text-xs font-semibold mb-2">
            {{ service.title }}
          </h3>
          <p class="text-[10px] text-center mb-2">
            {{ service.description }}
          </p>
          <NuxtLink
            :to="service.link"
            class="text-xs px-3 py-1 border border-rose-500 text-rose-500 rounded-md hover:bg-rose-500 hover:text-white transition"
          >
            বিস্তারিত দেখুন
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import developerSkils from "~/assets/lottie/developerskills.json";

const services = [
  {
    title: "হাই-কভার্টিং ল্যান্ডিং পেইজ ডিজাইন",
    description:
      "আপনার ব্যবসার কনভার্শন বাড়ান—আকর্ষণীয় ও ফাস্ট লোড হওয়া ল্যান্ডিং পেইজ দিয়ে গ্রাহকদের আকর্ষণ করুন!",
    icon: "hugeicons:laptop-phone-sync",
    link: "/landing-page",
  },
  {
    title: "ওয়ার্ডপ্রেস ই-কমার্স ওয়েবসাইট ডিজাইন",
    description:
      "আপনার অঙ্কুরে ব্যবসাকে বিকশিত করুন—ওয়ার্ডপ্রেসে শক্তিশালী ও সুন্দর ই-কমার্স স্টোর তৈরি করুন!",
    icon: "hugeicons:store-location-01",
    link: "/ecommerce-website",
  },
  {
    title: "কাস্টম ওয়েব অ্যাপ ডেভেলপমেন্ট",
    description:
      "আপনার স্বপ্নের অ্যাপ বাস্তবায়ন—লারাভেল ও ভিউজেস দিয়ে কাস্টমাইজড, দ্রুত ও নির্ভরযোগ্য অ্যাপ পান!",
    icon: "hugeicons:app-store",
    link: "/ecommerce-website",
  },
  {
    title: "ওয়েবসাইট স্পীড অপ্টিমাইজেশন",
    description:
      "গ্রাহকদের মনোযোগ ধরে রাখুন—ওয়েবসাইটের গতি বাড়িয়ে দ্রুত লোডিং এবং উন্নত পারফরম্যান্স পাওয়া যাক!",
    icon: "hugeicons:dashboard-speed-01",
    link: "/website-management",
  },
  {
    title: "পিক্সেল ও সার্ভার সাইড ট্রেকিং",
    description:
      "আপনার ব্যবসায় ডাটার শক্তি উপভোগ করুন—প্রফেশনাল ট্র্যাকিং দিয়ে বিক্রয় ও পারফরম্যান্স উন্নত করুন!",
    icon: "hugeicons:radar-01",
    link: "/website-management",
  },
  {
    title: "মাসিক ওয়েবসাইট ম্যানেজমেন্ট",
    description:
      "চিন্তা ছাড়ুন, আমরা সব দেখভাল করব—ওয়েবসাইটের নিয়মিত রক্ষণাবেক্ষণ ও আপডেটে সময় বাঁচান!",
    icon: "hugeicons:ramadhan-month",
    link: "/website-management",
  },
];
</script>
