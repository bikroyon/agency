<template>
  <div>
    <div class="mx-auto container p-2 md:p-16">
      <LandingPageHero />
    </div>
    <LandingPageDefination />
    <div class="mx-auto container p-2 md:p-16">
      <LandingPageFeatures />
      <LandingPageCaruosle />
      <LandingPagePricingTable />
      <Banner />
      <Testimonials />
      <LandingPageFaq />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "High-Converting Landing Page Design Services",
  description:
    "Get high-converting landing pages designed for speed, clarity, and results. Perfect for startups, campaigns, and lead generation.",
});
</script>

<style scoped></style>
