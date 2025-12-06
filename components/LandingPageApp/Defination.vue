<template>
  <div class="container mx-auto py-12 relative">
    <div
      class="absolute inset-0 h-full w-full opacity-40 -z-10 bg-[radial-gradient(#99a1af_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
    ></div>
    <!-- Section Heading -->
    <div class="text-center mb-2">
      <!-- Heading -->
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
        <span class="text-rose-500">{{ t('landing_defination.what_is_highlight') }}</span>{{ t('landing_defination.what_is') }}
      </h2>
    </div>
    <!-- Landing Page Explanation -->
    <div
      class="max-w-4xl mx-auto text-center sm:text-base md:text-lg space-y-2"
    >
      <p class="mt-4 px-2 text-sm sm:text-base md:text-lg">
        {{ t('landing_defination.what_is_description') }}
      </p>
    </div>
    <!-- Landing Page Explanation -->
    <div class="text-center mb-2 mt-12">
      <!-- Heading -->
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
         {{ t('landing_defination.why_needed') }}<span class="text-rose-500">  {{ t('landing_defination.why_needed_highlight') }}</span>
      </h2>
    </div>
    <div
      class="max-w-4xl mx-auto text-center sm:text-base md:text-lg space-y-2"
    >
      <p class="mt-4 text-sm px-2 sm:text-base md:text-lg leading-relaxed">
         {{ t('landing_defination.why_needed_description') }}
      </p>
    </div>
    <section class="py-10 px-4">
      <div
        class="md:max-w-4xl mx-auto bg-white dark:bg-[#121212] rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-100 dark:border-slate-800"
      >
        <h2 class="text-xl sm:text-2xl font-bold text-center mb-6">
         {{ t('landing_defination.benefits_heading') }}
        </h2>

        <!-- Benefits List -->
        <ul class="space-y-4">
          <li
            v-for="(item, index) in benefits"
            :key="index"
            class="flex items-start gap-3"
          >
            <Icon
              name="hugeicons:checkmark-circle-03"
              class="text-green-500 w-6 h-6 mt-1 flex-shrink-0"
            />
            <span class="text-sm sm:text-base leading-relaxed">
             {{ Object.values(item)[0] }}
            </span>
          </li>
        </ul>
      </div>
    </section>
    <!-- CPA Result Proof Section - Peacock BD Success -->
    <section class="py-12 md:py-16 overflow-hidden">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <!-- Top Badge -->
        <div class="inline-flex items-center gap-3 mb-8">
          <span
            class="mb-4 px-6 py-2 text-sm flex items-center justify-center gap-4 font-bold border border-rose-200 dark:border-rose-900 rounded-full"
            style="background: #e31c5215; color: #e31c52"
          >
            <p>  {{ t('landing_defination.result') }}</p>
            <span class="relative flex size-3">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E31C52] opacity-75"
              ></span>
              <span
                class="relative inline-flex size-3 rounded-full bg-[#E31C52]"
              ></span>
            </span>
          </span>
        </div>

        <!-- Main Heading -->
        <h2 class="text-3xl md:text-4xl font-bold mb-2 leading-tight">
          {{t('landing_defination.cpa_heading_first')}}<span style="color: #e31c52">{{t('landing_defination.cpa_heading_highlight_first')}}</span> <br />
          {{t('landing_defination.cpa_heading_last')}}
          <span style="color: #e31c52"> {{t('landing_defination.cpa_heading_highlight_last')}}</span>
        </h2>

        <!-- Sub Heading -->
        <p
          class="text-xl md:text-3xl font-bold my-4 bg-gradient-to-r from-lime-600 via-rose-500 to-purple-600 inline-block text-transparent bg-clip-text"
        >
          {{t('landing_defination.cpa_subheading')}}
        </p>
        <p class="text-xs sm:text-sm mb-1 italic">
          {{t('landing_defination.cpa_note')}} 
        </p>

        <!-- Peacock Ads Manager Screenshot -->
        <div class="relative max-w-4xl mx-auto mb-1">
          <div
            class="glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/50"
          >
            <img
              src="https://topperit.com/images/peacock.webp"
              alt="Peacock BD Ads Manager Result - ১০৫ টাকায় সেল"
              class="w-full h-auto"
            />
          </div>
        </div>

        <!-- Bottom Caption -->
        <p class="text-xs mb-4">
          {{t('landing_defination.cpa_img_note')}}
        </p>

        <!-- CTA Button -->
        <NuxtLink
          to="https://wa.me/8809638365975"
          target="_blank"
          class="inline-flex items-center gap-4 px-12 py-3 rounded-lg text-white font-normal text-sm md:text-xl shadow-xl shadow-red-600/30 transform hover:scale-105 transition-all duration-300"
          style="background: linear-gradient(135deg, #e31c52, #c4173f)"
        >
         <Icon name="hugeicons:comment-add-01" class="font-bold"/> {{t("landing_defination.cta_button")}}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n({ useScope: 'global' });

// Manually create computed array of objects with numeric keys
const benefits = computed(() => [
  { 1: t('landing_defination.benefits_list.0') },
  { 2: t('landing_defination.benefits_list.1') },
  { 3: t('landing_defination.benefits_list.2') },
  { 4: t('landing_defination.benefits_list.3') },
  { 5: t('landing_defination.benefits_list.4') },
  { 6: t('landing_defination.benefits_list.5') },
  { 7: t('landing_defination.benefits_list.6') },
  { 8: t('landing_defination.benefits_list.7') },
]);
</script>




<style scoped></style>
