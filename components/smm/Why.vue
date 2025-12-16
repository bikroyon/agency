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
  <section class="py-4 sm:py-6">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <!-- Heading -->
      <h2 class="text-3xl sm:text-4xl font-bold leading-snug">
        {{ t('smm.why.heading_first') }}
        <span class="text-rose-500">
          {{ t('smm.why.heading_highlight') }}
        </span>
        {{ t('smm.why.heading_last') }}
      </h2>

      <!-- Subtitle -->
      <p class="sm:mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-lg max-w-3xl mx-auto">
        {{ t('smm.why.subheading') }}
      </p>

      <section class="py-8">
        <div
          class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 border border-gray-300 dark:border-gray-700 rounded-2xl p-2 md:p-3"
        >
          <div
            v-for="(feature, index) in smmBenefits"
            :key="index"
            class="p-3 md:p-4 flex flex-col items-center text-center border-gray-300 dark:border-gray-700"
            :class="[
              // add top border if not in first row
              index >= 3 ? 'md:border-t' : '',
              // add left border if not first in the row
              index % 3 !== 0 ? 'md:border-l' : '',
            ]"
          >
            <div class="text-rose-500">
              <Icon :name="feature.icon" class="w-8 h-8 md:w-12 md:h-12" />
            </div>
            <h3
              class="text-base md:text-xl font-semibold sm:mb-2"
              v-html="feature.title"
            />
            <p class="text-xs md:text-xs leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </section>
      <!-- Buttons -->
      <div class="mt-1 sm:mt-0 flex justify-center gap-2 sm:gap-4 flex-wrap">
        <NuxtLink
          to="https://wa.me/+8801904015818"
          class="bg-rose-500 text-sm sm:text-base flex items-center justify-center gap-2 text-white  px-4 py-2 sm:px-6 sm:py-3  rounded-md hover:bg-rose-700 transition"
        >
          <Icon name="hugeicons:whatsapp" />
          <span>{{ t("smm.why.cta") }}</span>
        </NuxtLink>
        <NuxtLink
          to="#pricing"
          class="border text-sm sm:text-base flex items-center justify-center gap-2 border-rose-500 text-rose-500  px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-rose-600 hover:text-rose-50 transition"
        >
          <span>{{ t("smm.why.cta_pricing") }}</span>
          <Icon name="hugeicons:arrow-down-double" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>