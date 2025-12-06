<template>
  <section class="py-16 bg-gray-50 dark:bg-slate-900">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <!-- Heading -->
      <h2 class="text-3xl sm:text-4xl font-bold mb-4">
        আমাদের <span class="text-rose-500">Solo Plan</span>
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-10">
        ছোট ব্যবসা বা ব্যক্তিগত প্রজেক্টের জন্য উপযুক্ত, সম্পূর্ণ কাস্টমাইজড এবং একবার পেমেন্টেই আপনার।
      </p>

      <!-- Pricing Plan -->
      <UPricingPlan
        title="Solo"
        description="স্টার্টআপ ও ব্যক্তিগত প্রজেক্টের জন্য।"
        price="$249"
        :features="[
          'একজন ডেভেলপার',
          'সীমাহীন প্রজেক্ট',
          'GitHub repository অ্যাক্সেস',
          'লাইফটাইম অ্যাক্সেস',
          'কাস্টম ফর্ম এবং ড্যাশবোর্ড'
        ]"
        :button="{ label: 'এখনই কিনুন', variant: 'subtle' }"
        orientation="horizontal"
        tagline="একবার পেমেন্ট, চিরকাল মালিকানা"
        terms="ইনভয়েস এবং রসিদ প্রদানযোগ্য।"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
