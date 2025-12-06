<template>
  <section class="relative py-20">
    <!-- ব্যাকগ্রাউন্ড প্যাটার্ন -->
    <div class="absolute inset-0 h-full w-full opacity-40 -z-10 bg-[radial-gradient(#99a1af_1px,transparent_1px)] [background-size:16px_16px]"></div>

    <div class="max-w-5xl mx-auto px-4 text-center">
      <!-- শিরোনাম -->
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
        আমরা তৈরি করি <span class="text-rose-500">ল্যান্ডিং পেজ অ্যাপস</span> 
        <br class="hidden sm:block" /> মডার্ন UI এবং অ্যাডভান্সড ড্যাশবোর্ড সহ
      </h1>

      <!-- বর্ণনা -->
      <p class="mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-lg">
        Fraud Checker, User Advanced Blocking System, Custom Form Builder, Advanced Settings এবং আরও অনেক টুল নতুন উদ্যোক্তাদের জন্য। 
        আপনার স্টার্টআপ দ্রুত এবং প্রফেশনালভাবে লঞ্চ করুন।
      </p>

      <!-- CTA বাটন -->
      <div class="mt-6 flex justify-center gap-4 flex-wrap">
        <NuxtLink 
          to="https://wa.me/+8801799568976" 
          class="bg-rose-500 text-white px-6 py-3 rounded-md hover:bg-rose-600 flex items-center gap-2 transition">
          <Icon name="hugeicons:whatsapp" /> যোগাযোগ করুন
        </NuxtLink>
        <NuxtLink 
          to="#features" 
          class="border border-rose-500 text-rose-500 px-6 py-3 rounded-md hover:bg-rose-100 hover:dark:bg-slate-800 flex items-center gap-2 transition">
          বিস্তারিত দেখুন
          <Icon name="hugeicons:arrow-down-double" />
        </NuxtLink>
      </div>

      <!-- ভিডিও/ইমেজ (ঐচ্ছিক) -->
      <div class="mt-10 flex justify-center">
        <iframe 
          width="660" 
          height="415" 
          src="https://www.youtube.com/embed/6DAG3iFrdJk?si=KOOuL45HtPdRxVhJ" 
          title="ডেমো ভিডিও" 
          class="rounded-lg shadow-2xl w-full max-w-[660px] aspect-video" 
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// স্ট্যাটিক Hero Section জন্য কোনো অতিরিক্ত লজিক প্রয়োজন নেই
</script>
