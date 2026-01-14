<script setup lang="ts">
const mobileOpen = ref(false);
const router = useRouter();
const localePath = useLocalePath();

router.afterEach(() => {
  mobileOpen.value = false;
});

const { t } = useI18n({ useScope: "global" });

// Menu items with i18n keys
const items = computed(() => [
  {
    label: t("menu.home"),
    icon: "hugeicons:home-11",
    to: localePath("/"),
  },
  {
    label: t("menu.services"),
    icon: "hugeicons:service",
    children: [
      {
        label: t("menu.landing_page"),
        description: t("menu.landing_page_desc"),
        icon: "hugeicons:store-02",
        to: localePath("/landing-page"),
      },
      {
        label: t("menu.ecommerce"),
        description: t("menu.ecommerce_desc"),
        icon: "hugeicons:activity-04",
        to: localePath("/wordpress-website"),
      },
      {
        label: t("menu.custom_app"),
        description: t("menu.custom_app_desc"),
        icon: "hugeicons:computer-check",
        to: localePath("/custom-app"),
      },
      {
        label: t("menu.smm"),
        description: t("menu.smm_desc"),
        icon: "hugeicons:calendar-love-01",
        to: localePath("/social-media-management"),
      },
    ],
  },
  {
    label: t("menu.portfolio"),
    icon: "hugeicons:workflow-circle-01",
    to: localePath("/portfolio"),
  },
  {
    label: t("menu.about"),
    icon: "hugeicons:user-group",
    to: localePath("/about-us"),
  },
  {
    label: t("menu.contact"),
    icon: "hugeicons:contact",
    to: localePath("/contacts"),
  },
]);
</script>

<template>
  <!-- Header -->
  <header
    class="w-full mx-auto sticky top-0 z-50 h-full bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-100 border border-b border-white/5"
  >
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center text-xl font-bold">
        Bikroy<span class="text-rose-600 text-2xl">on.</span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center justify-start gap-6">
        <UNavigationMenu
          :items="items"
          color="error"
          variant="link"
          class="text-sm"
        />
        <!-- Icons -->
        <div class="flex items-center gap-4">
          <LangSwitcher />
          <ClientOnly>
            <UColorModeButton color="error" />
          </ClientOnly>
          <UButton
            to="https://wa.me/8801904015818"
            class="hidden sm:flex"
            icon="hugeicons:whatsapp"
            size="lg"
            color="error"
            variant="subtle"
            label="Whatsapp"
          />
        </div>
      </div>
      <!-- Mobile toggle -->
      <UButton
        class="md:hidden transition-transform duration-300 z-50"
        color="error"
        :icon="mobileOpen ? 'hugeicons:cancel-01' : 'hugeicons:menu-11'"
        variant="ghost"
        @click="mobileOpen = !mobileOpen"
      />
    </div>
  </header>

  <!-- ✅ Fullscreen Mobile Menu (outside header) -->
  <transition name="slide-down">
    <div
      v-if="mobileOpen"
      id="mobile-menu"
      class="fixed md:hidden inset-0 z-40 bg-gray-100 dark:bg-[#121212] p-6 flex flex-col justify-start"
    >
      <div class="text-lg font-semibold mt-16 mb-6">{{ t("menu.name") }}</div>
      <UNavigationMenu
        :items="items"
        color="error"
        orientation="vertical"
        class="text-base"
      />
      <div class="flex gap-3 pt-6 mt-auto border-t border-white/10">
        <NuxtLink to="https://wa.me/8801904015818">
          <UButton
            icon="hugeicons:whatsapp"
            size="md"
            color="error"
            variant="subtle"
          />
        </NuxtLink>
        <NuxtLink to="https://www.youtube.com/@Bikroyon">
          <UButton
            icon="hugeicons:youtube"
            size="md"
            color="error"
            variant="subtle"
          />
        </NuxtLink>

        <NuxtLink to="">
          <UButton
            icon="hugeicons:facebook-02"
            size="md"
            color="error"
            variant="subtle"
          />
        </NuxtLink>
        <NuxtLink to="https://m.me/bikroyonbd">
          <UButton
            icon="hugeicons:messenger"
            size="md"
            color="error"
            variant="subtle"
          />
        </NuxtLink>
        <UColorModeButton color="error" />
        <LangSwitcher />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
