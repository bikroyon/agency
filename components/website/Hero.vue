<template>
  <section class="py-16 pt-8">
    <div
      class="absolute inset-0 h-full w-full opacity-40 -z-10 bg-[radial-gradient(#99a1af_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
    ></div>
    <div class="max-w-5xl mx-auto px-4 text-center">
      <!-- Title -->
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
        {{ $t("ecommerce_page.hero.heading_first") }}
        <span class="text-rose-500">{{ $t("ecommerce_page.hero.heading_highlight") }}</span>{{ $t("ecommerce_page.hero.heading_last") }}
      </h2>

      <!-- Description -->
      <p class="mt-4 text-sm sm:text-lg">
        {{ $t('ecommerce_page.hero.description') }}
      </p>

      <!-- Buttons -->
      <div class="mt-6 flex justify-center gap-4 flex-wrap">
        <NuxtLink
          to="https://wa.me/+8801799568976"
          class="bg-rose-500 text-xs sm:text-base flex items-center justify-center gap-2 text-white px-4 py-1.5 rounded-md hover:bg-rose-700 transition"
        >
          <Icon name="hugeicons:whatsapp" /> <span>{{ $t('ecommerce_page.hero.cta_primary') }}</span>
        </NuxtLink>
        <NuxtLink
          to="#pricing"
          class="border text-xs sm:text-base flex items-center justify-center gap-2 border-rose-500 text-rose-500 px-4 py-1.5 rounded-md hover:bg-rose-100 hover:dark:bg-slate-800 transition"
        >
          <span>{{ $t('ecommerce_page.hero.cta_secondary') }}</span>
          <Icon name="hugeicons:arrow-down-double" />
        </NuxtLink>
      </div>

      <!-- YouTube Video-->
      <div class="mt-10 flex items-center justify-center">
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/6DAG3iFrdJk?si=KOOuL45HtPdRxVhJ"
          title="YouTube video player"
          frameborder="0"
          class="rounded-lg shadow-2xl w-fit h-auto md:w-[660px] md:h-[415px]"
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
</script>

<style scoped></style>
