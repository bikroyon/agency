<template>
    <div id="pricing" class="py-20 sm:px-4 max-w-7xl mx-auto" :class="{ 'dark': darkMode }">
        <div class="text-center mb-10">
            <!-- Heading -->
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
                আমাদের সকল <span class="text-rose-500">প্রাইসিং প্লান</span>
            </h2>
            <p class="mt-2 text-sm sm:text-lg">আমাদের তৈরি ল্যান্ডিং পেজ শুধু সুন্দর নয়—এটি সাইকোলজিক্যালি কনভার্টিং
                করার মতো করে তৈরি।</p>
        </div>
        <!-- Toggle -->
        <div class="flex justify-center max-w-[24rem] mx-auto mb-8">
            <div class="relative flex w-full p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                    <span
                        class="absolute inset-0 w-1/2 bg-rose-500 rounded-lg shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out"
                        :class="isAnnual ? 'translate-x-0' : 'translate-x-full'"></span>
                </span>
                <button class="relative flex-1 text-sm sm:text-base font-bold h-8 sm:h-12 rounded-full transition-colors"
                    :class="isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'" @click="isAnnual = true">
                    ডোমেইন-হোস্টিং ছাড়া
                </button>
                <button class="relative flex-1 text-sm sm:text-base font-bold h-8 sm:h-12 rounded-full transition-colors"
                    :class="!isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'" @click="isAnnual = false">
                    ডোমেইন-হোস্টিং সহ
                </button>
            </div>
        </div>

        <!-- Pricing Cards -->
        <div class="grid gap-6 lg:grid-cols-2 lg:px-28">
            <WebsitePricingCard v-for="plan in plans" :key="plan.name" :plan="plan" :is-annual="isAnnual"
                :highlighted="plan.name === 'কমপ্লিট পেকেজ'" />
        </div>
    </div>
</template>

<script setup>
const isAnnual = ref(true)
const darkMode = false

const plans = [
    {
        name: 'রেগুলার প্যাকেজ',
        monthly: '১৫,০০০',
        yearly: '১৩,০০০',
        description: 'আপনি যদি একটু অ্যাডভান্সড ফিচার চান এবং বিজনেসকে পরবর্তী ধাপে নিতে চান, তাহলে এই প্যাকেজটি আপনার জন্য পারফেক্ট।',
        features: [
            'প্রিমিয়াম সেলস ফানেল ডিজাইন',
            'প্রিমিয়াম প্লাগইন ব্যবহার করা হয়েছে',
            'সহজ অর্ডার সিস্টেম ও অটোমেশন',
            'অটো ইনভয়েস প্রিন্ট ও লাইভ চ্যাট',
            'সম্পূর্ণ টিউটোরিয়াল প্রদান করা হবে',
            'প্রফেশনাল সার্ভার-সাইড ট্র্যাকিং',
            'স্পিড অপটিমাইজেশন',
            'সকাল ৬টা থেকে সন্ধ্যা ৬:৩০ পর্যন্ত সাপোর্ট',
        ],
    },
    {
        name: 'কমপ্লিট পেকেজ',
        monthly: '২৫,০০০',
        yearly: '২৩,০০০',
        description: 'এটা আমাদের অল-ইন-ওয়ান প্যাকেজ। যারা প্রফেশনাল লেভেলের সাপোর্ট ও সর্বোচ্চ রেজাল্ট চান, তাদের জন্য এটা সবচেয়ে উপযুক্ত।',
        features: [
            'প্রিমিয়াম সেলস ফানেল ডিজাইন',
            'প্রিমিয়াম প্লাগইন ব্যবহার করা হয়েছে',
            'সহজ অর্ডার সিস্টেম ও অটোমেশন',
            'অটো ইনভয়েস প্রিন্ট ও লাইভ চ্যাট',
            'সম্পূর্ণ টিউটোরিয়াল প্রদান করা হবে',
            'প্রফেশনাল সার্ভার-সাইড ট্র্যাকিং',
            'স্পিড অপটিমাইজেশন',
            'সকাল ৬টা থেকে সন্ধ্যা ৬:৩০ পর্যন্ত সাপোর্ট',
        ]

    },
]
</script>
