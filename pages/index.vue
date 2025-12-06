<template>
  <div>
    <HomeHero />
    <div class="min-h-screen container mx-auto p-2 md:p-16 md:pt-0 pt-0">
      <HomeServices />
      <Timeline />
      <Partners />
      <HomeFounder />
      <HomeTabs />
      <Testimonials />
      <Team />
      <Banner />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "প্রফেশনাল ওয়েবসাইট ও ল্যান্ডিং পেজ ডিজাইন – বাংলাদেশের সেরা সার্ভিস",
  description:
    "৩০০+ সফল প্রজেক্টের অভিজ্ঞতায় আমরা দিচ্ছি বাংলাদেশের সেরা কাস্টম ওয়েবসাইট ও ল্যান্ডিং পেজ ডিজাইন সার্ভিস। দ্রুত সাপোর্ট, রেজাল্ট-ফোকাসড ডিজাইন ও ক্লায়েন্ট সন্তুষ্টি—এটাই আমাদের অঙ্গীকার।",
});

const route = useRoute();

useSeoMeta({
  ogTitle: () => route.meta.title,
  twitterTitle: () => route.meta.title,
});
</script>

<style scoped></style>
