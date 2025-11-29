<template>
    <section>
        <div
            class="bg-slate-100 dark:bg-slate-800 sm:max-h-[300px] rounded-3xl flex  flex-col-reverse sm:flex-row items-center justify-between p-6 overflow-hidden">
            <!-- Left Section (Text Content) -->
            <div class="max-w-xl flex items-center flex-col">
                <div class="text-left sm:pl-10">
                    <!-- Heading -->
                    <h2 class="text-2xl md:text-3xl font-bold">
                        সার্বক্ষণিক সহায়তার জন্য থাকছে <span class="text-rose-500"> টেলিগ্রাম </span>প্রাইভেট সাপোর্ট চ্যানেল
                    </h2>
                    <p class="text-xs sm:text-sm mb-2 font-normal">
                        আমাদের সার্ভিস ব্যবহারকারীদের জন্য একটি প্রাইভেট টেলিগ্রাম সাপোর্ট চ্যানেল রয়েছে, যেখানে আমি
                        নিজেই সরাসরি আপনাদের প্রশ্নের উত্তর দিয়ে থাকি। আমরা প্রতিশ্রুতি দিচ্ছি — ২৪ ঘণ্টার মধ্যে সব
                        প্রশ্নের উত্তর প্রদান করা হবে। তবে, বেশিরভাগ ক্ষেত্রে আপনি ১ ঘণ্টার মধ্যেই উত্তর পেয়ে যাবেন।
                    </p>
                    <p class="text-xs sm:text-sm mb-2 font-normal">এছাড়া কাজের লাইভ আপডেট, গাইডলাইন ও স্পেশাল টিপস
                        পেতে এখনই চ্যানেলে জয়েন করে রাখতে পারেন।</p>
                    <NuxtLink to="https://t.me/+rnbKFoqzg7kyNjQ1" class="bg-rose-500 dark:bg-rose-600 hover:bg-rose-500 hover:dark:bg-rose-700 w-fit text-slate-50 px-4 py-2 rounded-lg  flex items-center justify-center gap-2" >
                        <span class="text-xs sm:text-sm md:text-base">চ্যাট গ্রুপে জয়েন করুন</span>
                        <Icon name="material-symbols:group-add-rounded" />
                    </NuxtLink>
                </div>
            </div>

            <!-- Right Section (Illustration) -->
            <div class="flex items-center justify-end h-[300px] w-[300px] overflow-hidden">
                <Lottie style="height: 400px;" :data="Community" />
            </div>
        </div>
    </section>
</template>

<script setup>
import Community from '~/assets/lottie/Community.json'
</script>

<style lang="scss" scoped></style>