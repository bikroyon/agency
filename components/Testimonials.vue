<template>
  <section class="py-16 relative">
    <!-- Section Heading -->
    <div class="text-center max-w-2xl mb-10 mx-auto px-3">
      <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
        {{ t("testimonials.title") }}<span class="text-rose-500"> {{ t("testimonials.highlight") }}</span>
      </h2>
      <p class="mt-2 text-sm sm:text-lg">
        {{t("partners.subtitle")}}
      </p>
    </div>

    <!-- Content Wrapper -->
    <div class="flex flex-col gap-3 w-full">
      <UMarquee
        pause-on-hover
        :overlay="true"
        :ui="{ root: '[--duration:120s] [--gap:1rem]', content: 'w-auto py-1' }"
      >
        <UPageCard
          v-for="(testimonial, index) in testimonials"
          :key="index"
          variant="subtle"
          :description="testimonial.quote"
          :ui="{
            description:
              'before:content-[open-quote] after:content-[close-quote] line-clamp-3 text-xs sm:text-sm',
          }"
          class="w-48 sm:w-56 md:w-64 shrink-0"
        >
          <template #footer>
            <UUser
              v-bind="testimonial.user"
              size="md"
              :ui="{ description: 'line-clamp-1 text-xs sm:text-sm' }"
            />
          </template>
        </UPageCard>
      </UMarquee>

      <UMarquee
        pause-on-hover
        reverse
        scrollamount="8"
        :overlay="true"
        :ui="{ root: '[--duration:120s] [--gap:1rem]', content: 'w-auto py-1' }"
      >
        <UPageCard
          v-for="(testimonial, index) in testimonials"
          :key="index"
          variant="subtle"
          :description="testimonial.quote"
          :ui="{
            description:
              'before:content-[open-quote] after:content-[close-quote] line-clamp-3 text-xs sm:text-sm',
          }"
          class="w-48 sm:w-56 md:w-64 shrink-0"
        >
          <template #footer>
            <UUser
              v-bind="testimonial.user"
              size="md"
              :ui="{ description: 'line-clamp-1 text-xs sm:text-sm' }"
            />
          </template>
        </UPageCard>
      </UMarquee>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import type { UserProps } from "@nuxt/ui";

