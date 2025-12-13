<script setup lang="ts">
import { computed } from 'vue'

const { t } = useI18n({ useScope: 'global' })

const benefits = computed(() => [
  {
    icon: 'mdi:cog-outline',
    title: t('custom_app.why.benefits.0.title'),
    description: t('custom_app.why.benefits.0.desc'),
  },
  {
    icon: 'mdi:chart-line',
    title: t('custom_app.why.benefits.1.title'),
    description: t('custom_app.why.benefits.1.desc'),
  },
  {
    icon: 'mdi:shield-check',
    title: t('custom_app.why.benefits.2.title'),
    description: t('custom_app.why.benefits.2.desc'),
  },
  {
    icon: 'mdi:autorenew',
    title: t('custom_app.why.benefits.3.title'),
    description: t('custom_app.why.benefits.3.desc'),
  },
  {
    icon: 'mdi:storefront-outline',
    title: t('custom_app.why.benefits.4.title'),
    description: t('custom_app.why.benefits.4.desc'),
  },
  {
    icon: 'mdi:tools',
    title: t('custom_app.why.benefits.5.title'),
    description: t('custom_app.why.benefits.5.desc'),
  },
])
</script>
<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto text-center">

      <!-- Heading -->
      <h2 class="text-3xl sm:text-4xl font-bold leading-snug">
        {{ t('custom_app.why.title_before') }}
        <span class="text-rose-500">
          {{ t('custom_app.why.title_highlight') }}
        </span>
        {{ t('custom_app.why.title_after') }}
      </h2>

      <!-- Subtitle -->
      <p class="mt-4 text-sm sm:text-lg max-w-3xl mx-auto">
        {{ t('custom_app.why.subtitle') }}
      </p>

      <!-- Benefits -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="p-6 rounded-lg shadow hover:shadow-md transition"
        >
          <Icon
            :name="benefit.icon"
            class="text-rose-500 w-10 h-10 mb-3"
          />
          <h3 class="font-semibold text-lg">
            {{ benefit.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
            {{ benefit.description }}
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-10">
        <NuxtLink
          to="https://wa.me/+8801799568976"
          class="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-md font-medium transition"
        >
          {{ t('custom_app.why.cta') }}
          <Icon name="mdi-arrow-right" class="w-5 h-5" />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>
