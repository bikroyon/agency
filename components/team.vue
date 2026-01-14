<script setup lang="ts">
const { t } = useI18n({ useScope: "global" });

interface TeamMember {
  image: string;
}

const teamMembers = ref<TeamMember[]>([
  {
    image: "/teams/founder.png",
  },
  {
    image: "/teams/co.webp",
  },
  {
    image: "/teams/designer.png",
  },
  {
    image: "/teams/abu.png",
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
      </div>
    </div>
  </section>
</template>
