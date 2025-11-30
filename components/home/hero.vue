<template>
  <!-- HERO SECTION -->
  <section class="relative py-4 overflow-hidden">
    <!-- Decorative Blobs -->
    <div
      class="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 hidden md:block"
      style="background: radial-gradient(circle, #e31c52 0%, transparent 70%)"
    ></div>

    <div
      class="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 hidden md:block"
      style="background: radial-gradient(circle, #152042 0%, transparent 70%)"
    ></div>

    <div class="max-w-7xl mx-auto px-4 md:p-12 md:pt-8 relative">
      <div class="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <!-- LEFT: CONTENT -->
        <div class="relative z-10 text-center md:text-left">
          <span
            class="inline-block mb-4 px-5 py-2 text-xs font-semibold rounded-full"
            style="background: #e31c5215; color: #e31c52"
          >
            বাংলাদেশের #১ ওয়েব সলিউশন
          </span>

          <h1
            class="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
          >
            সেলস বাড়ানোর জন্য<br />
            <span class="block text-[#E31C52]">প্রফেশনাল ওয়েবসাইট</span>
            তৈরি করুন
          </h1>

          <p class="text-sm mb-4 leading-relaxed max-w-xl">
            আপনার ব্যবসার জন্য <b>দ্রুত লোডিং</b> এবং SEO অপটিমাইজড ওয়েবসাইট
            তৈরি করুন। আমাদের <b>প্রমাণিত পদ্ধতি</b> ব্যবহার করে আপনার অনলাইন
            <b>সেলস</b> নিশ্চিতভাবে <b>৩ গুণ বাড়ান</b> এবং আপনার ডিজিটাল
            ব্যবসাকে আরও সহজ করুন।
          </p>

          <!-- CTA BUTTONS -->
          <div
            class="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6"
          >
            <NuxtLink
              to="https://wa.me/8801904015818"
              class="text-white font-semibold rounded-xl px-8 py-2 shadow-lg flex items-center justify-center gap-2 btn-primary"
            >
              সরাসরি যোগাযোগ করুন
              <Icon name="hugeicons:whatsapp" class="w-5 h-5" />
            </NuxtLink>

            <NuxtLink
              href="#services"
              class="btn-outline font-semibold rounded-xl px-8 py-2 flex items-center justify-center gap-2"
            >
              আমাদের সার্ভিস সমূহ
              <Icon name="hugeicons:service" class="w-5 h-5" />
            </NuxtLink>
          </div>

          <!-- STATS -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="'stat-card text-center p-5 rounded-2xl border border-rose-100 dark:border-slate-700 transition-transform duration-500',"
            >
              <h3 class="text-lg md:text-2xl font-bold text-rose-600">
                {{ stat.value }}
              </h3>
              <p class="text-xs text-gray-600 mt-1">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- RIGHT: VIDEO + FLOAT CARDS -->
        <div class="relative w-full">
          <div class="glass rounded-3xl shadow-2xl p-1 md:p-2 w-full">
            <iframe
              class="rounded-xl w-full h-[315px] md:h-[420px]"
              src="https://www.youtube.com/embed/UMJSwbhOQzg?si=yR-zoH0JMcIerz0D"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <!-- FLOATING CARD LEFT -->
          <div
            class="absolute -bottom-6 -left-6 glass bg-[#ffffff95] dark:bg-[#01043251] rounded-2xl shadow-2xl p-5 hidden md:block float-card float-anim"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-14 h-14 rounded-full flex-center"
                style="background: #e31c5215"
              >
                <Icon
                  name="hugeicons:checkmark-badge-03"
                  class="w-8 h-8 text-[#E31C52]"
                />
              </div>
              <div>
                <div class="font-bold">১০০% সন্তুষ্টি</div>
                <div class="text-sm">গ্যারান্টি</div>
              </div>
            </div>
          </div>

          <!-- FLOATING CARD RIGHT -->
          <div
            class="absolute -top-6 -right-6 glass bg-[#ffffff95] dark:bg-[#01043251] rounded-2xl shadow-2xl p-5 hidden md:block float-card float-anim"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-14 h-14 rounded-full flex-center"
                style="background: #e31c5215"
              >
                <Icon
                  name="hugeicons:customer-support"
                  class="w-8 h-8 text-[#E31C52]"
                />
              </div>
              <div>
                <div class="font-bold">২৪/৭ সাপোর্ট</div>
                <div class="text-sm">যেকোনো সময়</div>
              </div>
            </div>
          </div>
        </div>
        <!-- END RIGHT -->
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";

const stats = [
  { value: "৩০০+", label: "সন্তুষ্ট ক্লায়েন্ট" },
  { value: "৩৫০+", label: "সম্পন্ন প্রজেক্ট" },
  { value: "৩+", label: "বছরের অভিজ্ঞতা" },
  { value: "৪.৯", label: "গড় রেটিং" },
];
</script>

<style scoped>
/* Responsive fixes */
@media (max-width: 480px) {
  .stat-card {
    padding: 12px !important;
  }
  .stat-card div:first-child {
    font-size: 20px !important;
  }
  iframe {
    height: 260px !important;
  }
  .float-card {
    transform: scale(0.85);
  }
}

@media (max-width: 380px) {
  iframe {
    height: 220px !important;
  }
  .stat-card div:first-child {
    font-size: 18px !important;
  }
}

/* Glass & Card Styles */
.glass {
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.044);
}

.glass-card {
  background: rgba(255, 255, 255, 0.17);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(227, 28, 82, 0.1);
  box-shadow: 0 8px 32px rgba(21, 32, 66, 0.08);
}

/* Buttons */
.btn-primary {
  background: linear-gradient(135deg, #e31c52, #c4173f);
  transition: 0.3s ease;
}
.btn-primary:hover {
  background: linear-gradient(135deg, #c4173f, #a11235);
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(227, 28, 82, 0.4);
}
.btn-outline {
  border: 2px solid #e31c52;
  color: #e31c52;
  transition: 0.3s ease;
}
.btn-outline:hover {
  background: #e31c52;
  color: white;
  transform: translateY(-3px);
}

.stat-card:hover {
  transform: scale(1.05); /* only scale */
  box-shadow: 0 20px 30px rgba(21, 32, 66, 0.15); /* shadow only */
  /* remove background or color changes */
  background-color: inherit !important;
  color: inherit !important;
}

/* Floating animation */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
.float-anim {
  animation: float 6s ease-in-out infinite;
}
.float-card {
  transition: 0.4s ease;
}
.float-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(21, 32, 66, 0.25);
}

/* Flex Center */
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
