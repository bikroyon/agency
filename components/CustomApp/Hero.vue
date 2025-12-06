<template>
  <section class="py-16 pt-8 relative overflow-hidden">
    <!-- Background Pattern -->
      <div
        class="-z-10 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
      ></div>
      <div
        class="-z-10 absolute bottom-0 left-0 right-0 top-0 h-full opacity-85 w-full bg-[radial-gradient(circle_500px_at_50%_300px,#fbfbfb36,#000)]"
      ></div>


    <div class="max-w-6xl mx-auto px-4 pt-12 text-center">
      <!-- Heading -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
        আপনার ব্যবসার জন্য একটি
        <span class="text-rose-500">কাস্টম ওয়েব অ্যাপ</span>— যা শুধু
        ফিচারসমৃদ্ধ নয়, বরং পারফরম্যান্স-ড্রিভেন এবং স্কেলেবল।
      </h1>

      <!-- Description -->
      <p class="mt-4 text-sm sm:text-lg text-gray-700 dark:text-gray-300">
        আমরা তৈরি করি আপনার ব্যবসার চাহিদা অনুযায়ী কাস্টম ওয়েব অ্যাপ্লিকেশন—
        Laravel, Node.js, Vue.js, Nuxt.js ব্যবহার করে। দ্রুত, নিরাপদ, স্কেলেবল
        এবং অটোমেশন–ফোকাসড সমাধান যা আপনার ব্যবসাকে ডিজিটাল প্রতিযোগিতায় এগিয়ে
        রাখে।
      </p>

      <!-- CTA Buttons -->
      <div class="mt-6 flex justify-center gap-4 flex-wrap">
        <NuxtLink
          to="https://wa.me/+8801799568976"
          class="bg-rose-500 text-xs sm:text-base flex items-center justify-center gap-2 text-white px-4 py-1.5 rounded-md hover:bg-rose-700 transition"
        >
          <Icon name="hugeicons:whatsapp" />
          <span>ফ্রি কনসালটেশন নিন</span>
        </NuxtLink>

        <NuxtLink
          to="#features"
          class="border text-xs sm:text-base flex items-center justify-center gap-2 border-rose-500 text-rose-500 px-4 py-1.5 rounded-md hover:bg-rose-100 hover:dark:bg-slate-800 transition"
        >
          <span>ফিচার দেখুন</span>
          <Icon name="hugeicons:arrow-down-double" />
        </NuxtLink>
      </div>

      <!-- YouTube Video -->
      <div class="mt-10 flex items-center justify-center">
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/6DAG3iFrdJk?si=KOOuL45HtPdRxVhJ"
          title="YouTube video player"
          frameborder="0"
          class="rounded-lg shadow-2xl w-fit h-auto md:w-[660px] md:h-[415px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
