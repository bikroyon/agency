<script setup lang="ts">
const { t } = useI18n({ useScope: 'global' })

// Custom array for SMM benefits
const smmBenefits = computed(() => [
  {
    icon: 'mdi:palette-outline',
    title: t('smm.why.benefits.0.title'),
    description: t('smm.why.benefits.0.desc'),
  },
  {
    icon: 'mdi:account-cog-outline',
    title: t('smm.why.benefits.1.title'),
    description: t('smm.why.benefits.1.desc'),
  },
  {
    icon: 'mdi:bullhorn-outline',
    title: t('smm.why.benefits.2.title'),
    description: t('smm.why.benefits.2.desc'),
  },
  {
    icon: 'mdi:handshake-outline',
    title: t('smm.why.benefits.3.title'),
    description: t('smm.why.benefits.3.desc'),
  },
  {
    icon: 'mdi:chart-box-outline',
    title: t('smm.why.benefits.4.title'),
    description: t('smm.why.benefits.4.desc'),
  },
  {
    icon: 'mdi:tools',
    title: t('smm.why.benefits.5.title'),
    description: t('smm.why.benefits.5.desc'),
  },
])
</script>
<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto text-center">

      <!-- Heading -->
      <h2 class="text-3xl sm:text-4xl font-bold leading-snug">
        {{ t('smm.why.heading_first') }}
        <span class="text-rose-500">
          {{ t('smm.why.heading_highlight') }}
        </span>
        {{ t('smm.why.heading_last') }}
      </h2>

      <!-- Subtitle -->
      <p class="mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-lg max-w-3xl mx-auto">
        {{ t('smm.why.subheading') }}
      </p>

      <!-- Benefits Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div
          v-for="(benefit, index) in smmBenefits"
          :key="index"
          class=" p-6 rounded-lg shadow hover:shadow-md transition"
        >
          <Icon :name="benefit.icon" class="text-rose-500 w-10 h-10 mb-3" />
          <h3 class="font-semibold text-lg">{{ benefit.title }}</h3>
          <p class="text-sm mt-2">{{ benefit.description }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-10">
        <NuxtLink 
          to="https://wa.me/+8801799568976"
          class="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-md font-medium transition"
        >
          {{ t('smm.why.cta') }}
          <Icon name="mdi-arrow-right" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
