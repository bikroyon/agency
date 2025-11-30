<script setup lang="ts">
interface SocialLinks {
  facebook?: string;
  linkedin?: string;
  twitter?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: SocialLinks;
}

const teamMembers = ref<TeamMember[]>([
  {
    name: "আব্দুল বাসেত বাপ্পী",
    role: "সফটওয়্যার ডেভেলপার, ফাউন্ডার",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "মাহমুদুল হাসান তুহিন",
    role: "সফটওয়্যার ইঞ্জনিয়ার, কো-ফাউন্ডার",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "মোহাম্মদ রাশেদুল রাফি",
    role: "গ্রাফিক্স ডিজাইনার",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "আবু যর",
    role: "সোশ্যাল মিডিয়া ম্যানেজার",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
]);
</script>

<template>
  <section class="py-10 px-4 md:p-16">
    <div class="text-center mb-10">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
        আমাদের <span class="text-rose-500">ফ্যামিলি</span>
      </h2>
      <p class="mt-2 text-xs sm:text-base max-w-2xl mx-auto">
        আমাদের টিমের প্রতিটি সদস্যই দক্ষ এবং প্রতিশ্রুতিবদ্ধ, যারা আপনার ব্যবসার সাফল্যের জন্য কাজ করে যাচ্ছে।
      </p>
    </div>

    <div
      class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-4 sm:gap-x-8 max-w-7xl mx-auto"
    >
      <div
        v-for="(member, index) in teamMembers"
        :key="index"
        class="text-center"
      >
        <!-- MUCH SMALLER IMAGE ON MOBILE -->
        <img
          :src="member.image"
          class="object-cover w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-full grayscale"
          alt=""
        />

        <!-- Smaller name -->
        <p class="mt-3 text-sm sm:text-lg font-bold">
          {{ member.name }}
        </p>

        <!-- Smaller role -->
        <p class="mt-1 text-xs sm:text-sm text-gray-600">
          {{ member.role }}
        </p>

        <!-- Smaller icons on mobile -->
        <div class="mt-2 sm:mt-3 flex justify-center space-x-3 sm:space-x-4">
          <NuxtLink
            v-if="member.socials.facebook"
            :to="member.socials.facebook"
          >
            <Icon
              name="hugeicons:facebook-02"
              class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-rose-500"
            />
          </NuxtLink>

          <NuxtLink
            v-if="member.socials.linkedin"
            :to="member.socials.linkedin"
          >
            <Icon
              name="hugeicons:linkedin-02"
              class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-rose-500"
            />
          </NuxtLink>

          <NuxtLink v-if="member.socials.twitter" :to="member.socials.twitter">
            <Icon
              name="hugeicons:new-twitter"
              class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-rose-500"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
