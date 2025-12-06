<script setup lang="ts">
const whatsappNumber = "0881904015818"; // Replace with your number
const message = encodeURIComponent(
  "Hello! I want to chat with you about You services."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
</script>

<template>
  <!-- Floating WhatsApp Button -->
  <NuxtLink
    :to="whatsappLink"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 bg-rose-500 rounded-full shadow-lg hover:scale-110 transition-transform"
  >
    <!-- Ping animation -->
    <span
      class="absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75 animate-ping"
    ></span>
    <Icon name="hugeicons:whatsapp" class="w-8 h-8 text-white dark:text-white"/>
  </NuxtLink>
</template>

<style scoped>
/* Tailwind already has animate-ping */
</style>
