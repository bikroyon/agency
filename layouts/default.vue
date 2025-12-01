<script setup>
useHead({
  titleTemplate: "Bikroyon · %s"
});

const route = useRoute();

const serverMeta = {
  ogImage: "/og-image.png",
  twitterImage: "/og-image.png",
  ogType: "website",
  ogLocale: "en_US",
  twitterCard: "summary",
  twitterCreator: "@bikroyon",
};

useSeoMeta({
  title: () => route.meta.title,
  description: () => route.meta.description,
  ogTitle: () => `Bikroyon · ${route.meta.title}`,
  ogImage: () => serverMeta.ogImage,
  twitterTitle: () => `Bikroyon · ${route.meta.title}`,
  ogDescription: () => route.meta.description,
  twitterDescription: () => route.meta.description,
  ogUrl: () => `https://bikroyon.com/${route.path}`,
  ...serverMeta
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <LayoutHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
