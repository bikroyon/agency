<template>
  <div class="relative">
    <div v-if="highlighted" class="absolute top-0 right-0 mr-6 -mt-4">
      <div
        class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-rose-600 text-white rounded-full shadow-sm">
        আমাদের রিকোমেন্ড
      </div>
    </div>
    <div :class="[
      highlighted ? 'border-rose-600' : 'border-slate-700'
    ]" class="p-6 rounded-2xl bg-white dark:bg-slate-900 border shadow shadow-slate-950/5">
      <div class="mb-5">
        <div class="text-slate-900 dark:text-slate-200 font-semibold mb-1">{{ plan.name }}</div>
        <div class="inline-flex items-baseline mb-2">
          <span class="text-slate-900 dark:text-slate-200 font-bold text-3xl">৳</span>
          <span class="text-slate-900 dark:text-slate-200 font-bold text-4xl">
            {{ isAnnual ? plan.yearly : plan.monthly }}
          </span>
          <span class="text-slate-500 font-medium">/প্রজেক্ট</span>
        </div>
        <p class="text-sm text-slate-500 mb-5">{{ plan.description }}</p>
        <a href="#" :class="[
          highlighted ? 'bg-rose-700 hover:bg-rose-600' : 'bg-rose-700 hover:bg-rose-600'
        ]" class="w-full flex items-center justify-center gap-4 rounded-lg px-3.5 py-2.5 text-sm font-medium text-white transition">
          <Icon name="hugeicons:messenger" class="w-6 h-6" />
          <span>
            এই প্যাকেজটি নিতে চাই
          </span>
        </a>
      </div>

      <div class="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
      <ul class="text-slate-600 dark:text-slate-400 text-sm space-y-3">
        <li v-for="(feature, i) in plan.features" :key="i" class="flex items-center">
          <svg class="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12">
            <path
              d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  plan: Object,
  isAnnual: Boolean,
  highlighted: Boolean,
})
</script>
