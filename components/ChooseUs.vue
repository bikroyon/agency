<template>
  <section class="py-16">
    <div class="max-w-5xl mx-auto px-4">

      <!-- Heading -->
      <div class="text-center mb-10">
        <h2 class="text-3xl sm:text-4xl font-bold">
          {{ t('custom_app.custom_app_why_choose_section.heading_first') }}
          <span class="text-rose-500">{{ t('custom_app.custom_app_why_choose_section.heading_highlight') }}</span>
        </h2>
        <p class="mt-3 text-gray-700 dark:text-gray-300 text-sm sm:text-lg">
          {{ t('custom_app.custom_app_why_choose_section.subheading') }}
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
            <span class="text-gray-600 dark:text-gray-300 text-xs sm:text-base">
              {{ item.description }}
            </span>
          </div>
        </li>
      </ul>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const { t } = useI18n({ useScope: 'global' })

const whyChoose = computed(() => [
  { icon: 'mdi-shield-key', title: t('custom_app.custom_app_why_choose_section.items.0.title'), description: t('custom_app.custom_app_why_choose_section.items.0.description') },
  { icon: 'mdi-cog-outline', title: t('custom_app.custom_app_why_choose_section.items.1.title'), description: t('custom_app.custom_app_why_choose_section.items.1.description') },
  { icon: 'mdi-speedometer', title: t('custom_app.custom_app_why_choose_section.items.2.title'), description: t('custom_app.custom_app_why_choose_section.items.2.description') },
  { icon: 'mdi-file-check-outline', title: t('custom_app.custom_app_why_choose_section.items.3.title'), description: t('custom_app.custom_app_why_choose_section.items.3.description') },
  { icon: 'mdi-timer-sand', title: t('custom_app.custom_app_why_choose_section.items.4.title'), description: t('custom_app.custom_app_why_choose_section.items.4.description') },
  { icon: 'mdi-finance', title: t('custom_app.custom_app_why_choose_section.items.5.title'), description: t('custom_app.custom_app_why_choose_section.items.5.description') },
])
</script>


<style scoped></style>
