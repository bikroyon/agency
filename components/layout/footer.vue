<template>
  <footer class="w-full border-t border-gray-800 bg-[#0A1120] py-4 px-4">
    <div
      class="container flex flex-col md:flex-row items-center justify-between gap-1.5 sm:gap-4 mx-auto"
    >
      <!-- Left Side -->
      <div class="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
        <span>কপিরাইট ©2025</span>
        <a href="#" class="font-semibold text-white hover:underline"
          >আব্দুল বাছেত বাপ্পী</a
        >
        <span>সর্বস্বত্ব সংরক্ষিত।</span>
      </div>

      <!-- Middle Links -->
      <div
        class="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-400"
      >
        <NuxtLink to="/" class="hover:text-white"> হোম</NuxtLink>
        <NuxtLink to="/landing-page" class="hover:text-white">
          ল্যান্ডিং পেজ ডিজাইন
        </NuxtLink>
        <NuxtLink to="/ecommerce-website" class="hover:text-white">
          ই-কমার্স ওয়েবসাইট
        </NuxtLink>
        <NuxtLink
          to="/portfolio"
          class="hover:text-white flex items-center gap-1"
        >
          পোর্টফোলিও
        </NuxtLink>
        <NuxtLink
          to="contacts"
          class="hover:text-white flex items-center gap-1"
        >
          যোগাযোগ
        </NuxtLink>
      </div>

      <!-- Social Icons -->
      <div class="flex items-center gap-4 text-gray-400">
        <NuxtLink href="#" class="hover:text-white">
          <Icon name="ic:round-facebook" class="w-5 h-5" />
        </NuxtLink>
        <NuxtLink href="#" class="hover:text-white">
          <Icon name="tabler:brand-youtube-filled" class="w-5 h-5" />
        </NuxtLink>
        <NuxtLink href="#" class="hover:text-white">
          <Icon name="tabler:brand-whatsapp-filled" class="w-5 h-5" />
        </NuxtLink>
        <NuxtLink href="#" class="hover:text-white">
          <Icon name="mdi:facebook-messenger" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
// NuxtUI Icon Example
</script>
