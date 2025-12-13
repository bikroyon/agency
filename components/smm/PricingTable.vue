<template>
  <div
    id="#pricing"
    class="py-20 sm:px-4 max-w-7xl mx-auto"
    :class="{ dark: darkMode }"
  >
    <div class="text-center mb-10">
      <!-- Heading -->
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
        {{ t("landing_pricing.heading_first") }}
        <span class="text-rose-500">{{
          t("landing_pricing.heading_highlight")
        }}</span>
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        {{ t("landing_pricing.subheading") }}
      </p>
    </div>
    <!-- Pricing Cards -->
    <div class="grid gap-6 lg:grid-cols-3 lg:px-10">
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
const { t } = useI18n({ useScope: "global" });

// Pricing plans
const plans = computed(() => [
  {
    id: "regular",
    name: t("landing_pricing.plans.0.name"),
    monthly: t("landing_pricing.plans.0.monthly"),
    yearly: t("landing_pricing.plans.0.yearly"),
    description: t("landing_pricing.plans.0.description"),
    features_title: t("landing_pricing.plans.0.features_title"),
    features: [
      t("landing_pricing.plans.0.features.0"),
      t("landing_pricing.plans.0.features.1"),
      t("landing_pricing.plans.0.features.2"),
      t("landing_pricing.plans.0.features.3"),
      t("landing_pricing.plans.0.features.4"),
      t("landing_pricing.plans.0.features.5"),
      t("landing_pricing.plans.0.features.6"),
      t("landing_pricing.plans.0.features.7"),
    ],
  },
    {
    id: "regular",
    name: t("landing_pricing.plans.0.name"),
    monthly: t("landing_pricing.plans.0.monthly"),
    yearly: t("landing_pricing.plans.0.yearly"),
    description: t("landing_pricing.plans.0.description"),
    features_title: t("landing_pricing.plans.0.features_title"),
    features: [
      t("landing_pricing.plans.0.features.0"),
      t("landing_pricing.plans.0.features.1"),
      t("landing_pricing.plans.0.features.2"),
      t("landing_pricing.plans.0.features.3"),
      t("landing_pricing.plans.0.features.4"),
      t("landing_pricing.plans.0.features.5"),
      t("landing_pricing.plans.0.features.6"),
      t("landing_pricing.plans.0.features.7"),
    ],
  },
  {
    id: "completed",
    name: t("landing_pricing.plans.1.name"),
    monthly: t("landing_pricing.plans.1.monthly"),
    yearly: t("landing_pricing.plans.1.yearly"),
    description: t("landing_pricing.plans.1.description"),
    features_title: t("landing_pricing.plans.1.features_title"),
    features: [
      t("landing_pricing.plans.1.features.0"),
      t("landing_pricing.plans.1.features.1"),
      t("landing_pricing.plans.1.features.2"),
      t("landing_pricing.plans.1.features.3"),
      t("landing_pricing.plans.1.features.4"),
      t("landing_pricing.plans.1.features.5"),
      t("landing_pricing.plans.1.features.6"),
      t("landing_pricing.plans.1.features.7"),
    ],
  },
]);
</script>
