<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });
import { onMounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();
  gsap.from(".team-header", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".team-section",
      start: "top 99.0%",
      toggleActions: "play reverse play reverse",
    },
  });
  gsap.utils.toArray<HTMLElement>(".team-card").forEach((card) => {
    const items = card.querySelectorAll(".team-item");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 99.5%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.from(card, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power3.out",
    }).from(
      items,
      {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.35"
    );
  });
});

interface SocialLinks {
  facebook?: string;
  linkedin?: string;
  twitter?: string;
}

interface TeamMember {
  image: string;
  socials: SocialLinks;
}

const teamMembers = ref<TeamMember[]>([
  {
    image: "/teams/founder.png",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
  {
    image: "/teams/co.webp",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
  {
    image: "/teams/designer.png",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
  {
    image: "/teams/abu.png",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
]);
</script>

<template>
  <section class="py-10 px-4 md:p-16 team-section">
    <div class="text-center max-w-2xl mb-10 mx-auto px-3">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold team-header">
        {{ t("home.team.title") }}
        <span class="text-rose-500">{{ t("home.team.highlight") }}</span>
      </h2>

      <p class="mt-2 text-xs sm:text-base max-w-2xl mx-auto team-header">
        {{ t("home.team.subtitle") }}
      </p>
    </div>

    <div
      class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-4 sm:gap-x-8 max-w-7xl mx-auto"
    >
      <div
        v-for="(member, index) in teamMembers"
        :key="index"
        class="text-center team-card"
      >
        <!-- IMAGE -->
        <img
          :src="member.image"
          class="object-cover w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-full grayscale team-item"
          alt="Team Member"
        />

        <!-- NAME -->
        <p class="mt-3 text-sm sm:text-lg font-bold team-item">
          {{ t(`home.team.members.${index}.name`) }}
        </p>

        <!-- ROLE -->
        <p class="mt-1 text-xs sm:text-sm team-items">
          {{ t(`home.team.members.${index}.role`) }}
        </p>

        <!-- SOCIAL ICONS -->
        <div class="mt-2 flex justify-center space-x-3 sm:space-x-4">
          <NuxtLink
            v-if="member.socials.facebook"
            :to="member.socials.facebook"
          >
            <Icon
              name="hugeicons:facebook-02"
              class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-rose-500 team-item"
            />
          </NuxtLink>

          <NuxtLink
            v-if="member.socials.linkedin"
            :to="member.socials.linkedin"
          >
            <Icon
              name="hugeicons:linkedin-02"
              class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-rose-500 team-item"
            />
          </NuxtLink>

          <NuxtLink v-if="member.socials.twitter" :to="member.socials.twitter">
            <Icon
              name="hugeicons:new-twitter"
              class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-rose-500 team-item"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
