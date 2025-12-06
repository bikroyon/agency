<template>
  <div
    id="#pricing"
    class="py-20 sm:px-4 max-w-7xl mx-auto"
    :class="{ dark: darkMode }"
  >
    <div class="text-center mb-10">
      <!-- Heading -->
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
        {{ t("ecommerce_page.pricing.heading_first") }}
        <span class="text-rose-500">{{
          t("ecommerce_page.pricing.heading_highlight")
        }}</span>
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        {{ t("ecommerce_page.pricing.subheading") }}
      </p>
    </div>
    <!-- Toggle -->
    <div class="flex justify-center max-w-[24rem] mx-auto mb-8">
      <div
        class="relative flex w-full p-1 bg-slate-100 dark:bg-slate-800 rounded-lg"
      >
        <span
          class="absolute inset-0 m-1 pointer-events-none"
          aria-hidden="true"
        >
          <span
            class="absolute inset-0 w-1/2 bg-rose-500 rounded-lg shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out"
            :class="isAnnual ? 'translate-x-0' : 'translate-x-full'"
          ></span>
        </span>
        <button
          class="relative flex-1 text-sm sm:text-base font-semibold sm:font-bold h-8 sm:h-12 rounded-full transition-colors"
          :class="
            isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'
          "
          @click="isAnnual = true"
        >
          {{ t("ecommerce_page.pricing.toggle_left") }}
        </button>
        <button
          class="relative flex-1 text-sm sm:text-base font-semibold sm:font-bold h-8 sm:h-12 rounded-full transition-colors"
          :class="
            !isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'
          "
          @click="isAnnual = false"
        >
          {{ t("ecommerce_page.pricing.toggle_right") }}
        </button>
      </div>
    </div>

    <!-- Pricing Cards -->
    <div class="grid gap-6 lg:grid-cols-2 lg:px-28">
      <LandingPagePricingCard
        v-for="plan in plans"
        :key="plan.name"
        :plan="plan"
        :is-annual="isAnnual"
        :highlighted="plan.name === 'কমপ্লিট প্যাকেজ'"
      />
    </div>
  </div>
</template>

<script setup>
const isAnnual = ref(true);
const darkMode = false;
const { t } = useI18n({ useScope: "global" });

// Pricing plans
const plans = computed(() => [
  {
    id: "regular",
    name: t("ecommerce_page.pricing.plans.0.name"),
    monthly: t("ecommerce_page.pricing.plans.0.monthly"),
    yearly: t("ecommerce_page.pricing.plans.0.yearly"),
    description: t("ecommerce_page.pricing.plans.0.description"),
    features_title: t("ecommerce_page.pricing.plans.0.features_title"),
    features: [
      t("ecommerce_page.pricing.plans.0.features.0"),
      t("ecommerce_page.pricing.plans.0.features.1"),
      t("ecommerce_page.pricing.plans.0.features.2"),
      t("ecommerce_page.pricing.plans.0.features.3"),
      t("ecommerce_page.pricing.plans.0.features.4"),
      t("ecommerce_page.pricing.plans.0.features.5"),
      t("ecommerce_page.pricing.plans.0.features.6"),
      t("ecommerce_page.pricing.plans.0.features.7"),
    ],
  },
  {
    id: "completed",
    name: t("ecommerce_page.pricing.plans.1.name"),
    monthly: t("ecommerce_page.pricing.plans.1.monthly"),
    yearly: t("ecommerce_page.pricing.plans.1.yearly"),
    description: t("ecommerce_page.pricing.plans.1.description"),
    features_title: t("ecommerce_page.pricing.plans.1.features_title"),
    features: [
      t("ecommerce_page.pricing.plans.1.features.0"),
      t("ecommerce_page.pricing.plans.1.features.1"),
      t("ecommerce_page.pricing.plans.1.features.2"),
      t("ecommerce_page.pricing.plans.1.features.3"),
      t("ecommerce_page.pricing.plans.1.features.4"),
      t("ecommerce_page.pricing.plans.1.features.5"),
      t("ecommerce_page.pricing.plans.1.features.6"),
      t("ecommerce_page.pricing.plans.1.features.7"),
    ],
  },
]);
</script>
