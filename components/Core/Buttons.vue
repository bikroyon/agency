<template>
  <!-- CTA বাটন -->
  <div id="video" class=" flex justify-center gap-2 sm:gap-4 flex-wrap">
    <NuxtLink
      to="https://wa.me/8801904015818"
      @click="trackMessage"
      class="bg-rose-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-rose-600 flex items-center gap-2 transition text-sm sm:text-base"
    >
      <Icon name="hugeicons:whatsapp" /> {{ t("cta.primary") }}
    </NuxtLink>
    <NuxtLink
      to="#video"
      class="border border-rose-500 text-rose-500 px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-3 rounded-md hover:bg-rose-500 hover:dark:bg-rose-500 hover:text-white flex items-center gap-2 transition"
    >
      {{ t("cta.secondary") }}
      <Icon name="hugeicons:arrow-down-double" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });
const { $fbq } = useNuxtApp();

const trackMessage = () => {
  if ($fbq) {
    $fbq("track", "Message");
  }
};
</script>

<style scoped></style>
