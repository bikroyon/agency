<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale, setLocale } = useI18n();
</script>

<template>
  <div class="flex items-center gap-2" v-if="locale.length <= 1">
    <!-- Show English only if current locale is NOT English -->
    <UButton
      v-if="locale !== 'en'"
      @click="setLocale('en')"
      color="error"
      variant="ghost"
    >
      <Icon name="emojione-v1:flag-for-united-states" class="w-4 h-4" /> EN
    </UButton>

    <!-- Show Bangla only if current locale is NOT Bangla -->
    <UButton
      v-if="locale !== 'bn'"
      @click="setLocale('bn')"
      color="error"
      variant="ghost"
    >
      <Icon name="twemoji:flag-bangladesh" class="w-4 h-4" /> BN
    </UButton>
  </div>
</template>
