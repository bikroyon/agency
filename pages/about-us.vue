<script setup lang="ts">
definePageMeta({
  title: "About Us | Professional Web Development Agency",
  description:
    "Learn more about our web development agency specializing in WordPress, Laravel, and Nuxt.js. We deliver scalable, business-focused digital solutions worldwide.",
});

const { t } = useI18n({ useScope: "global" });
// Social links
const socialLinks = [
  { href: "#", icon: "ic:round-facebook" },
  { href: "#", icon: "tabler:brand-youtube-filled" },
  { href: "#", icon: "tabler:brand-whatsapp-filled" },
  { href: "#", icon: "mdi:facebook-messenger" },
];
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
    <section class="py-10">
      <div class="  gap-4 md:gap-8 lg:gap-16 flex flex-col md:flex-row items-center justify-between flex-col-reverse">
        <!-- Left Side: About Text -->
        <div class="p-2 sm:p-0">
          <h2 class="text-3xl sm:text-4xl font-bold leading-snug">
            {{ t("about_page.heroSection.title") }}
            <span class="text-rose-500">{{
              t("about_page.heroSection.highlight")
            }}</span>
          </h2>

          <p class="mt-2 text-gray-700 text-sm md:text-base dark:text-gray-300">
            {{ t("about_page.heroSection.paragraphs1") }}
          </p>

          <p class="mt-2 text-gray-700  text-sm md:text-base dark:text-gray-300">
            {{ t("about_page.heroSection.paragraphs2") }}
          </p>

          <p class="mt-2 text-gray-700  text-sm md:text-base dark:text-gray-300">
            {{ t("about_page.heroSection.paragraphs3") }}
          </p>

          <!-- Mission Statement -->
          <div class="mt-4">
            <h3 class="text-2xl font-bold mb-2">
              {{ t("about_page.heroSection.missionTitle") }}
            </h3>
            <p class="text-gray-700  text-sm md:text-base dark:text-gray-300">
              {{ t("about_page.heroSection.missionParagraph") }}
            </p>
          </div>
        </div>

        <!-- Right Side: Illustration / Image + Social Media -->
        <div class="flex flex-col justify-center items-center px-8" >
          <img
            src="../public/teams/team.webp"
            alt="Bikroyon Agency"
            class="rounded-lg shadow-lg w-80 h-72 object-cover object-top"
          />

          <!-- Social Icons -->
          <div class="flex items-center gap-4 pt-2">
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
    <section class="py-16 px-2 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto text-center">
        <!-- Main Heading -->
        <h2 class="text-3xl sm:text-4xl font-bold">
          {{ t("about_page.why_choose.title_first")
          }}<span class="text-rose-500">{{
            t("about_page.why_choose.title_highlight")
          }}</span>
          {{ t("about_page.why_choose.title_last") }}
        </h2>
        <p class="mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          {{ t("about_page.why_choose.description") }}
        </p>

        <!-- Sub-heading -->
        <h3
          class="mt-8 text-base sm:text-2xl font-semibold text-gray-800 dark:text-gray-100"
        >
          {{ t("about_page.why_choose.subtitle") }}
        </h3>

        <!-- Benefits List -->
        <ul class="mt-2 sm:mt-6 space-y-2 text-left sm:text-left">
          <li
            v-for="(item, index) in benefits"
            :key="index"
            class="flex items-start gap-3"
          >
            <Icon :name="item.icon" class="text-rose-500 w-6 h-6 mt-1" />
            <div>
              <strong class="font-semibold text-sm sm:text-base">{{ item.strong }}</strong>
              <p class="text-xs sm:text-sm">{{ item.text }}</p>
            </div>
          </li>
        </ul>

        <!-- CTA -->
        <div class="mt-4 sm:mt-16">
          <NuxtLink
            to="/contacts"
            class="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-2.5 py-1.5 sm:px-6 sm:py-3 rounded-md font-medium transition text-sm sm:text-base"
          >
            {{ t("about_page.why_choose.cta") }}
            <Icon name="mdi-arrow-right" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <Partners />
    <Team />
    <Testimonials />
    <Banner />
  </div>
</template>

<style scoped></style>
