<template>
  <div
    ref="cardsWrapper"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3"
  >
    <div
      v-for="(course, i) in courses"
      :key="i"
      class="course-card rounded-lg shadow hover:shadow-md border border-gray-300 dark:border-gray-700 overflow-hidden flex flex-col sm:flex-row" 
    >
      <img
        :src="course.image"
        alt="Course image"
        class="w-full h-60 object-cover"
      />
      <div class=" w-full flex flex-col justify-between items-center p-2">
        <div class="">
          <h3 class="font-semibold text-sm">{{ course.title }}</h3>
          <p class="text-xs mb-1.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            sint consequatur! Similique natus iure magni. Provident error esse
            rem facilis.
          </p>
          <p class="text-xs">Ending: 18/08/2012</p>
          <p class="text-xs">Duration: 6 months</p>
          <p class="text-xs">Last Support: 2 Days ago</p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mt-1 sm:mt-2">
            <span
              v-for="(tag, j) in course.tags.slice(0, 3)"
              :key="j"
              class="bg-gray-500 dark:bg-gray-700 text-rose-50 text-[8px] sm:text-xs px-2 py-1 rounded-sm"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <!-- Buttons -->
        <div class="flex justify-between gap-3">
          <button
            class="border border-gray-600 px-3 py-1.5 text-xs sm:text-sm flex justify-center items-center gap-2 rounded hover:bg-gray-100 dark:hover:bg-gray-950"
          >
            <span>Live</span>
            <Icon name="material-symbols:arrow-outward-rounded" />
          </button>
          <button
            class="border border-gray-600 px-3 py-1.5 text-xs sm:text-sm flex justify-center items-center gap-2 rounded hover:bg-gray-100 dark:hover:bg-gray-950"
          >
            <span>Build Like This</span>
            <Icon name="material-symbols:arrow-outward-rounded" />
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="courses.length === 0"
      class="text-center col-span-full text-gray-500"
    >
      No Work available in this category.
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import gsap from "gsap";

const props = defineProps({
  courses: Array,
});

const cardsWrapper = ref(null);

watch(
  () => props.courses,
  () => {
    if (!cardsWrapper.value) return;

    const cards = cardsWrapper.value.querySelectorAll(".course-card");

    // GSAP stagger animation
    gsap.from(cards, {
      opacity: 0,
      y: 40,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.15,
    });
  },
  { immediate: true }
);
</script>
