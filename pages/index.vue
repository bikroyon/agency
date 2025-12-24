<template>
  <div>
    <HomeHero />

    <div class="min-h-screen container mx-auto p-2 md:p-16 md:pt-0 pt-0">
      <HomeServices />
      <Partners />
      <HomeFounder />
    </div>
    <Portfolio />
    <div class="min-h-screen container mx-auto p-2 md:p-16 md:pt-0 pt-0">
      <Testimonials />
      <Team />
      <Banner />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Web Development Agency | WordPress, Laravel & Nuxt.js Experts",
  description:
    "We build high-performance websites and web applications using WordPress, Laravel, and Nuxt.js. Get fast, secure, and SEO-friendly web solutions for your business.",
});


const route = useRoute();

useSeoMeta({
  ogTitle: () => route.meta.title,
  twitterTitle: () => route.meta.title,
});
</script>

<style scoped></style>
