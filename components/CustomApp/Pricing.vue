<script setup lang="ts">
const tiers = [
  {
    id: "starter",
    title: "Starter",
    price: "৳14,999",
    description: "স্টার্টআপ ও ছোট ব্যবসার জন্য বেসিক কাস্টম ওয়েব অ্যাপ।",
    billingCycle: "এককালীন",
    button: { label: "অর্ডার করুন",link: "https://wa.me/880190405818?text=Starter%20প্যাকেজে%20অ্যাপ%20বানাতে%20চাই", variant: "subtle" as const },
  },
  {
    id: "business",
    title: "Business",
    price: "৳34,999",
    description: "বর্ধনশীল ব্যবসার জন্য প্রফেশনাল লেভেলের ওয়েব অ্যাপ।",
    billingCycle: "এককালীন",
    highlight: true,
    badge: "Most Popular",
    button: { label: "অর্ডার করুন", link: "https://wa.me/880190405818?text=Business%20প্যাকেজে%20অ্যাপ%20বানাতে%20চাই" },
  },
  {
    id: "enterprise",
    title: "Enterprise",
    price: "Custom",
    description: "এন্টারপ্রাইজ লেভেলের ফুল কাস্টমাইজড ওয়েব অ্যাপ সলিউশন।",
    button: { label: "কোট নিন",link: "https://wa.me/880190405818?text=Enterprise%20প্যাকেজে%20অ্যাপ%20বানাতে%20চাই", color: "neutral" as const },
  },
];

// ------------------------
// Feature Comparison Table
// ------------------------
const sections = [
  {
    id: "core",
    title: "Core Features",
    features: [
      {
        id: "pages",
        title: "Custom Pages",
        tiers: {
          starter: "৩ পেজ",
          business: "১০ পেজ",
          enterprise: "Unlimited",
        },
      },
      {
        id: "responsive",
        title: "Fully Responsive",
        tiers: { starter: true, business: true, enterprise: true },
      },
      {
        id: "seo",
        title: "Basic SEO",
        tiers: { starter: true, business: true, enterprise: true },
      },
      {
        id: "advanced-seo",
        title: "Advanced SEO Setup",
        tiers: { starter: false, business: true, enterprise: true },
      },
    ],
  },

  {
    id: "admin",
    title: "Admin Panel",
    features: [
      {
        id: "basic-admin",
        title: "Basic Admin Panel",
        tiers: { starter: true, business: true, enterprise: true },
      },
      {
        id: "advanced-admin",
        title: "Advanced Dashboard",
        tiers: { starter: false, business: true, enterprise: true },
      },
      {
        id: "role-permission",
        title: "User Role & Permissions",
        tiers: { starter: false, business: true, enterprise: true },
      },
    ],
  },

  {
    id: "integration",
    title: "Integration & Automation",
    features: [
      {
        id: "api",
        title: "API Integration",
        tiers: { starter: false, business: true, enterprise: true },
      },
      {
        id: "automation",
        title: "Automation (n8n / Zapier)",
        tiers: { starter: false, business: false, enterprise: true },
      },
    ],
  },

  {
    id: "support",
    title: "Support & Maintenance",
    features: [
      {
        id: "support",
        title: "Free Support",
        tiers: { starter: "১ মাস", business: "২ মাস", enterprise: "৬ মাস" },
      },
      {
        id: "maintenance",
        title: "Maintenance",
        tiers: { starter: false, business: false, enterprise: true },
      },
    ],
  },
];
</script>

<template>
  <section class="py-16 px-4">
    <div class="max-w-5xl mx-auto text-center mb-10">
      <h2 class="text-3xl sm:text-4xl font-bold">
        আমাদের <span class="text-rose-500">প্রাইসিং প্যাকেজ</span>
      </h2>
      <p class="mt-3 text-gray-700 dark:text-gray-300 text-sm sm:text-lg">
        আপনার ব্যবসার প্রয়োজন অনুযায়ী সেরা কাস্টম ওয়েব অ্যাপ সলিউশন বেছে নিন।
      </p>
    </div>

    <UPricingTable :tiers="tiers" :sections="sections">
      <!-- Highlighted Tier Title -->
      <template #business-title="{ tier }">
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-crown" class="size-5 text-amber-500" />
          <span>{{ tier.title }}</span>
        </div>
      </template>

      <!-- Custom Section Title -->
      <template #section-admin-title="{ section }">
        <div class="flex items-center gap-2 text-green-600 dark:text-green-400">
          <UIcon name="i-lucide-layout-dashboard" class="size-4" />
          <span class="font-semibold">{{ section.title }}</span>
        </div>
      </template>
      <!-- Custom Button Slot -->
      <template #tier-button="{ tier }">
        <UButton
          :label="tier.button.label"
          :to="tier.button.link"
          :variant="tier.button.variant"
          :color="tier.button.color"
          block
        />
      </template>

      <!-- Custom Feature Rendering -->
      <template #feature-pages-value="{ feature, tier }">
        <UBadge
          :label="String(feature.tiers[tier.id])"
          color="primary"
          variant="soft"
        />
      </template>

      <!-- For features containing true/false -->
      <template #feature-responsive-value="{ feature, tier }">
        <UIcon
          :name="feature.tiers[tier.id] ? 'i-lucide-check' : 'i-lucide-x'"
          :class="[
            'size-5',
            feature.tiers[tier.id] ? 'text-green-500' : 'text-red-400',
          ]"
        />
      </template>
    </UPricingTable>
  </section>
</template>
