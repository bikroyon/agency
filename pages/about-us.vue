<template>
  <section class="p-4 sm:p-16 sm:py-4">
  <div>
    <h1>{{ $t('welcome') }}</h1>
    <p>{{ $t('hero_title') }}</p>
  </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
definePageMeta({
  title: "যোগাযোগ করুন – ওয়েবসাইট ও ল্যান্ডিং পেজ ডিজাইনের জন্য",
  description: "আপনার ব্যবসার জন্য কাস্টম ওয়েবসাইট বা কনভারশন ফোকাসড ল্যান্ডিং পেজ ডিজাইন করতে চান? এখনই যোগাযোগ করুন – দ্রুত সাপোর্ট ও কাস্টম ডিজাইন গ্যারান্টিড।",
});
</script>
