<template>
  <section class="py-6 pt-0 sm:py-16 px-6 md:px-20">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      <!-- Left Side (Image and Text) -->
      <div class="flex justify-start flex-col">
        <div class="flex items-center h-[220px] overflow-hidden">
          <Lottie style="height: 400px" :data="Thinking" />
        </div>
        <h2 class="text-left text-3xl md:text-3xl font-bold mb-1">
          সচরাচর জানতে চাওয়া<br />
          <span class="text-rose-500">প্রশ্নের উত্তর</span>
        </h2>
        <p class="leading-relaxed text-xs sm:text-sm">
          আপনাদের কমন কিছু প্রশ্নের উত্তর আমরা এখানে লিস্ট করেছি। আমাদেরকে মেসেজ করার আগে দয়া করে এই লিস্টটি পড়ে নিন। এতে আপনার সময় বাঁচবে এবং আপনি তৎক্ষণাৎ উত্তর পাবেন।
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

const faqItems = [
  {
    label: "কাস্টম অ্যাপ ডেভেলপমেন্ট বলতে কী বোঝায়?",
    content:
      "আপনার ব্যবসার প্রয়োজন অনুযায়ী সম্পূর্ণ কাস্টম ফিচারসহ ওয়েব বা মোবাইল অ্যাপ তৈরি করাকে কাস্টম অ্যাপ ডেভেলপমেন্ট বলা হয়।",
  },
  {
    label: "Laravel দিয়ে কী ধরনের অ্যাপ তৈরি করা যায়?",
    content:
      "Laravel দিয়ে ই-কমার্স, ম্যানেজমেন্ট সিস্টেম, CRM, ERP, বুকিং সিস্টেম, SaaS অ্যাপসহ যেকোনো ধরনের ওয়েব অ্যাপ তৈরি করা যায়।",
  },
  {
    label: "Node.js কেন ব্যবহার করা হয়?",
    content:
      "Node.js ব্যবহার করা হয় রিয়েল-টাইম অ্যাপ, চ্যাট সিস্টেম, API ডেভেলপমেন্ট, স্কেলেবল ব্যাকএন্ড ও হাই-পারফরম্যান্স অ্যাপ তৈরির জন্য।",
  },
  {
    label: "Vue.js দিয়ে কী করা যায়?",
    content:
      "Vue.js দিয়ে দ্রুত লোডিং SPA, ড্যাশবোর্ড, অ্যাডমিন প্যানেল, ইন্টার‍্যাকটিভ UI এবং আধুনিক ফ্রন্টএন্ড তৈরি করা যায়।",
  },
  {
    label: "আপনাদের অ্যাপ ডেভেলপমেন্ট কতদিনে সম্পন্ন হয়?",
    content:
      "বেসিক অ্যাপ ৭–১৫ দিনে, মিড-লেভেল অ্যাপ ১৫–৩০ দিনে এবং বড় প্রজেক্ট ৩০–৬০ দিনে সম্পন্ন হয়।",
  },
  {
    label: "অ্যাপ ডেলিভারির পরে কি সাপোর্ট পাবো?",
    content:
      "হ্যাঁ, প্রজেক্ট ডেলিভারির পর নির্দিষ্ট সময় পর্যন্ত ফ্রি সাপোর্ট দেওয়া হয়। অতিরিক্ত সাপোর্ট চাইলে আলাদা মেইনটেন্যান্স প্ল্যান রয়েছে।",
  },
  {
    label: "ডেভেলপমেন্টের খরচ কত হয়?",
    content:
      "অ্যাপের ফিচার অনুযায়ী খরচ নির্ধারিত হয়। ছোট অ্যাপ ১৫–৩০ হাজার, মিড-লেভেল ৩০–৭০ হাজার, কাস্টম সিস্টেম ৭০ হাজারের বেশি হতে পারে।",
  },
  {
    label: "কীভাবে অর্ডার করবো?",
    content:
      "আপনি আমাদের ওয়েবসাইট, ফেসবুক পেজ বা WhatsApp এর মাধ্যমে সরাসরি যোগাযোগ করে অর্ডার করতে পারবেন।",
  },
];
</script>


<style lang="scss" scoped></style>
