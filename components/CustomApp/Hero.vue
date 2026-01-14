<template>
  <section class="py-8 md:py-16 pt-8 md:pt-8">
    <div
      class="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
    ></div>

    <div class="max-w-6xl mx-auto px-4 pt-12 text-center">
      <!-- Heading -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
        {{ t("custom_app.hero.heading_first") }}
        <span class="text-rose-500">{{
          t("custom_app.hero.heading_highlight")
        }}</span>
        {{ t("custom_app.hero.heading_last") }}
      </h1>

      <!-- Description -->
      <p class="mt-4 text-sm sm:text-lg text-gray-700 dark:text-gray-300">
        {{ t("custom_app.hero.description") }}
      </p>

      <!-- CTA বাটন -->
      <div id="video" class="mt-6 flex justify-center gap-2 sm:gap-4 flex-wrap">
        <NuxtLink
          to="https://wa.me/8801904015818"
          @click="trackMessage"
          class="bg-rose-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-rose-600 flex items-center gap-2 transition text-sm sm:text-base"
        >
          <Icon name="hugeicons:whatsapp" />
          {{ t("custom_app.hero.cta_primary") }}
        </NuxtLink>
        <NuxtLink
          to="#video"
          class="border border-rose-500 text-rose-500 px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-3 rounded-md hover:bg-rose-500 hover:dark:bg-rose-500 hover:text-white flex items-center gap-2 transition"
        >
          {{ t("custom_app.hero.cta_secondary") }}
          <Icon name="hugeicons:arrow-down-double" />
        </NuxtLink>
      </div>
      <!-- YouTube Video -->
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
        >
        </iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n({ useScope: "global" });
</script>

<style scoped></style>
