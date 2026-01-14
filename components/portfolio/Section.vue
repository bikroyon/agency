<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const { t } = useI18n({ useScope: "global" });
gsap.registerPlugin(ScrollTrigger);

const portfolioSections = [
  {
    key: "landing",
    title: t("portfolio_page.sections.landing.title"),
    description: t("portfolio_page.sections.landing.description"),
    items: [
      {
        image: "/landing/1.webp",
        title: t("portfolio_page.sections.landing.items.0.title"),
        desc: t("portfolio_page.sections.landing.items.0.desc"),
        btn: t("portfolio_page.sections.landing.items.0.btn"),
        url: "https://example.com",
      },
      {
        image: "/landing/2.webp",
        title: t("portfolio_page.sections.landing.items.1.title"),
        desc: t("portfolio_page.sections.landing.items.1.desc"),
        btn: t("portfolio_page.sections.landing.items.1.btn"),
        url: "https://example.com",
      },
      {
        image: "/landing/3.webp",
        title: t("portfolio_page.sections.landing.items.1.title"),
        desc: t("portfolio_page.sections.landing.items.1.desc"),
        btn: t("portfolio_page.sections.landing.items.1.btn"),
        url: "https://example.com",
      },
      {
        image: "/landing/4.webp",
        title: t("portfolio_page.sections.landing.items.1.title"),
        desc: t("portfolio_page.sections.landing.items.1.desc"),
        btn: t("portfolio_page.sections.landing.items.1.btn"),
        url: "https://example.com",
      },
      {
        image: "/landing/5.webp",
        title: t("portfolio_page.sections.landing.items.1.title"),
        desc: t("portfolio_page.sections.landing.items.1.desc"),
        btn: t("portfolio_page.sections.landing.items.1.btn"),
        url: "https://example.com",
      },
      {
        image: "/landing/6.webp",
        title: t("portfolio_page.sections.landing.items.1.title"),
        desc: t("portfolio_page.sections.landing.items.1.desc"),
        btn: t("portfolio_page.sections.landing.items.1.btn"),
        url: "https://example.com",
      },
    ],
  },
  {
    key: "website",
    title: t("portfolio_page.sections.website.title"),
    description: t("portfolio_page.sections.website.description"),
    items: [
      {
        image: "/websites/1.webp",
        title: t("portfolio_page.sections.website.items.0.title"),
        desc: t("portfolio_page.sections.website.items.0.desc"),
        btn: t("portfolio_page.sections.website.items.0.btn"),
        url: "https://example.com",
      },
      {
        image: "/websites/2.webp",
        title: t("portfolio_page.sections.website.items.1.title"),
        desc: t("portfolio_page.sections.website.items.1.desc"),
        btn: t("portfolio_page.sections.website.items.1.btn"),
        url: "https://example.com",
      },    {
        image: "/websites/3.webp",
        title: t("portfolio_page.sections.website.items.1.title"),
        desc: t("portfolio_page.sections.website.items.1.desc"),
        btn: t("portfolio_page.sections.website.items.1.btn"),
        url: "https://example.com",
      },
          {
        image: "/websites/4.webp",
        title: t("portfolio_page.sections.website.items.1.title"),
        desc: t("portfolio_page.sections.website.items.1.desc"),
        btn: t("portfolio_page.sections.website.items.1.btn"),
        url: "https://example.com",
      },
    ],
  },
  {
    key: "apps",
    title: t("portfolio_page.sections.apps.title"),
    description: t("portfolio_page.sections.apps.description"),
    items: [
      {
        image: "/apps/1.webp",
        title: t("portfolio_page.sections.apps.items.0.title"),
        desc: t("portfolio_page.sections.apps.items.0.desc"),
        btn: t("portfolio_page.sections.apps.items.0.btn"),
        url: "https://example.com",
      },
      {
        image: "/apps/2.webp",
        title: t("portfolio_page.sections.apps.items.1.title"),
        desc: t("portfolio_page.sections.apps.items.1.desc"),
        btn: t("portfolio_page.sections.apps.items.1.btn"),
        url: "https://example.com",
      },
    ],
  },
];

onMounted(async () => {
  // Wait for DOM to render carousel cards
  await nextTick();

  document.querySelectorAll(".portfolio-section").forEach((section) => {
    const cards = section.querySelectorAll(".carousel-card");

    gsap.from(cards, {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 98.5%", // ~1.5% from top of viewport
        toggleActions: "play reverse play reverse",
      },
    });
  });
});
</script>

<template>
  <section class="container mx-auto py-4 space-y-12">
    <!-- Heading -->
    <div class="text-center max-w-2xl mx-auto">
      <h2 class="text-4xl font-bold tracking-tight">
        {{ t("portfolio_page.title") }}
        <span class="text-rose-500">{{ t("portfolio_page.highlight") }}</span>
      </h2>
      <p class="mt-4 text-gray-600 dark:text-gray-300">
        {{ t("portfolio_page.description") }}
      </p>
    </div>

    <!-- Portfolio Sections -->
    <div
      v-for="section in portfolioSections"
      :key="section.key"
      class="portfolio-section space-y-4"
    >
      <!-- Section header -->
      <div>
        <h3 class="text-2xl font-semibold">{{ section.title }}</h3>
        <p class="text-sm text-gray-500 max-w-xl">{{ section.description }}</p>
      </div>

      <!-- Carousel -->
      <UCarousel
        v-slot="{ item }"
        :items="section.items"
        loop
        arrows
        :autoplay="{ delay: 3000 }"
        wheel-gestures
        :ui="{
          item: 'basis-full sm:basis-1/2 lg:basis-1/3 space-x4 ps-0 px-2',
          prev: 'sm:start-6',
          next: 'sm:end-6',
          container: 'ms-0',
        }"
      >
        <!-- Card -->
        <div
          class="carousel-card group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-700"
        >
          <img
            :src="item.image"
            class="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          <!-- Gradient Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90"
          />

          <!-- Hover Content -->
          <div
            class="absolute inset-0 flex flex-col justify-end p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
          >
            <h4 class="text-white text-lg font-semibold leading-tight">
              {{ item.title }}
            </h4>
            <p class="text-xs text-gray-200 line-clamp-2">{{ item.desc }}</p>
            <NuxtLink
              :href="item.url"
              target="_blank"
              rel="noopener"
              class="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white border border-white/40 rounded-full px-4 py-1 w-fit hover:bg-white hover:text-black transition"
            >
              {{ item.btn }}
              <span class="text-lg">→</span>
            </NuxtLink>
          </div>
        </div>
      </UCarousel>
    </div>

    <!-- CTA -->
    <div class="text-center max-w-2xl mx-auto">
      <NuxtLink
        to="/contacts"
        class="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-md font-medium transition"
      >
        {{ t("portfolio_page.cta") }}
        <Icon name="mdi-arrow-right" class="w-5 h-5" />
      </NuxtLink>
    </div>
  </section>
</template>
