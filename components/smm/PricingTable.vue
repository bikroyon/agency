<template>
  <div
    id="pricing"
    class="py-20 sm:px-4 max-w-7xl mx-auto"
    :class="{ dark: darkMode }"
  >
    <div class="text-center mb-10">
      <!-- Heading -->
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
        {{ t("smm.pricing.heading_first") }}
        <span class="text-rose-500">{{
          t("smm.pricing.heading_highlight")
        }}</span>
      </h2>
      <p class="mt-2 text-sm sm:text-lg max-w-2xl mx-auto">
        {{ t("smm.pricing.subheading") }}
      </p>
    </div>
    <!-- Pricing Cards -->
    <div class="grid gap-6  lg:grid-cols-2 lg:px-28">
      <SmmPricingCard
        v-for="plan in plans"
        :key="plan.name"
        :plan="plan" 
        :highlighted="plan.name === 'complete'"
      />
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n({ useScope: "global" });
const darkMode = false;
// Pricing plans
const plans = computed(() => [
  {
    id: "regular",
    name: t("smm.pricing.plans.0.name"),
    per: t("smm.pricing.plans.0.money_per"),
    monthly: t("smm.pricing.plans.0.monthly"),
    description: t("smm.pricing.plans.0.description"),
    features_title: t("smm.pricing.plans.0.features_title"),
    features: [
      t("smm.pricing.plans.0.features.0"),
      t("smm.pricing.plans.0.features.1"),
      t("smm.pricing.plans.0.features.2"),
      t("smm.pricing.plans.0.features.3"),
      t("smm.pricing.plans.0.features.4"),
      t("smm.pricing.plans.0.features.5"),
      t("smm.pricing.plans.0.features.6"),
      t("smm.pricing.plans.0.features.7"),
    ],
  },
  {
    id: "completed",
    name: t("smm.pricing.plans.1.name"),
    per: t("smm.pricing.plans.1.money_per"),
    monthly: t("smm.pricing.plans.1.monthly"),
    description: t("smm.pricing.plans.1.description"),
    features_title: t("smm.pricing.plans.1.features_title"),
    features: [
      t("smm.pricing.plans.1.features.0"),
      t("smm.pricing.plans.1.features.1"),
      t("smm.pricing.plans.1.features.2"),
      t("smm.pricing.plans.1.features.3"),
      t("smm.pricing.plans.1.features.4"),
      t("smm.pricing.plans.1.features.5"),
      t("smm.pricing.plans.1.features.6"),
      t("smm.pricing.plans.1.features.7"),
    ],
  },
]);
</script>
