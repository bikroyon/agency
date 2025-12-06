<template>
  <section class="py-16">
    <div class="max-w-5xl mx-auto px-4">

      <!-- Heading -->
      <div class="text-center mb-10">
        <h2 class="text-3xl sm:text-4xl font-bold">
          কেন আমাদের <span class="text-rose-500">বেছে নিবেন?</span>
        </h2>
        <p class="mt-3 text-gray-700 dark:text-gray-300 text-sm sm:text-lg">
          আমরা শুধু ওয়েব অ্যাপ তৈরি করি না — আপনার ব্যবসাকে স্কেল, অটোমেট ও দ্রুত বৃদ্ধি করার সমাধান তৈরি করি।
        </p>
      </div>

      <!-- List (No Cards) -->
      <ul class="space-y-6">
        <li
          v-for="(item, index) in whyChoose"
          :key="index"
          class="flex items-start gap-3"
        >
          <Icon
            :name="item.icon"
            class="text-rose-500 w-6 h-6 mt-1"
          />

          <div>
            <strong class="font-semibold block text-gray-900 dark:text-gray-100">
              {{ item.title }}
            </strong>
            <span class="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              {{ item.description }}
            </span>
          </div>
        </li>
      </ul>

    </div>
  </section>
</template>

<script setup>
const whyChoose = [
  {
    icon: "hugeicons:shield-key",
    title: "এন্টারপ্রাইজ লেভেল সিকিউরিটি",
    description:
      "ডেটা এনক্রিপশন, সিকিউর সার্ভার, রোল-ম্যানেজমেন্টসহ সর্বোচ্চ সিকিউরিটি নিশ্চিত করে অ্যাপ তৈরি করি।"
  },
  {
    icon: "hugeicons:settings-02",
    title: "১০০% কাস্টম সলিউশন",
    description:
      "আপনার ব্যবসার উপযোগী কাস্টম ফিচার, ড্যাশবোর্ড, অটোমেশন এবং API ইন্টিগ্রেশন যুক্ত করা হয়।"
  },
  {
    icon: "hugeicons:dashboard-speed-01",
    title: "সুপার ফাস্ট পারফরম্যান্স",
    description:
      "অপ্টিমাইজড কোড, ক্যাশিং ও লাইটওয়েট আর্কিটেকচার ব্যবহার করে দ্রুত ও স্মুথ পারফরম্যান্স নিশ্চিত করি।"
  },
  {
    icon: "hugeicons:agreement-02",
    title: "দীর্ঘমেয়াদী সাপোর্ট ও মেইনটেন্যান্স",
    description:
      "লঞ্চের পরেও নিয়মিত আপডেট, বাগ ফিক্স, মনিটরিং ও টেকনিক্যাল সাপোর্ট প্রদান করি।"
  },
  {
    icon: "hugeicons:time-02",
    title: "সময়মতো প্রজেক্ট ডেলিভারি",
    description:
      "এজাইল মেথডোলজি, স্প্রিন্ট ও টাইমলাইনে কঠোরভাবে কাজ করি যাতে প্রতিটি প্রজেক্ট সময়মতো শেষ হয়।"
  },
  {
    icon: "hugeicons:activity-02",
    title: "ROI ফোকাসড ডেভেলপমেন্ট",
    description:
      "আপনার ব্যবসার স্কেলিং, অটোমেশন ও খরচ সেভিং-এর দিকে নজর রেখে সলিউশন তৈরি করি।"
  }
];
</script>

<style scoped></style>
