<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });
// Social links
const socialLinks = [
  { href: "#", icon: "ic:round-facebook" },
  { href: "#", icon: "tabler:brand-youtube-filled" },
  { href: "#", icon: "tabler:brand-whatsapp-filled" },
  { href: "#", icon: "mdi:facebook-messenger" },
];
const cards = computed(() => [
  {
    icon: "mdi:web",
    title: t("about_page.skills.cards.wordpress.title"),
    description: t("about_page.skills.cards.wordpress.desc"),
  },
  {
    icon: "mdi-palette",
    title: t("about_page.skills.cards.webapp.title"),
    description: t("about_page.skills.cards.webapp.desc"),
  },
  {
    icon: "mdi-robot",
    title: t("about_page.skills.cards.ai.title"),
    description: t("about_page.skills.cards.ai.desc"),
  },
  {
    icon: "mdi-shield-check",
    title: t("about_page.skills.cards.security.title"),
    description: t("about_page.skills.cards.security.desc"),
  },
]);
const benefits = computed(() => [
  {
    icon: "mdi-check-circle-outline",
    strong: t("about_page.why_choose.benefits.0.strong"),
    text: t("about_page.why_choose.benefits.0.text"),
  },
  {
    icon: "mdi-check-circle-outline",
    strong: t("about_page.why_choose.benefits.1.strong"),
    text: t("about_page.why_choose.benefits.1.text"),
  },
  {
    icon: "mdi-check-circle-outline",
    strong: t("about_page.why_choose.benefits.2.strong"),
    text: t("about_page.why_choose.benefits.2.text"),
  },
  {
    icon: "mdi-check-circle-outline",
    strong: t("about_page.why_choose.benefits.3.strong"),
    text: t("about_page.why_choose.benefits.3.text"),
  },
  {
    icon: "mdi-check-circle-outline",
    strong: t("about_page.why_choose.benefits.4.strong"),
    text: t("about_page.why_choose.benefits.4.text"),
  },
  {
    icon: "mdi-check-circle-outline",
    strong: t("about_page.why_choose.benefits.5.strong"),
    text: t("about_page.why_choose.benefits.5.text"),
  },
]);
</script>
<template>
  <div class="mx-auto container p-2 md:p-16 md:pt-0">
    <section class="pb-10">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 items-center">
        <!-- Left Side: About Text -->
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold leading-snug">
            {{ t("about_page.heroSection.title") }}
            <span class="text-rose-500">{{
              t("about_page.heroSection.highlight")
            }}</span>
          </h2>

          <p class="mt-2 text-gray-700 dark:text-gray-300">
            {{ t("about_page.heroSection.paragraphs1") }}
          </p>

          <p class="mt-2 text-gray-700 dark:text-gray-300">
            {{ t("about_page.heroSection.paragraphs2") }}
          </p>

          <p class="mt-2 text-gray-700 dark:text-gray-300">
            {{ t("about_page.heroSection.paragraphs3") }}
          </p>

          <!-- Mission Statement -->
          <div class="mt-4">
            <h3 class="text-2xl font-bold mb-2">
              {{ t("about_page.heroSection.missionTitle") }}
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              {{ t("about_page.heroSection.missionParagraph") }}
            </p>
          </div>
        </div>

        <!-- Right Side: Illustration / Image + Social Media -->
        <div class="flex flex-col justify-center items-center">
          <img
            src="https://placehold.co/500x400?text=Bikroyon+Agency"
            alt="Bikroyon Agency"
            class="rounded-lg shadow-lg"
          />

          <!-- Social Icons -->
          <div class="flex items-center gap-4 pt-6">
            <NuxtLink
              v-for="(social, index) in socialLinks"
              :key="index"
              :to="social.href"
              class="hover:text-white hover:bg-rose-600 p-2 rounded-full flex items-center justify-center"
            >
              <Icon :name="social.icon" class="w-7 h-7" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section
      class="py-16 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 rounded-4xl"
    >
      <div class="text-center">
        <h2 class="text-3xl sm:text-4xl font-bold">
          {{ t("about_page.skills.heading") }}
          <span class="text-rose-500">{{
            t("about_page.skills.heading_highlight")
          }}</span>
        </h2>
        <p class="mt-4 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {{ t("about_page.skills.subtitle") }}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div
            v-for="(card, i) in cards"
            :key="i"
            class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition transform hover:-translate-y-1"
          >
            <Icon :name="card.icon" class="text-rose-500 w-8 h-8 mb-2" />

            <h3 class="font-semibold text-lg">
              {{ card.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <Tools />
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto text-center">
        <!-- Main Heading -->
        <h2 class="text-3xl sm:text-4xl font-bold">
          {{ t("about_page.why_choose.title_first")
          }}<span class="text-rose-500">{{
            t("about_page.why_choose.title_highlight")
          }}</span>
          {{ t("about_page.why_choose.title_last") }}
        </h2>
        <p class="mt-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
          {{ t("about_page.why_choose.description") }}
        </p>

        <!-- Sub-heading -->
        <h3
          class="mt-8 text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100"
        >
          {{ t("about_page.why_choose.subtitle") }}
        </h3>

        <!-- Benefits List -->
        <ul class="mt-6 space-y-2 text-left sm:text-left">
          <li
            v-for="(item, index) in benefits"
            :key="index"
            class="flex items-start gap-3"
          >
            <Icon :name="item.icon" class="text-rose-500 w-6 h-6 mt-1" />
            <div>
              <strong class="font-semibold">{{ item.strong }}</strong>
              {{ item.text }}
            </div>
          </li>
        </ul>

        <!-- CTA -->
        <div class="mt-10">
          <NuxtLink
            to="/contacts"
            class="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-md font-medium transition"
          >
            {{ t("about_page.why_choose.cta") }}
            <Icon name="mdi-arrow-right" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <Partners />
    <Timeline />
    <Team />
    <Testimonials />
    <Banner />
  </div>
</template>

<style scoped></style>
