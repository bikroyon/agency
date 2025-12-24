<template>
  <div>
    <div>
      <!-- Section Heading -->
      <div class="text-center mb-4 sm:mb-10 max-w-2xl mx-auto px-3">
        <h2 class="text-3xl md:text-4xl font-bold">
          {{ t("portfolio.title") }}
          <span class="text-rose-500">{{ t("portfolio.highlight") }}</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-2">
          {{ t("portfolio.description") }}
        </p>
      </div>
    </div>
    <div class="relative w-full h-[400px] overflow-hidden">
      <UMarquee
        reverse
        orientation="vertical"
        :overlay="false"
        :ui="{
          root: '[--duration:40s] absolute w-[460px] -left-[100px] -top-[300px] h-[940px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
        }"
      >
        <img
          v-for="i in 4"
          :key="i"
          :src="`/portfolios/${i}.webp`"
          width="460"
          height="258"
          :alt="`Nuxt UI Screenshot ${i}`"
          class="aspect-video border border-default rounded-lg bg-white grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
        />
      </UMarquee>
      <UMarquee
        orientation="vertical"
        :overlay="false"
        :ui="{
          root: '[--duration:40s] absolute w-[460px] -top-[400px] left-[480px] h-[1160px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
        }"
      >
        <img
          v-for="i in [5, 6, 7, 8]"
          :key="i"
          :src="`/portfolios/${i}.webp`"
          width="460"
          height="258"
          :alt="`Nuxt UI Screenshot ${i}`"
          class="aspect-video border border-default rounded-lg bg-white grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
        />
      </UMarquee>
      <UMarquee
        reverse
        orientation="vertical"
        :overlay="false"
        :ui="{
          root: 'hidden md:flex [--duration:40s] absolute w-[460px] -top-[300px] left-[1020px] h-[1060px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
        }"
      >
        <img
          v-for="i in [9, 10, 11, 12]"
          :key="i"
          :src="`/portfolios/${i}.webp`"
          width="460"
          height="258"
          :alt="`Nuxt UI Screenshot ${i}`"
          class="aspect-video border border-default rounded-lg bg-white grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
        />
      </UMarquee>
    </div>
  </div>
</template>
<script setup>
  const { t } = useI18n({ useScope: "global" });
</script>
