<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });
</script>
<template>
  <footer class="pt-6">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-12">
      <!-- Brand -->
      <div>
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center text-xl font-bold">
          Bikroy<span class="text-rose-600 text-2xl">on.</span>
        </NuxtLink>
        <p class="text-sm">
          {{ t("footer.brand_tagline") }}
        </p>

        <!-- Social Links -->
        <div class="flex gap-3 mt-4">
          <NuxtLink to="#" class="hover:text-rose-600 transition">
            <Icon name="ic:round-facebook" class="w-6 h-6" />
          </NuxtLink>
          <NuxtLink to="#" class="hover:text-rose-600 transition">
            <Icon name="tabler:brand-youtube-filled" class="w-6 h-6" />
          </NuxtLink>
          <NuxtLink to="#" class="hover:text-rose-600 transition">
            <Icon name="tabler:brand-whatsapp-filled" class="w-6 h-6" />
          </NuxtLink>
          <NuxtLink to="#" class="hover:text-rose-600 transition">
            <Icon name="mdi:facebook-messenger" class="w-6 h-6" />
          </NuxtLink>
        </div>
      </div>

      <!-- Services -->
      <div>
        <h3 class="font-semibold text-lg mb-2">
          {{ t("footer.services_title") }}
        </h3>
        <ul class="space-y-2 text-sm">
          <li>
            <NuxtLink :to="$localePath('/wordpress-website')" class="">{{
              t("footer.services.wordpress")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="$localePath('/custom-app')" class="">{{
              t("footer.services.webapp")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="$localePath('/social-media-management')" class="">{{
              t("footer.services.ai")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="$localePath('/landing-page')" class="">{{
              t("footer.services.security")
            }}</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="font-semibold text-lg mb-2">
          {{ t("footer.quick_links_title") }}
        </h3>
        <ul class="space-y-2 text-sm">
          <li>
            <NuxtLink :to="$localePath('/')" class="">{{
              t("footer.quick_links.home")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="$localePath('/about-us')" class="">{{
              t("footer.quick_links.about")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="$localePath('/portfolio')" class="">{{
              t("footer.quick_links.portfolio")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="$localePath('/contacts')" class="">{{
              t("footer.quick_links.contacts")
            }}</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="font-semibold text-lg mb-2">
          {{ t("footer.contact_title") }}
        </h3>
        <ul class="space-y-2 text-sm">
          <li class="flex items-center gap-2">
            <Icon name="mdi:map-marker-outline" class="w-5 h-5 text-rose-500" />
            <NuxtLink to="https://share.google/dMOa11dLYJyKxnb2W">
              {{ t("footer.contact.address") }}
            </NuxtLink>
          </li>

          <li class="flex items-center gap-2">
            <Icon name="mdi:phone-outline" class="w-5 h-5 text-rose-500" />
            <NuxtLink :to="`tel:8801904015818`" class="">
              {{ t("footer.contact.phone") }}
            </NuxtLink>
          </li>

          <li class="flex items-center gap-2">
            <Icon name="mdi:email-outline" class="w-5 h-5 text-rose-500" />
            <NuxtLink :to="`mailto:contact@bikroyon.com`" class="">
              contact@bikroyon.com
            </NuxtLink>
          </li>
          <li class="flex items-center gap-2">
            <Icon name="mdi:map-outline" class="w-5 h-5 text-rose-500" />
            <NuxtLink to="" class="">
              Find us on Map
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Divider -->
    <div
      class="border-t border-gray-700 mt-8 py-2 text-center text-sm text-gray-500"
    >
      {{ t("footer.copyright") }}
    </div>
    <FloatingButton />
  </footer>
</template>
