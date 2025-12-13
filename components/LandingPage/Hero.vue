<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });
</script>
<template>
  <section class="py-8 md:py-16 pt-8 md:pt-8">
    <div
      class="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
    ></div>

    <div class="max-w-5xl mx-auto px-4 text-center">
      <!-- Title -->
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
        {{ t("landing_section.title_first") }}
        <span class="text-rose-500">{{ t("landing_section.highlight") }}</span>
        {{ t("landing_section.title_last") }}
      </h2>

      <!-- Description -->
      <p class="mt-4 text-sm sm:text-lg">
        {{ t("landing_section.description") }}
      </p>

      <!-- Buttons -->
      <div class="mt-6 flex justify-center gap-4 flex-wrap">
        <NuxtLink
          to="https://wa.me/+8801799568976"
          class="bg-rose-500 text-xs sm:text-base flex items-center justify-center gap-2 text-white px-4 py-1.5 rounded-md hover:bg-rose-700 transition"
        >
          <Icon name="hugeicons:whatsapp" />
          <span>{{ t("landing_section.contact_button") }}</span>
        </NuxtLink>
        <NuxtLink
          to="#pricing"
          class="border text-xs sm:text-base flex items-center justify-center gap-2 border-rose-500 text-rose-500 px-4 py-1.5 rounded-md hover:bg-rose-100 transition"
        >
          <span>{{ t("landing_section.details_button") }}</span>
          <Icon name="hugeicons:arrow-down-double" />
        </NuxtLink>
      </div>

      <!-- YouTube Video-->
      <div class="mt-10 flex items-center justify-center">
        <iframe
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

<style scoped></style>
