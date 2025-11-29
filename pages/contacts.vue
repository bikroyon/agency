<template>
  <section class="p-4 sm:p-16 sm:py-4">
    <div class="max-w-7xl mx-auto sm:px-4 grid md:grid-cols-2 gap-10 items-center">

      <!-- Left Side: Contact Info -->
      <div>
        <h2 class="text-3xl md:text-4xl font-bold">
          আমাদের সাথে <span class="text-rose-500">যোগাযোগ</span>
        </h2>
        <p class="mt-4">
          আমাদের সাথে সরাসরি যোগাযোগ করতে নিচের যেকোনো মাধ্যম ব্যবহার করতে পারেন।
        </p>

        <ul class="mt-6 space-y-4">
          <li class="flex items-center space-x-3">
            <Icon name="hugeicons:calling-02" />
            <NuxtLink to="tel:+8801799568976">Mobile: +8801799568976</NuxtLink>
          </li>
          <li class="flex items-center space-x-3">
            <Icon name="hugeicons:whatsapp" />
            <NuxtLink to="https://wa.me/+8801799568976" class="text-rose-400 hover:underline">Whatsapp: +8801799568976
            </NuxtLink>
          </li>
          <li class="flex items-center space-x-3">
            <Icon name="hugeicons:ai-mail-02" />
            <NuxtLink to="mailto:contact@abdulbasetbappy.xyz">contact@abdulbasetbappy.xyz</NuxtLink>
          </li>
          <li class="flex items-center space-x-3">
            <Icon name="hugeicons:facebook-01" />
            <NuxtLink to="https://fb.com/abdulbasetbappy" class="text-rose-400 hover:underline">fb.com/abdulbasetbappy
            </NuxtLink>
          </li>
          <li class="flex items-center space-x-3">
            <Icon name="hugeicons:youtube" />
            <NuxtLink to="https://www.youtube.com/@stackvai" class="text-rose-400 hover:underline">youtube.com/@stackvai
            </NuxtLink>
          </li>
          <li class="flex items-center space-x-3">
            <Icon name="hugeicons:linkedin-01" />
            <NuxtLink to="https://linkedIn.com/abdulbasetbappy" class="text-rose-400 hover:underline">linkedIn.com/abdulbasetbappy
            </NuxtLink>
          </li>
          <li class="flex items-center space-x-3">
            <Icon name="hugeicons:location-09" />
            <span>জামালপুর সদর, জামালপুর, ময়মনসিংহ।</span>
          </li>
        </ul>

        <p class="mt-6 text-sm text-gray-400">
          যোগাযোগের সময় - সকাল ১০ টা থেকে রাত ১০ টা।
        </p>
      </div>

      <!-- Right Side: Contact Form -->
      <div class="sm:p-6 w-full">
        <h3 class="text-xl font-semibold mb-4">মেসেজ পাঠান</h3>
        <form @submit.prevent="submitForm">
          <div class="mb-2">
            <label class="block text-sm font-medium mb-1" for="name">নাম</label>
            <input type="text" id="name" placeholder="আপনার নাম লিখুন" v-model="form.name" required
              class="w-full px-4 text-sm py-2 border border-gray-300 dark:border-gray-700 rounded-md outline-none" />
          </div>
          <div class="mb-2">
            <label class="block text-sm font-medium mb-1" for="email">ই-মেইল*</label>
            <input type="email" id="email" placeholder="আপনার ই-মেইল অবশ্যই দিতে হবে" v-model="form.email" required
              class="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md outline-none" />
          </div>
          <div class="mb-2">
            <label class="block text-sm font-medium mb-1" for="email">মোবাইল *</label>
            <input type="number" id="email" placeholder="মোবাইল নম্বর অবশ্যই দিতে হবে" v-model="form.mobile" required
              class="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md outline-none" />
          </div>
          <div class="mb-2">
            <label class="block text-sm font-medium mb-1" for="message">মেসেজ</label>
            <textarea id="message" placeholder="যা বলতে চান এখানে লিখুন" v-model="form.message" rows="4" required
              class="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md outline-none"></textarea>
          </div>
          <button type="submit"
            class="flex items-center justify-center gap-2  bg-rose-500 dark:bg-rose-600 hover:bg-rose-500 hover:dark:bg-rose-700 text-white w-full sm:w-fit sm:px-6 py-2 rounded-md transition">
            সাবমিট করুণ
            <Icon name="hugeicons:mail-send-01" />
          </button>
        </form>

        <!-- Optional Success Message -->
        <p v-if="successMessage" class="mt-4 text-green-600">{{ successMessage }}</p>
      </div>

    </div>
  </section>
</template>

<script setup>
definePageMeta({
  title: "যোগাযোগ করুন – ওয়েবসাইট ও ল্যান্ডিং পেজ ডিজাইনের জন্য",
  description: "আপনার ব্যবসার জন্য কাস্টম ওয়েবসাইট বা কনভারশন ফোকাসড ল্যান্ডিং পেজ ডিজাইন করতে চান? এখনই যোগাযোগ করুন – দ্রুত সাপোর্ট ও কাস্টম ডিজাইন গ্যারান্টিড।",
});

const form = ref({
  name: '',
  email: '',
  message: ''
})

const successMessage = ref('')

const submitForm = () => {
  // Simulate a successful submission (you can replace this with real API call)
  console.log('Form submitted:', form.value)
  successMessage.value = 'আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে!'
  form.value = { name: '', email: '', message: '' }
}
</script>
