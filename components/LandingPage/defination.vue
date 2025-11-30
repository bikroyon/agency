<template>
  <div class="container mx-auto py-12 relative">
    <div
      class="absolute inset-0 h-full w-full opacity-40 -z-10 bg-[radial-gradient(#99a1af_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
    ></div>
    <!-- Section Heading -->
    <div class="text-center mb-2">
      <!-- Heading -->
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
        <span class="text-rose-500">ল্যান্ডিং পেইজ</span> কী?
      </h2>
    </div>
    <!-- Landing Page Explanation -->
    <div
      class="max-w-4xl mx-auto text-center sm:text-base md:text-lg space-y-2"
    >
      <p class="mt-4 px-2 text-sm sm:text-base md:text-lg">
        ল্যান্ডিং পেইজ হল একটি বিশেষ ওয়েব পেইজ যা মূলত কোন প্রোডাক্ট, সার্ভিস বা
        অফারের উপর ফোকাস করে। এর উদ্দেশ্য ভিজিটরকে একটি নির্দিষ্ট অ্যাকশন নেওয়ার
        জন্য উৎসাহিত করা, যেমন ফর্ম পূরণ করা, সাইনআপ করা বা প্রোডাক্ট কেনা।
      </p>
    </div>
    <!-- Landing Page Explanation -->
    <div class="text-center mb-2 mt-12">
      <!-- Heading -->
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
        কেন ল্যান্ডিং পেইজ<span class="text-rose-500"> প্রয়োজন?</span>
      </h2>
    </div>
    <div
      class="max-w-4xl mx-auto text-center sm:text-base md:text-lg space-y-2"
    >
      <p class="mt-4 text-sm px-2 sm:text-base md:text-lg leading-relaxed">
        ফেসবুকের এলগোরিদম কিভাবে কাজ করে তা বোঝার পরই আপনি বুঝতে পারবেন কেন একটি
        ল্যান্ডিং পেজ অপরিহার্য। কিছু ব্যবহারকারী সরাসরি ফেসবুকের ইনবক্সে মেসেজ
        পাঠাতে পছন্দ করেন, তাই ফেসবুক তাদের আলাদা করে রেখেছে। পাশাপাশি, যারা
        বিভিন্ন ল্যান্ডিং পেজ বা ওয়েবসাইট থেকে ডাইরেক্ট অর্ডার করে, তাদের জন্য
        আলাদা অডিয়েন্স তৈরি করা হয়। তাই ল্যান্ডিং পেজ ব্যবহার করলে টার্গেট
        অডিয়েন্সকে আরও কার্যকরভাবে আনা এবং কনভার্সন বাড়ানো সম্ভব হয়।
      </p>
    </div>
    <section class="py-10 px-4">
      <div
        class="md:max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-100 dark:border-slate-800"
      >
        <h2 class="text-xl sm:text-2xl font-bold text-center mb-6">
          একটি ল্যান্ডিং পেজে থাকলে আপনি যে সুবিধাগুলো পাবেন:
        </h2>

        <!-- Benefits List -->
        <ul class="space-y-4">
          <li
            v-for="(item, index) in benefits"
            :key="index"
            class="flex items-start gap-3"
          >
            <Icon
              name="hugeicons:checkmark-circle-03"
              class="text-green-500 w-6 h-6 mt-1 flex-shrink-0"
            />
            <span class="text-sm sm:text-base leading-relaxed">
              {{ item }}
            </span>
          </li>
        </ul>
      </div>
    </section>
    <!-- CPA Result Proof Section - Peacock BD Success -->
    <section class="py-12 md:py-16 overflow-hidden">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <!-- Top Badge -->
        <div class="inline-flex items-center gap-3 mb-8">
          <span
            class="mb-4 px-6 py-2 text-sm flex items-center justify-center gap-4 font-bold border border-rose-200 dark:border-rose-900 rounded-full"
            style="background: #e31c5215; color: #e31c52"
          >
            <p>লাইভ রেজাল্ট দেখুন</p>
            <span class="relative flex size-3">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E31C52] opacity-75"
              ></span>
              <span
                class="relative inline-flex size-3 rounded-full bg-[#E31C52]"
              ></span>
            </span>
          </span>
        </div>

        <!-- Main Heading -->
        <h2 class="text-3xl md:text-4xl font-bold mb-2 leading-tight">
          ছবিতে দেখুন — <span style="color: #e31c52">১৪৪০ টাকা</span> দামের
          প্রোডাক্ট <br />
          সেল করতে খরচ হচ্ছে মাত্র
          <span style="color: #e31c52">১০৫ টাকা</span>
        </h2>

        <!-- Sub Heading -->
        <p
          class="text-xl md:text-3xl font-bold my-4 bg-gradient-to-r from-slate-900 via-rose-500 to-slate-600 inline-block text-transparent bg-clip-text"
        >
          স্মার্ট ল্যান্ডিং + স্ট্র্যাটেজি = কম কষ্টে সেল
        </p>
        <p class="text-xs sm:text-sm mb-1 italic">
          *রেগুলার টেস্ট করা হয়েছে। ইনশাআল্লাহ রেজাল্ট আরো ভালো আসবে!*
        </p>

        <!-- Peacock Ads Manager Screenshot -->
        <div class="relative max-w-4xl mx-auto mb-1">
          <div
            class="glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/50"
          >
            <img
              src="https://topperit.com/images/peacock.webp"
              alt="Peacock BD Ads Manager Result - ১০৫ টাকায় সেল"
              class="w-full h-auto"
            />
          </div>
        </div>

        <!-- Bottom Caption -->
        <p class="text-xs mb-4">
          ক্যাম্পেইন রিপোর্টের স্ক্রিনশট (ড্যাশবোর্ড থেকে নেওয়া)
        </p>

        <!-- CTA Button -->
        <a
          href="https://wa.me/8809638365975"
          target="_blank"
          class="inline-flex items-center gap-4 px-12 py-3 rounded-2xl text-white font-bold text-sm md:text-xl shadow-2xl shadow-red-600/50 transform hover:scale-105 transition-all duration-300"
          style="background: linear-gradient(135deg, #e31c52, #c4173f)"
        >
          এখনই যোগাযোগ করুন
        </a>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const benefits = [
  "সার্ভার সাইড ট্র্যাকিং সহ পিক্সেল সেটআপ করে এড রান করে প্রচুর সেল করতে পারবেন",
  "যারা ওয়েবসাইটে এসে ফুট প্রিন্ট রেখে চলে গেছে তাদের রিটার্গেটিং করে আপনার সেলকে অনেক বাড়াতে পারবেন",
  "অর্ডার সহজে ম্যানেজ করতে পারবেন",
  "অটোম্যাটিক সেল হতে থাকবে",
  "স্টুডফাস্ট, পাঠাও কুরিয়ার এক ক্লিকে অর্ডার ডিটেইল অটোমেটিক এনট্রি",
  "স্টক ম্যানেজ করার সুবিধাও থাকবে",
  "ইনভয়েস প্রিন্ট / ডাউনলোড",
  "তাছাড়া প্রয়োজনীয় সকল ফিচার ইনবিল্ট করা থাকে",
];
</script>
<style scoped></style>
