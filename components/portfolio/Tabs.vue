<template>
    <div>
        <!-- Section Heading -->
        <div class="text-center mb-6">
            <h2 class="text-3xl md:text-4xl font-bold">
                আমাদের কিছু <span class="text-rose-500">কাজ</span>
            </h2>
            <p class="mt-2">
                আমি সবসময় চেষ্টা করি একটা ভালো মানের সার্ভিস ক্লাইন্টদের দিতে। আলহামদুলিল্লাহ্‌ এই ধারাবাহিকতা আমি ২০২০
                সাল থেকে ধরে রেখেছি
            </p>
        </div>

        <!-- Tabs Navigation -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4">
            <div v-for="(tab, index) in tabs" :key="index" @click="changeTab(index)" :class="[
                'cursor-pointer p-2 sm:p-4 rounded-lg w-auto shadow transition duration-300',
                currentTab === index ? 'bg-rose-100 dark:bg-slate-800 border border-rose-300 dark:border-slate-700 shadow-md' : 'border border-slate-300 dark:border-slate-700 hover:bg-slate-50 hover:dark:bg-slate-900'
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
        <div ref="tabContent" class="overflow-hidden p-8 pt-0">
            <PortfolioTabContent :courses="tabs[currentTab].courses" />
        </div>
        <!-- Buttons -->
        <div class="flex justify-center items-center pb-8 gap-3">
            <NuxtLink to="/contacts"
                class="flex justify-center items-center gap-2 bg-rose-600 text-white px-4 py-2 text-sm rounded hover:bg-rose-700">
                <span>যোগাযোগ করুন</span>
                <Icon name="hugeicons:contact-book" class="h-4 w-4" />
            </NuxtLink>
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
        title: 'Our Landing Pages',
        description: '৩০০+ কমপ্লিট · ৩ রানিং',
        icon: 'mdi:web',
        button: {
            title: 'See More',
            link: '#'
        },
        courses: [
            {
                title: 'Full Stack JS (MERN)',
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
            {
                title: 'React Native App Dev',
                image: 'https://placehold.co/400',
                tags: ['Mobile', 'React', 'Native'],
            },
        ],
    },
    {
        title: 'E-Commerce Website',
        description: '৫০+ কমপ্লিট · ১ রানিং',
        icon: 'mdi:lightbulb-on-outline',
        button: {
            title: 'See More',
            link: '#'
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
        title: 'Custom Web App',
        description: '১ কমপ্লিট · ১ রানিং',
        icon: 'mdi:briefcase-outline',
        button: {
            title: 'See More',
            link: '#'
        },
        courses: [
            {
                title: 'Digital Marketing',
                image: 'https://placehold.co/400',
                tags: ['SEO', 'Ads', 'Strategy'],
            },
        ],
    },
    {
        title: 'My Courses',
        description: '১ রানিং',
        icon: 'mdi:database',
        button: {
            title: 'See More',
            link: '#'
        },
        courses: [
            {
                title: 'Big Data with Spark',
                image: 'https://placehold.co/400',
                tags: ['Big Data', 'Spark', 'ETL'],
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
