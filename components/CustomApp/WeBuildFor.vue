<template>
  <section class="py-16">
    <div class="max-w-6xl mx-auto px-6">
      
      <!-- Heading -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold">
          আমরা যেসব <span class="text-rose-500">ইন্ডাস্ট্রির জন্য</span> সমাধান তৈরি করি
        </h2>
        <p class="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-lg">
          বিভিন্ন সেক্টরের জন্য কাস্টম ওয়েব অ্যাপ, অটোমেশন সিস্টেম এবং ডিজিটাল সলিউশন তৈরি করি।
        </p>
      </div>

      <!-- Grid Cards -->
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        <!-- Single Item -->
        <div 
          v-for="(item, index) in industries" 
          :key="index"
          class="p-6 bg-gray-50 dark:bg-slate-800/50 rounded-xl shadow hover:shadow-lg transition"
        >
          <div class="text-rose-500 text-3xl mb-3">
            <Icon :name="item.icon" />
          </div>
          <h3 class="text-lg font-semibold mb-1">{{ item.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            {{ item.description }}
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const industries = [
  {
    icon: "hugeicons:store-01",
    title: "ই-কমার্স ও অনলাইন শপ",
    description: "অর্ডার ম্যানেজমেন্ট, ইনভেন্টরি, পেমেন্ট ও অটোমেশনসহ সম্পূর্ণ কাস্টম সিস্টেম।"
  },
  {
    icon: "hugeicons:health",
    title: "হেলথকেয়ার & ক্লিনিক",
    description: "অ্যাপয়েন্টমেন্ট, পেশেন্ট ডাটা, রিপোর্টিং ও অটোমেটেড সলিউশন।"
  },
  {
    icon: "hugeicons:school",
    title: "শিক্ষা প্রতিষ্ঠান & কোচিং",
    description: "অনলাইন ক্লাস, স্টুডেন্ট ম্যানেজমেন্ট ও এক্সাম মডিউল।"
  },
  {
    icon: "hugeicons:delivery",
    title: "লজিস্টিক্স & কুরিয়ার সার্ভিস",
    description: "পার্সেল ট্র্যাকিং, ডেলিভারি রুট এবং অটোমেটেড বিলিং সিস্টেম।"
  },
  {
    icon: "hugeicons:restaurant",
    title: "রেস্টুরেন্ট & ক্লাউড কিচেন",
    description: "অর্ডার, কিচেন প্রিন্ট, স্টক ও ডেলিভারি সলিউশন।"
  },
  {
    icon: "hugeicons:chart-03",
    title: "কর্পোরেট & এজেন্সি",
    description: "ওয়ার্কফ্লো অটোমেশন, পোর্টাল এবং কাস্টম ড্যাশবোর্ড সিস্টেম।"
  }
];
</script>

<style scoped></style>
