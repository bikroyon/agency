<template>
  <section class="py-16 pt-8">
    <div
      class="absolute inset-0 h-full w-full opacity-40 -z-10 bg-[radial-gradient(#99a1af_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
    ></div>
    <div class="max-w-5xl mx-auto px-4 text-center">
      <!-- Title -->
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
        {{ $t("ecommerce_page.hero.heading_first") }}
        <span class="text-rose-500">{{
          $t("ecommerce_page.hero.heading_highlight")
        }}</span
        >{{ $t("ecommerce_page.hero.heading_last") }}
      </h2>

      <!-- Description -->
      <p class="mt-4 text-sm sm:text-lg">
        {{ $t("ecommerce_page.hero.description") }}
      </p>

      <!-- CTA বাটন -->
      <div id="video" class="mt-6 flex justify-center gap-2 sm:gap-4 flex-wrap">
        <NuxtLink
          to="https://wa.me/8801904015818"
          @click="trackMessage"
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
          :src="t('ecommerce_page.hero.video')"
          title="YouTube video player"
          frameborder="0"
          class="rounded-lg border-4 dark:border-stone-600 border-stone-200 shadow-2xl w-full h-[220px] sm:h-[315px] md:w-[660px] md:h-[415px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n({ useScope: "global" });
const { $fbq } = useNuxtApp();

const trackMessage = () => {
  if ($fbq) {
    $fbq("track", "Message");
  }
};
</script>

<style scoped></style>
