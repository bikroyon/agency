<script setup>
definePageMeta({
  title: "Contact Us | Get a Free Web Development Consultation",
  description:
    "Contact our web development team to discuss your project. Get a free consultation for WordPress websites, custom web apps, and digital solutions.",
});

const { t } = useI18n({ useScope: "global" });

const form = ref({ name: "", email: "", mobile: "", message: "" });
const successMessage = ref("");

const submitForm = () => {
  console.log("Form submitted:", form.value);
  successMessage.value = t("contact_page.success_message");
  form.value = { name: "", email: "", mobile: "", message: "" };
};
</script>

<template>
  <section class="p-4 sm:p-16 sm:py-4">
    <div
      class="max-w-7xl mx-auto sm:px-4 grid md:grid-cols-2 gap-10 items-center"
    >
      <!-- Left Side: Contact Info -->
      <div>
        <h2 class="text-3xl md:text-4xl font-bold">
          {{ t("contact_page.title") }}
          <span class="text-rose-500">{{ t("contact_page.highlight") }}</span>
        </h2>
        <p class="mt-4">{{ t("contact_page.description") }}</p>

        <ul class="mt-6 space-y-4">
          <li class="flex items-center space-x-3">
            <Icon name="hugeicons:calling-02" />
            <NuxtLink to="tel:+880190415818"
              >{{ t("contact_page.contacts.mobile") }}: +880 1904 015 818
            </NuxtLink>
          </li>
          <li class="flex items-center space-x-3">
            <Icon name="hugeicons:whatsapp" />
            <NuxtLink
              to="https://wa.me/+880190415818"
              class="text-rose-400 hover:underline"
              >{{ t("contact_page.contacts.whatsapp") }}: +880 1904 015
              818</NuxtLink
            >
          </li>
          <li class="flex items-center space-x-3">
            <Icon name="hugeicons:ai-mail-02" />
            <NuxtLink to="mailto:contact@abdulbasetbappy.xyz"
              >{{ t("contact_page.contacts.email") }}:
              info@bikroyon.com</NuxtLink
            >
          </li>
          <li class="flex items-center space-x-3">
            <Icon name="hugeicons:facebook-01" />
            <NuxtLink
              to="https://fb.com/bikroyonbd"
              class="text-rose-400 hover:underline"
              >{{ t("contact_page.contacts.facebook") }}:
              fb.com/Bikroyon</NuxtLink
            >
          </li>
          <li class="flex items-center space-x-3">
            <Icon name="hugeicons:youtube" />
            <NuxtLink
              to="https://www.youtube.com/@stackvai"
              class="text-rose-400 hover:underline"
              >{{ t("contact_page.contacts.youtube") }}:
              youtube.com/@bikroyon</NuxtLink
            >
          </li>
          <li class="flex items-center space-x-3">
            <Icon name="hugeicons:linkedin-01" />
            <NuxtLink
              to="https://linkedIn.com/bikroyon"
              class="text-rose-400 hover:underline"
              >{{ t("contact_page.contacts.linkedin") }}:
              linkedIn.com/bikroyon</NuxtLink
            >
          </li>
          <li class="flex items-center space-x-3">
            <Icon name="hugeicons:location-09" />
            <NuxtLink
              target="_blank"
              to="https://share.google/dMOa11dLYJyKxnb2W"
              class="flex items-center"
            >
              <span>{{ t("contact_page.contacts.location") }}</span>
            </NuxtLink>
          </li>
        </ul>

        <p class="mt-6 text-sm text-gray-400">
          {{ t("contact_page.contact_times") }}
        </p>
      </div>

      <!-- Right Side: Contact Form -->
      <div class="sm:p-6 w-full">
        <h3 class="text-xl font-semibold mb-4">
          {{ t("contact_page.form.heading") }}
        </h3>
        <form @submit.prevent="submitForm">
          <div class="mb-2">
            <label class="block text-sm font-medium mb-1" for="name">{{
              t("contact_page.form.name")
            }}</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              :placeholder="t('contact_page.form.name_placeholder')"
              required
              class="w-full px-4 text-sm py-2 border border-gray-300 dark:border-gray-700 rounded-md outline-none"
            />
          </div>
          <div class="mb-2">
            <label class="block text-sm font-medium mb-1" for="email">{{
              t("contact_page.form.email")
            }}</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              :placeholder="t('contact_page.form.email_placeholder')"
              required
              class="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md outline-none"
            />
          </div>
          <div class="mb-2">
            <label class="block text-sm font-medium mb-1" for="mobile">{{
              t("contact_page.form.mobile")
            }}</label>
            <input
              type="number"
              id="mobile"
              v-model="form.mobile"
              :placeholder="t('contact_page.form.mobile_placeholder')"
              required
              class="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md outline-none"
            />
          </div>
          <div class="mb-2">
            <label class="block text-sm font-medium mb-1" for="message">{{
              t("contact_page.form.message")
            }}</label>
            <textarea
              id="message"
              v-model="form.message"
              :placeholder="t('contact_page.form.message_placeholder')"
              rows="4"
              required
              class="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            class="flex items-center justify-center gap-2 bg-rose-500 dark:bg-rose-600 hover:bg-rose-500 hover:dark:bg-rose-700 text-white w-full sm:w-fit sm:px-6 py-2 rounded-md transition"
          >
            {{ t("contact_page.form.submit") }}
            <Icon name="hugeicons:mail-send-01" />
          </button>
        </form>

        <p v-if="successMessage" class="mt-4 text-green-600">
          {{ successMessage }}
        </p>
      </div>
    </div>
  </section>
</template>