const testimonials: { user: UserProps; quote: string }[] = [
  {
    user: {
      name: "রহিম উদ্দিন",
      description: "ব্যবসায়ী",
      avatar: { src: "https://i.pravatar.cc/80?img=1", loading: "lazy" },
    },
    quote:
      "Bikroyon-এর Laravel ডেভেলপমেন্ট সেবা অসাধারণ! আমাদের ব্যবসার ওয়েবসাইট এখন অনেক দ্রুত এবং প্রফেশনাল লুক পাচ্ছে।",
  },
  {
    user: {
      name: "Fatima Akter",
      description: "Startup Founder",
      avatar: { src: "https://i.pravatar.cc/80?img=2", loading: "lazy" },
    },
    quote:
      "I am really impressed with Bikroyon. Their landing page design completely transformed our website look!",
  },
  {
    user: {
      name: "মোঃ আনিসুল হক",
      description: "ফ্রিল্যান্সার",
      avatar: { src: "https://i.pravatar.cc/80?img=3", loading: "lazy" },
    },
    quote:
      "WordPress ওয়েবসাইট ডিজাইন করতে Bikroyon-কে বেছে নেওয়া আমাদের সেরা সিদ্ধান্ত। প্রতিটি পেজ সুন্দর এবং রেসপন্সিভ।",
  },
  {
    user: {
      name: "Joynal Abedin",
      description: "Entrepreneur",
      avatar: { src: "https://i.pravatar.cc/80?img=4", loading: "lazy" },
    },
    quote:
      "Bikroyon’s team delivered my Laravel project on time with perfect quality. Highly recommend!",
  },
  {
    user: {
      name: "সুমি রহমান",
      description: "ব্লগার",
      avatar: { src: "https://i.pravatar.cc/80?img=5", loading: "lazy" },
    },
    quote:
      "আমাদের নতুন ব্লগ সাইট Bikroyon দিয়ে বানিয়েছি। ডিজাইনটি একদম পছন্দের মতো এবং মোবাইলে একদম সুন্দর দেখাচ্ছে।",
  },
  {
    user: {
      name: "Tanvir Hossain",
      description: "Digital Marketer",
      avatar: { src: "https://i.pravatar.cc/80?img=6", loading: "lazy" },
    },
    quote:
      "The landing page created by Bikroyon boosted our lead generation significantly. Excellent work!",
  },
  {
    user: {
      name: "আফসানা নাসরিন",
      description: "সোশ্যাল মিডিয়া ম্যানেজার",
      avatar: { src: "https://i.pravatar.cc/80?img=7", loading: "lazy" },
    },
    quote:
      "Bikroyon-এর ওয়ার্ডপ্রেস ডিজাইন সত্যিই চমৎকার। ব্যবহারকারীর অভিজ্ঞতা খুব ভালো এবং সহজ।",
  },
  {
    user: {
      name: "Rafiqur Rahman",
      description: "Business Owner",
      avatar: { src: "https://i.pravatar.cc/80?img=8", loading: "lazy" },
    },
    quote:
      "Bikroyon delivered a stunning Laravel web application. Their attention to detail is top-notch!",
  },
  {
    user: {
      name: "মাহফুজা বেগম",
      description: "স্টার্টআপ উদ্যোক্তা",
      avatar: { src: "https://i.pravatar.cc/80?img=9", loading: "lazy" },
    },
    quote:
      "আমাদের e-commerce সাইট Bikroyon দিয়ে বানিয়েছি। ডিজাইন এবং ফাংশনালিটি দুটোই অসাধারণ।",
  },
  {
    user: {
      name: "Sabbir Khan",
      description: "Freelance Developer",
      avatar: { src: "https://i.pravatar.cc/80?img=10", loading: "lazy" },
    },
    quote:
      "Working with Bikroyon was smooth. Their team is professional and very responsive.",
  },
  {
    user: {
      name: "মরিয়ম শাহীন",
      description: "Entrepreneur",
      avatar: { src: "https://i.pravatar.cc/80?img=11", loading: "lazy" },
    },
    quote:
      "Bikroyon-এর ল্যান্ডিং পেজ ডিজাইন আমাদের ব্যবসার জন্য অনেক সাহায্য করেছে। UI এবং UX অসাধারণ।",
  },
  {
    user: {
      name: "Anik Hossain",
      description: "Tech Blogger",
      avatar: { src: "https://i.pravatar.cc/80?img=12", loading: "lazy" },
    },
    quote:
      "Bikroyon’s WordPress websites are clean and easy to manage. Saved me so much time!",
  },
  {
    user: {
      name: "মোহাম্মদ কামরুল",
      description: "ফ্রিল্যান্সার",
      avatar: { src: "https://i.pravatar.cc/80?img=13", loading: "lazy" },
    },
    quote:
      "Laravel ওয়েব অ্যাপ ডেভেলপমেন্টে Bikroyon সত্যিই অসাধারণ। আমি সম্পূর্ণ সন্তুষ্ট।",
  },
  {
    user: {
      name: "Shamim Reza",
      description: "Startup Founder",
      avatar: { src: "https://i.pravatar.cc/80?img=14", loading: "lazy" },
    },
    quote:
      "The landing page Bikroyon designed increased our conversions by 40%. Excellent design!",
  },
  {
    user: {
      name: "নাদিয়া ফেরদৌস",
      description: "ডিজাইনার",
      avatar: { src: "https://i.pravatar.cc/80?img=15", loading: "lazy" },
    },
    quote:
      "Bikroyon-এর ডিজাইন দেখে আমাদের ক্লায়েন্টরা মুগ্ধ। সবকিছু খুব প্রফেশনাল।",
  },
  {
    user: {
      name: "Rahat Hossain",
      description: "Entrepreneur",
      avatar: { src: "https://i.pravatar.cc/80?img=16", loading: "lazy" },
    },
    quote:
      "Bikroyon built a fast and responsive Laravel application for us. Really impressed!",
  },
  {
    user: {
      name: "তাসনিমা আক্তার",
      description: "ব্লগার",
      avatar: { src: "https://i.pravatar.cc/80?img=17", loading: "lazy" },
    },
    quote:
      "WordPress সাইটে Bikroyon-এর কাজ অত্যন্ত পেশাদার। ডিজাইন এবং ফাংশনালিটি একদম চমৎকার।",
  },
  {
    user: {
      name: "Ehsan Karim",
      description: "Freelance Developer",
      avatar: { src: "https://i.pravatar.cc/80?img=18", loading: "lazy" },
    },
    quote:
      "Bikroyon’s landing page design really helped our SaaS product look professional.",
  },
  {
    user: {
      name: "মোঃ শরিফুল ইসলাম",
      description: "ব্যবসায়ী",
      avatar: { src: "https://i.pravatar.cc/80?img=19", loading: "lazy" },
    },
    quote:
      "Bikroyon-এর ওয়ার্ডপ্রেস ডিজাইন আমাদের ব্যবসার জন্য সঠিক। ক্লায়েন্টদের অনেক প্রশংসা পেয়েছি।",
  },
  {
    user: {
      name: "Tania Sultana",
      description: "Startup Founder",
      avatar: { src: "https://i.pravatar.cc/80?img=20", loading: "lazy" },
    },
    quote:
      "The Laravel web app delivered by Bikroyon is fast, clean, and very easy to maintain.",
  },
];
</script>
