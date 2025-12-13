<template>
  <div class="container mx-auto py-12 relative">
    <div
      class="absolute inset-0 h-full w-full opacity-40 -z-10 bg-[radial-gradient(#99a1af_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
    ></div>

    <!-- Section Heading -->
    <div class="text-center mb-2">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
        <span class="text-rose-500">{{ t('smm.smm_defination.what_is_highlight') }}</span>{{ t('smm.smm_defination.what_is') }}
      </h2>
    </div>

    <div class="max-w-4xl mx-auto text-center sm:text-base md:text-lg space-y-2">
      <p class="mt-4 px-2 text-sm sm:text-base md:text-lg">
        {{ t('smm.smm_defination.what_is_description') }}
      </p>
    </div>

    <div class="text-center mb-2 mt-12">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
        {{ t('smm.smm_defination.why_needed') }}
        <span class="text-rose-500">{{ t('smm.smm_defination.why_needed_highlight') }}</span>
      </h2>
    </div>

    <div class="max-w-4xl mx-auto text-center sm:text-base md:text-lg space-y-2">
      <p class="mt-4 text-sm px-2 sm:text-base md:text-lg leading-relaxed">
        {{ t('smm.smm_defination.why_needed_description') }}
      </p>
    </div>

    <!-- Benefits Section -->
    <section class="py-10 px-4">
      <div
        class="md:max-w-4xl mx-auto bg-white dark:bg-[#121212] rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-100 dark:border-slate-800"
      >
        <h2 class="text-xl sm:text-2xl font-bold text-center mb-6">
          {{ t('smm.smm_defination.benefits_heading') }}
        </h2>

        <ul class="space-y-4">
          <li v-for="(item, index) in benefits" :key="index" class="flex items-start gap-3">
            <Icon name="hugeicons:checkmark-circle-03" class="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
            <span class="text-sm sm:text-base leading-relaxed">{{ Object.values(item)[0] }}</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'global' });

// Manually create computed array of objects with numeric keys
const benefits = computed(() => [
  { 1: t('smm.smm_defination.benefits_list.0') },
  { 2: t('smm.smm_defination.benefits_list.1') },
  { 3: t('smm.smm_defination.benefits_list.2') },
  { 4: t('smm.smm_defination.benefits_list.3') },
  { 5: t('smm.smm_defination.benefits_list.4') },
  { 6: t('smm.smm_defination.benefits_list.5') },
  { 7: t('smm.smm_defination.benefits_list.6') },
  { 8: t('smm.smm_defination.benefits_list.7') },
]);
</script>




<style scoped></style>
