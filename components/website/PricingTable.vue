<template>
  <div
    id="pricing"
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

    <!-- Pricing Cards -->
    <div class="grid gap-6 grid-cols-1 lg:grid-cols-2 lg:px-28">
      <WebsitePricingCard
        v-for="plan in plans"
        :key="plan.name"
        :plan="plan"
        :highlighted="plan.name === 'complete'"
      />
    </div>
  </div>
</template>

<script setup>
const darkMode = false;
const { t } = useI18n({ useScope: "global" });

// Pricing plans
const plans = computed(() => [
  {
    id: "regular",
    name: t("ecommerce_page.pricing.plans.0.name"),
    monthly: t("ecommerce_page.pricing.plans.0.monthly"),
    per: t("ecommerce_page.pricing.plans.0.money_per"),
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
    per: t("ecommerce_page.pricing.plans.1.money_per"),
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
      t("ecommerce_page.pricing.plans.1.features.8"),
      t("ecommerce_page.pricing.plans.1.features.9"),
      t("ecommerce_page.pricing.plans.1.features.10"),
    ],
  },
]);
</script>
