import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Bappy | ওয়েব ডিজাইন ও ডেভেলপমেন্ট সার্ভিস",
      htmlAttrs: {
        lang: "bn",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "author", content: "Abdul Baset Bappy (@abdulbasetbappy)" },
        { name: "robots", content: "index, follow" },
        // ✅ SEO Meta
        {
          name: "title",
          content: "Bappy | ওয়েব ডিজাইন ও ডেভেলপমেন্ট সার্ভিস",
        },
        {
          name: "description",
          content:
            "ওয়েবসাইট, ই-কমার্স, ল্যান্ডিং পেজ এবং কাস্টম অ্যাপ ডেভেলপমেন্ট সেবা সহজে এবং দক্ষতার সাথে পান।",
        },
        {
          name: "keywords",
          content:
            "ওয়েব ডিজাইন, ওয়েব ডেভেলপমেন্ট, লারাভেল, ভিউজেএস, ওয়ার্ডপ্রেস, ই-কমার্স",
        },
        { name: "author", content: "Bappy Web Studio" },

        // ✅ Open Graph for Facebook & others
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://yourdomain.com" },
        {
          property: "og:title",
          content: "Bappy | ওয়েব ডিজাইন ও ডেভেলপমেন্ট সার্ভিস",
        },
        {
          property: "og:description",
          content: "ওয়েবসাইট, ই-কমার্স এবং কাস্টম অ্যাপ ডেভেলপমেন্ট সেবা।",
        },
        { property: "og:image", content: "https://yourdomain.com/preview.jpg" },

        // ✅ Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://yourdomain.com" },
        {
          name: "twitter:title",
          content: "Bappy | ওয়েব ডিজাইন ও ডেভেলপমেন্ট সার্ভিস",
        },
        {
          name: "twitter:description",
          content: "ওয়েবসাইট, ই-কমার্স এবং কাস্টম অ্যাপ ডেভেলপমেন্ট সেবা।",
        },
        {
          name: "twitter:image",
          content: "https://yourdomain.com/preview.jpg",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/logo_180x180.png",
        },
        {
          rel: "icon",
          sizes: "32x32",
          href: "/logo_32x32.png",
        },
        {
          rel: "icon",
          sizes: "16x16",
          href: "/logo_16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
      script: [
        {
          type: "text/partytown",
          src: "https://bikroyon.com/",
          async: true,
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  components: [{ path: "~/components", pathPrefix: true }],
  modules: [
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "nuxt-lottie",
    "@nuxtjs/partytown",
    "@nuxt/icon",
    "@nuxtjs/i18n",
  ],
  i18n: {
    baseUrl: "https://bikroyon.com",
    strategy: "prefix",
    defaultLocale: "bn",
    locales: [
      { code: "bn", iso: "bn-BD", file: "bn.json", name: "বাংলা" },
      { code: "en", iso: "en-EN", file: "en.json", name: "English" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    vueI18n: "./i18n.config.ts",
  },

  css: ["~/assets/css/main.css"],
  lottie: {
    componentName: "Lottie",
    lottieFolder: "/assets/lottie",
  },
  ui: {
    colorMode: true,
    
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
