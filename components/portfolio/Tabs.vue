<script setup lang="ts">
import gsap from "gsap";

const { t } = useI18n({ useScope: "global" });
const currentTab = ref(0);
const tabContent = ref<HTMLElement | null>(null);
const localePath = useLocalePath();
// Portfolio tabs (titles and descriptions multilingual)
const tabs = computed(() => [
  {
    title: t("portfolio_page.tabs.landing.title"),
    description: t("portfolio_page.tabs.landing.description"),
    icon: "hugeicons:ai-web-browsing",
    button: { title: t("portfolio_page.tabs.landing.button"), link: "/portfolio" },
    courses: [
      {
        title: "আম বিক্রির ল্যান্ডিং পেইজ",
        image: "https://placehold.co/400",
        tags: ["JavaScript", "MongoDB", "React"],
        description:
          "This items is related to Landing Page. i can say more about it",
      },
      {
        title: "React Native App Dev",
        image: "https://placehold.co/400",
        tags: ["Mobile", "React", "Native"],
      },
      {
        title: "Full Stack JS (MERN)",
        image: "https://placehold.co/400",
        tags: ["JavaScript", "MongoDB", "React"],
      },
    ],
  },
  {
    title: t("portfolio_page.tabs.ecommerce.title"),
    description: t("portfolio_page.tabs.ecommerce.description"),
    icon: "hugeicons:activity-04",
    button: { title: t("portfolio_page.tabs.ecommerce.button"), link: "/portfolio" },
    courses: [
      {
        title: "UX/UI Design Bootcamp",
        image: "https://placehold.co/400",
        tags: ["Design", "Figma", "UX"],
      },
    ],
  },
  {
    title: t("portfolio_page.tabs.custom.title"),
    description: t("portfolio_page.tabs.custom.description"),
    icon: "hugeicons:ai-beautify",
    button: { title: t("portfolio_page.tabs.custom.button"), link: "/portfolio" },
    courses: [
      {
        title: "Big Data with Spark",
        image: "https://placehold.co/400",
        tags: ["Big Data", "Spark", "ETL"],
      },
    ],
  },
  {
    title: t("portfolio_page.tabs.smm.title"),
    description: t("portfolio_page.tabs.smm.description"),
    icon: "hugeicons:ai-voice",
    button: { title: t("portfolio_page.tabs.smm.button"), link: "/portfolio" },
    courses: [
      {
        title: "Digital Marketing",
        image: "https://placehold.co/400",
        tags: ["SEO", "Ads", "Strategy"],
      },
    ],
  },
]);

function changeTab(index: number) {
  if (currentTab.value === index || !tabContent.value) return;
  gsap.fromTo(
    tabContent.value,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.4 }
  );
  currentTab.value = index;
}
</script>

<template>
  <div v-if="tabs.length">
    <!-- Section Heading -->
    <div class="text-center mb-4 sm:mb-10 max-w-2xl mx-auto px-3">
      <h2 class="text-3xl md:text-4xl font-bold">
        {{ t("portfolio_page.title") }}
        <span class="text-rose-500">{{ t("portfolio_page.highlight") }}</span>
      </h2>
      <p class="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-2">
        {{ t("portfolio_page.description") }}
      </p>
    </div>

    <!-- Tabs Navigation -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="changeTab(index)"
        :class="[
          'cursor-pointer p-2 sm:p-4 rounded-lg w-auto shadow transition duration-300',
          currentTab === index
            ? 'bg-rose-50 dark:bg-slate-800 border border-rose-200 dark:border-slate-700 shadow dark:shadow-slate-950 shadow-rose-300'
            : 'border border-rose-300 shadow shadow-rose-300 dark:shadow-slate-950 dark:border-slate-700 hover:bg-rose-50 hover:dark:bg-slate-900',
        ]"
      >
        <div class="flex items-start gap-1 sm:gap-3">
          <Icon :name="tab.icon" class="text-lg sm:text-2xl text-rose-600" />
          <div>
            <h4 class="font-bold text-xs sm:text-base">{{ tab.title }}</h4>
            <p class="text-xs sm:text-sm text-gray-500">
              {{ tab.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Animated Content -->
    <div ref="tabContent" class="overflow-hidden px-0 pt-0">
      <PortfolioTabContent :courses="tabs[currentTab].courses" />
    </div>
  </div>
</template>
