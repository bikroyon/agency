<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Navigation links array
const links =computed(() => [
  { label: t("footer.home"), to: "/" },
  { label: t("footer.landing_page"), to: "/landing-page" },
  { label: t("footer.ecommerce"), to: "/ecommerce-website" },
  { label: t("footer.portfolio"), to: "/portfolio" },
  { label: t("footer.contact"), to: "/contacts" },
]);

// Social links
const socialLinks = [
  { href: "#", icon: "ic:round-facebook" },
  { href: "#", icon: "tabler:brand-youtube-filled" },
  { href: "#", icon: "tabler:brand-whatsapp-filled" },
  { href: "#", icon: "mdi:facebook-messenger" },
];
</script>

<template>
  <footer class="w-full border-t border-gray-800 bg-[#0A1120] py-4 px-4">
    <div class="container flex flex-col md:flex-row items-center justify-between gap-1.5 sm:gap-4 mx-auto">

      <!-- Left Side -->
      <div class="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
        <span>{{ t("footer.copyright") }}</span>
        <NuxtLink to="#" class="font-semibold text-white hover:underline">
          Bikroyon
        </NuxtLink>
        <span>{{ t("footer.rights") }}</span>
      </div>

      <!-- Middle Links -->
      <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-400">
        <NuxtLink
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="hover:text-white"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <!-- Social Icons -->
      <div class="flex items-center gap-4 text-gray-400">
        <NuxtLink
          v-for="(social, index) in socialLinks"
          :key="index"
          :to="social.href"
          class="hover:text-white"
        >
          <Icon :name="social.icon" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
    <FloatingButton/>
  </footer>
</template>
