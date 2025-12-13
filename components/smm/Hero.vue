<template>
  <section class="py-8 md:py-16 pt-8 md:pt-8">
    <div
      class="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
    ></div>
    <div class="max-w-5xl mx-auto px-4 text-center">
      <!-- শিরোনাম -->
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
        {{ t("smm.hero.heading_first") }}
        <span class="text-rose-500">{{ t("smm.hero.heading_highlight") }}</span>
        <br class="hidden sm:block" />
        {{ t("smm.hero.heading_last") }}
      </h1>

      <!-- বর্ণনা -->
      <p class="mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-lg">
        {{ t("smm.hero.description") }}
      </p>

      <!-- CTA বাটন -->
      <div class="mt-6 flex justify-center gap-4 flex-wrap">
        <NuxtLink
          to="https://wa.me/+8801799568976"
          class="bg-rose-500 text-white px-6 py-3 rounded-md hover:bg-rose-600 flex items-center gap-2 transition"
        >
          <Icon name="hugeicons:whatsapp" /> {{ t("smm.hero.cta_primary") }}
        </NuxtLink>
        <NuxtLink
          to="#features"
          class="border border-rose-500 text-rose-500 px-6 py-3 rounded-md hover:bg-rose-100 hover:dark:bg-rose-500 hover:text-white flex items-center gap-2 transition"
        >
          {{ t("smm.hero.cta_secondary") }}
          <Icon name="hugeicons:arrow-down-double" />
        </NuxtLink>
      </div>

      <!-- ভিডিও/ইমেজ (ঐচ্ছিক) -->
      <div class="mt-10 flex justify-center">
        <iframe
          width="660"
          height="415"
          :src="t('smm.hero.video')"
          title="ডেমো ভিডিও"
          class="rounded-lg shadow-2xl w-full max-w-[660px] aspect-video"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });
</script>
