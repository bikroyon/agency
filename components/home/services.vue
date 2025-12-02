<script setup lang="ts">
import developerSkils from "~/assets/lottie/developerskills.json";
const { t } = useI18n({ useScope: "global" });

const localePath = useLocalePath();

const services = computed(() => [
  {
    title: t("services.service_list.0.title"),
    description: t("services.service_list.0.description"),
    icon: "hugeicons:laptop-phone-sync",
    link: localePath("/landing-page"),
  },
  {
    title: t("services.service_list.1.title"),
    description: t("services.service_list.1.description"),
    icon: "hugeicons:store-location-01",
    link: localePath("/ecommerce-website"),
  },
  {
    title: t("services.service_list.2.title"),
    description: t("services.service_list.2.description"),
    icon: "hugeicons:app-store",
    link: localePath("/ecommerce-website"),
  },
  {
    title: t("services.service_list.3.title"),
    description: t("services.service_list.3.description"),
    icon: "hugeicons:dashboard-speed-01",
    link: localePath("/website-management"),
  },
  {
    title: t("services.service_list.4.title"),
    description: t("services.service_list.4.description"),
    icon: "hugeicons:radar-01",
    link: localePath("/website-management"),
  },
  {
    title: t("services.service_list.5.title"),
    description: t("services.service_list.5.description"),
    icon: "hugeicons:ramadhan-month",
    link: localePath("/website-management"),
  },
]);
</script>
<template>
  <section id="services" class="py-8 sm:py-18 px-2 relative">
    <div
      class="absolute inset-0 h-full w-full opacity-40 -z-10 bg-[radial-gradient(#99a1af_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
    ></div>
    <div
      class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-12 pt-20"
    >
      <!-- Left Side: Image and Text -->
      <div class="w-full lg:w-[40%] text-center lg:text-left">
        <div class="text-left h-[200px] overflow-hidden">
          <Lottie style="height: 200px" :data="developerSkils" />
        </div>
        <h2 class="text-3xl sm:text-3xl md:text-4xl font-bold">
          <span class=""
            >{{ $t("services.title") }}
            <span class="text-rose-500">{{
              $t("services.heighlights")
            }}</span></span
          >
        </h2>
        <p class="mt-4 text-sm leading-relaxed">
          <i18n-t keypath="services.stats">
            <template #strong1>
              <b class="text-[#E31C52]">{{ $t("services.strong.1") }}</b>
            </template>

            <template #strong2>
              <b class="font-bold">{{ $t("services.strong.2") }}</b>
            </template>

            <template #strong3>
              <b class="text-[#E31C52]">{{ $t("services.strong.3") }}</b>
            </template>

            <template #strong4>
              <b class="text-[#E31C52]">{{ $t("services.strong.4") }}</b>
            </template>

            <template #strong5>
              <b>{{ $t("services.strong.5") }}</b>
            </template>
          </i18n-t>
        </p>
      </div>

      <!-- Right Side: Tutorials Cards -->
      <div
        class="w-full lg:w-[60%] grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-6"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          class="border backdrop-blur-lg border-slate-200 dark:border-slate-700 rounded-lg p-3 flex flex-col items-center justify-center hover:shadow-lg transition duration-300"
        >
          <div class="text-4xl mb-2 flex items-center justify-center">
            <Icon :name="service.icon" class="w-10 h-10 text-rose-500" />
          </div>
          <h3 class="text-center text-xs font-semibold mb-2">
            {{ service.title }}
          </h3>
          <p class="text-[10px] text-center mb-2">
            {{ service.description }}
          </p>
          <NuxtLink
            :to="service.link"
            class="text-xs px-3 py-1 border border-rose-500 text-rose-500 rounded-md hover:bg-rose-500 hover:text-white transition"
          >
            {{ $t("services.view_details") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
