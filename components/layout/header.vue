<script setup>
const mobileOpen = ref(false);
const router = useRouter();
// Automatically close mobile menu on route change
router.afterEach(() => {
  mobileOpen.value = false;
});
const items = [
  {
    label: "হোম",
    icon: "hugeicons:home-11",
    to: "/",
  },
  {
    label: "সেবা",
    icon: "hugeicons:service",
    children: [
      {
        label: "ল্যান্ডিং পেজ ডিজাইন",
        description:
          "স্পিড এবং কনভার্সনের জন্য ওয়ার্ডপ্রেস ও এলিমেন্টরে নির্মিত",
        icon: "hugeicons:store-02",
        to: "/landing-page",
      },
      {
        label: "ই-কমার্স ওয়েবসাইট",
        description: "ওয়ার্ডপ্রেস বা কাস্টম স্ট্যাক ব্যবহার করে তৈরি",
        icon: "hugeicons:activity-04",
        to: "/ecommerce-website",
      },
      {
        label: "কাস্টম ওয়েব অ্যাপ",
        description: "স্কেলেবল অ্যাপের জন্য Laravel, Vue.js, Mysql ব্যবহৃত",
        icon: "hugeicons:computer-check",
        to: "#",
      },
      {
        label: "মাসিক রক্ষণাবেক্ষণ",
        description: "আপডেট, SEO ও নিরাপত্তা সেবা চলমানভাবে প্রদান",
        icon: "hugeicons:calendar-love-01",
        to: "/website-management",
      },
    ],
  },
  {
    label: "পোর্টফোলিও",
    icon: "hugeicons:workflow-circle-01",
    to: "/Portfolio",
  },
    {
    label: "আমাদের সম্পর্কে",
    icon: "hugeicons:user-group",
    to: "/about-us",
  },
  {
    label: "যোগাযোগ",
    icon: "hugeicons:contact",
    to: "/contacts",
  },
];
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
          class="text-sm text-gray-500"
        />
        <!-- Icons -->
        <div class="flex items-center gap-4 text-white">
          <ClientOnly>
            <UColorModeButton color="neutral" />
          </ClientOnly>
          <UButton
            to="https://wa.me/+8801799568976"
            class="hidden sm:flex"
            icon="hugeicons:whatsapp"
            size="md"
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
      class="fixed md:hidden inset-0 z-40 bg-gray-100 dark:bg-[#02091e] p-6 flex flex-col justify-start"
    >
      <div class="text-lg font-semibold mt-16 mb-6">মেনু</div>

      <UNavigationMenu
        :items="items"
        color="error"
        orientation="vertical"
        class="text-base"
      />
      <div class="flex gap-3 pt-6 mt-auto border-t border-white/10">
        <UColorModeButton color="neutral" />
        <UButton
          icon="hugeicons:github-01"
          size="md"
          color="error"
          variant="subtle"
        />
        <UButton
          icon="hugeicons:whatsapp"
          size="md"
          color="error"
          variant="subtle"
        />
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
