<template>
    <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <!-- Heading -->
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
                আমাদের <span class="text-rose-500">মেনেজমেন্টে</span> যা থাকছে
            </h2>
            <p class="mt-2 text-sm sm:text-lg">আপনার ওয়েবসাইটের নিরাপত্তা, আপডেট, ব্যাকআপ ও পারফরম্যান্স
                আমরা নিয়মিতভাবে দেখভাল করি — যেন আপনি নিশ্চিন্তে ব্যবসায় মনোযোগ দিতে পারেন।</p>
            <section class="py-8">
                <div
                    class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 border border-gray-300 dark:border-gray-700 rounded-2xl p-2 md:p-3">
                    <div v-for="(feature, index) in features" :key="index"
                        class="p-3 md:p-4 flex flex-col items-center text-center border-gray-300 dark:border-gray-700"
                        :class="[
                            // add top border if not in first row
                            index >= 3 ? 'md:border-t' : '',
                            // add left border if not first in the row
                            index % 3 !== 0 ? 'md:border-l' : '',
                        ]">
                        <div class="text-rose-500">
                            <Icon :name="feature.icon" class="w-8 h-8 md:w-12 md:h-12" />
                        </div>
                        <h3 class="text-lg md:text-xl font-semibold mb-2 leading-snug" v-html="feature.title" />
                        <p class="text-xs md:text-xs leading-relaxed">
                            {{ feature.description }}
                        </p>
                    </div>
                </div>
            </section>
            <!-- Buttons -->
            <div class="mt-6 flex justify-center gap-4 flex-wrap">
                <NuxtLink to="https://wa.me/+8801799568976"
                    class="bg-rose-500 text-xs sm:text-base flex items-center justify-center gap-2 text-white px-4 py-1.5 rounded-md hover:bg-rose-700 transition">
                    <Icon name="hugeicons:whatsapp" /> <span>যোগাযোগ করুন</span>
                </NuxtLink>
                <NuxtLink to="#pricing"
                    class="border text-xs sm:text-base flex items-center justify-center gap-2 border-rose-500 text-rose-500 px-4 py-1.5 rounded-md hover:bg-rose-100 transition">
                    <span>বিস্তারিত দেখুন</span>
                    <Icon name="hugeicons:arrow-down-double" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
const features = [
    {
        icon: 'mdi:video-outline',
        title: 'প্রিমিয়াম কোয়ালিটি',
        description:
            'আলহামদুলিল্লাহ্‌, অসংখ্য উদ্যোক্তার মূল্যবান রিভিউ আমাকে এই আত্মবিশ্বাস দিয়েছে—আমাদের ডিজাইন শুধু দৃষ্টিনন্দন নয়, বাস্তবে আপনার ব্যবসায় শক্তিশালী ইমপ্যাক্ট ফেলবে।',
    },
    {
        icon: 'mdi:download-box-outline',
        title: 'রেসপন্সিভ ডিজাইন',
        description:
            'বাংলাদেশে ৮০% এর বেশি ভিজিটর মোবাইল ব্যবহার করেন, তাই রেসপন্সিভ ডিজাইন ছাড়া সেলস ও ব্র্যান্ড ক্ষতিগ্রস্ত হয়। আমরা তৈরি করি মোবাইল-ফ্রেন্ডলি, উচ্চ কার্যকারি ল্যান্ডিং পেজ।',
    },
    {
        icon: 'mdi:check-bold',
        title: 'সার্ভার সাইড ট্রেকিং',
        description:
            'আমরা সার্ভার সাইড ট্র্যাকিং ও পিক্সেল সেটআপ করি, যাতে আপনি সম্পূর্ণ কাস্টমার ডাটা পান। সঠিক তথ্যের ভিত্তিতে কার্যকর মার্কেটিং করে রিটার্ন বাড়ান সহজেই।',
    },
    {
        icon: 'mdi:code-tags',
        title: 'সুপার ফাস্ট',
        description:
            'আর কোথাও পাবেন না! আমি আপনার ল্যান্ডিং পেজের স্পিড ৩ সেকেন্ডের নিচে নিয়ে আসব ফ্রীতে, যাতে দ্রুত লোড হয় ও কোনো কাস্টমার হারাবেন না।',
    },
    {
        icon: 'mdi:account-multiple-outline',
        title: 'ট্যাকনিক্যাল সাপোর্ট',
        description:
            'সাপোর্ট দেওয়া আমাদের দায়িত্ব। এজন্যই আমি আমাদের সকল ক্লায়েন্টকে একটি নন-টেকনিক্যাল প্রিমিয়াম কোর্স বিনামূল্যে দিয়ে থাকি, যা বেসিক ম্যানেজমেন্টে সাহায্য করে।',
    },
    {
        icon: 'mdi:playlist-play',
        title: 'সহজ ব্যবস্থাপনা',
        description:
            'আমাদের তৈরি ল্যান্ডিং পেজ এমনভাবে ডিজাইন করা হয় যা আপনি সহজেই ম্যানেজ করতে পারবেন, কোনো জটিলতা ছাড়াই। এতে সময় ও খরচ দুইই বাঁচে।',
    }
]
</script>

<style lang="scss" scoped></style>