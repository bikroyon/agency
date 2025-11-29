<script setup>
useHead({
  titleTemplate: "বাপ্পী · %s"
});

const route = useRoute();

const serverMeta = {
  ogImage: "/og-image.png",
  twitterImage: "/og-image.png",
  ogType: "website",
  ogLocale: "en_US",
  twitterCard: "summary",
  twitterCreator: "@abdullahbappy",
};

useSeoMeta({
  title: () => route.meta.title,
  description: () => route.meta.description,
  ogTitle: () => `Bappy · ${route.meta.title}`,
  ogImage: () => serverMeta.ogImage,
  twitterTitle: () => `Bappy · ${route.meta.title}`,
  ogDescription: () => route.meta.description,
  twitterDescription: () => route.meta.description,
  ogUrl: () => `https://abdulbasetbappy.vercel.app/${route.path}`,
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
