<template>
  <section class="py-8 md:py-16 pt-8 md:pt-8">
    <div
      class="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
    ></div>
    <div class="max-w-5xl mx-auto px-4 text-center">
      <!-- শিরোনাম -->
      <h1 class="text-2xl sm:text-4xl md:text-5xl font-bold">
        {{ t("smm.hero.heading_first") }}
        <span class="text-rose-500">{{ t("smm.hero.heading_highlight") }}</span>
        <br class="hidden sm:block" />
        {{ t("smm.hero.heading_last") }}
      </h1>

      <!-- বর্ণনা -->
      <p class="mt-4 text-gray-700 dark:text-gray-300 text-xs sm:text-lg">
        {{ t("smm.hero.description") }}
      </p>

      <!-- CTA বাটন -->
      <div id="video" class="mt-6 flex justify-center gap-2 sm:gap-4 flex-wrap">
        <NuxtLink
          to="https://wa.me/+8801904015818"
          class="bg-rose-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-rose-600 flex items-center gap-2 transition text-sm sm:text-base"
        >
          <Icon name="hugeicons:whatsapp" /> {{ t("smm.hero.cta_primary") }}
        </NuxtLink>
        <NuxtLink
          to="#video"
          class="border border-rose-500 text-rose-500 px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-3 rounded-md hover:bg-rose-500 hover:dark:bg-rose-500 hover:text-white flex items-center gap-2 transition"
        >
          {{ t("smm.hero.cta_secondary") }}
          <Icon name="hugeicons:arrow-down-double" />
        </NuxtLink>
      </div>

      <!-- ভিডিও/ইমেজ (ঐচ্ছিক) -->
      <div class="mt-10 flex justify-center">
        <iframe
          :src="t('smm.hero.video')"
          title="YouTube video player"
          frameborder="0"
          class="rounded-lg border-4 shadow-2xl w-full h-[220px]  sm:h-[315px] md:w-[660px] md:h-[415px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });
</script>
