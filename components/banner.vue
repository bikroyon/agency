<script setup lang="ts">
import Community from "~/assets/lottie/Community.json";
const { t } = useI18n({ useScope: "global" });
const { $fbq } = useNuxtApp();

const trackMessage = () => {
  if ($fbq) {
    $fbq("track", "Message");
  }
};
</script>

<template>
  <section>
    <div
      class="bg-stone-100 dark:bg-stone-800 sm:max-h-[300px] rounded-3xl flex flex-col-reverse sm:flex-row items-center justify-between p-6 overflow-hidden banner-section"
    >
      <!-- Left Section (Text Content) -->
      <div class="max-w-xl flex items-center flex-col">
        <div class="text-left sm:pl-10">
          <!-- Heading -->
          <h2 class="text-2xl md:text-3xl font-bold banner-items">
            {{ t("support.title") }}
            <span class="text-rose-500">{{ t("support.highlight") }}</span>
            {{ t("support.subtitle") }}
          </h2>

          <!-- Descriptions -->
          <p class="text-xs sm:text-sm mb-2 font-normal banner-items">
            {{ t("support.description1") }}
          </p>
          <p class="text-xs sm:text-sm mb-2 font-normal banner-items">
            {{ t("support.description2") }}
          </p>

          <!-- Button -->
          <NuxtLink
            to="https://wa.me/8801904015818?text=i want to get free consultations"
            target="_blank"
            @click="trackMessage"
            class="banner-items bg-rose-500 dark:bg-rose-600 hover:bg-rose-500 hover:dark:bg-rose-700 w-fit text-slate-50 px-4 py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <Icon name="hugeicons:whatsapp" />
            <p class="text-xs sm:text-sm md:text-base">
              {{ t("support.button") }}
            </p>
          </NuxtLink>
        </div>
      </div>

      <!-- Right Section (Illustration) -->
      <div
        class="flex items-center justify-end h-[300px] w-[300px] overflow-hidden"
      >
        <Lottie style="height: 400px" :data="Community" />
      </div>
    </div>
  </section>
</template>
