<template>
    <div class="">
        <!-- Section Heading -->
        <div class="text-center mb-4 sm:mb-10">
            <h2 class="text-3xl md:text-4xl font-bold">
                আমাদের <span class="text-rose-500"> পোর্টফোলিও</span>
            </h2>
            <p class="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-2">
                আমি সবসময় চেষ্টা করি ক্লায়েন্টদের সর্বোচ্চ মানের সার্ভিস দিতে। আলহামদুলিল্লাহ, এই ধারাবাহিকতা আমি ২০২২ সাল থেকে বজায় রেখেছি।
            </p>
        </div>

        <!-- Tabs Navigation -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4">
            <div v-for="(tab, index) in tabs" :key="index" @click="changeTab(index)" :class="[
                'cursor-pointer p-2 sm:p-4 rounded-lg w-auto shadow transition duration-300',
                currentTab === index ? 'bg-rose-50 dark:bg-slate-800 border border-rose-200 dark:border-slate-700 shadow dark:shadow-slate-950 shadow-rose-300' : 'border border-rose-300 shadow shadow-rose-300 dark:shadow-slate-950 dark:border-slate-700 hover:bg-rose-50 hover:dark:bg-slate-900'
            ]">
                <div class="flex items-start gap-1 sm:gap-3">
                    <Icon :name="tab.icon" class="text-lg sm:text-2xl text-rose-600" />
                    <div>
                        <h4 class="font-bold text-xs sm:text-base">{{ tab.title }}</h4>
                        <p class="text-xs sm:text-sm text-gray-500">{{ tab.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Animated Content -->
        <div ref="tabContent" class="overflow-hidden p-2 md:p-4 pt-0">
            <HomeTabContent :courses="tabs[currentTab].courses" />
            <!-- See More Button -->
            <div v-if="tabs[currentTab].button" class="mt-8 text-center">
                <NuxtLink :to="tabs[currentTab].button.link"
                    class="inline-flex justify-center items-center gap-2 bg-rose-500 dark:bg-rose-600 hover:bg-rose-500 hover:dark:bg-rose-700 text-white px-6 py-2 sm:py-3 rounded-lg">
                    {{ tabs[currentTab].button.title }}
                     <Icon name="hugeicons:arrow-right-02"/>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import gsap from 'gsap'
const currentTab = ref(0)
const tabContent = ref(null)
const tabs = [
    {
        title: 'ল্যান্ডিং পেইজ ডিজাইন',
        description: '৩০০+ কমপ্লিট · ৩ রানিং',
        icon: 'hugeicons:ai-web-browsing',
        button: {
            title: 'আরও দেখুন',
            link: '/portfolio'
        },
        courses: [
            {
                title: 'আম বিক্রির ল্যান্ডিং পেইজ',
                image: 'https://placehold.co/400',
                tags: ['JavaScript', 'MongoDB', 'React'],
                description: 'This items is related to Landing Page. i can say more about it'
            },
            {
                title: 'React Native App Dev',
                image: 'https://placehold.co/400',
                tags: ['Mobile', 'React', 'Native'],
            },
            {
                title: 'Full Stack JS (MERN)',
                image: 'https://placehold.co/400',
                tags: ['JavaScript', 'MongoDB', 'React'],
            },
        ],
    },
    {
        title: 'ই-কমার্স ওয়েবসাইট',
        description: '৫০+ কমপ্লিট · ২ রানিং',
        icon: 'hugeicons:activity-04',
        button: {
            title: 'আরও দেখুন',
            link: '/portfolio'
        },
        courses: [
            {
                title: 'UX/UI Design Bootcamp',
                image: 'https://placehold.co/400',
                tags: ['Design', 'Figma', 'UX'],
            },
        ],
    },
    {
        title: 'কাষ্টম ওয়েবসাইট',
        description: '১২ কমপ্লিট · ১ রানিং',
        icon: 'hugeicons:ai-beautify',
        button: {
            title: 'আরও দেখুন',
            link: '/portfolio'
        },
        courses: [
            {
                title: 'Big Data with Spark',
                image: 'https://placehold.co/400',
                tags: ['Big Data', 'Spark', 'ETL'],
            },
        ],
    },
        {
        title: 'সোশ্যাল মিডিয়া মার্কেটিং',
        description: '৩০ কমপ্লিট · ৪ রানিং',
        icon: 'hugeicons:ai-voice',
        button: {
            title: 'আরও দেখুন',
            link: '/portfolio'
        },
        courses: [
            {
                title: 'Digital Marketing',
                image: 'https://placehold.co/400',
                tags: ['SEO', 'Ads', 'Strategy'],
            },
        ],
    },
]

function changeTab(index) {
    if (currentTab.value === index) return
    gsap.fromTo(tabContent.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4 })
    currentTab.value = index
}
</script>
