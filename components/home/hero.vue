<template>
  <!-- HERO SECTION -->
  <section
    class="relative py-4 overflow-hidden"
  >
    <!-- Decorative Blobs -->
    <div
      class="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 hidden md:block"
      style="background: radial-gradient(circle, #e31c52 0%, transparent 70%)"
    ></div>

    <div
      class="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 hidden md:block"
      style="background: radial-gradient(circle, #152042 0%, transparent 70%)"
    ></div>

    <div class="max-w-7xl mx-auto px-4 md:p-12 relative">
      <div class="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <!-- LEFT: CONTENT -->
        <div class="relative z-10 text-center md:text-left">
          <span
            class="inline-block mb-6 px-5 py-2 text-xs font-semibold rounded-full"
            style="background: #e31c5215; color: #e31c52"
          >
            বাংলাদেশের #১ ওয়েব সলিউশন
          </span>

          <h1
            class="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
          >
            আপনার ব্যবসার জন্য<br />
            <span class="block text-[#E31C52]">প্রিমিয়াম ওয়েবসাইট</span>
            তৈরি করুন
          </h1>

          <p class="text-sm mb-4 leading-relaxed max-w-xl">
            সেলস বাড়াতে ও ব্র্যান্ড উপস্থিতি শক্তিশালী করতে আমাদের প্রফেশনাল
            ওয়েব ডিজাইন সার্ভিস নিন। ১০০% সন্তুষ্টির গ্যারান্টি।
          </p>

          <!-- CTA BUTTONS -->
          <div
            class="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6"
          >
            <a
              href="#"
              class="text-white font-bold rounded-xl px-8 py-2 shadow-lg flex items-center justify-center gap-2 btn-primary"
            >
              ফ্রি কনসাল্টেশন নিন
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                />
              </svg>
            </a>

            <a
              href="#"
              class="btn-outline font-bold rounded-xl px-8 py-2 flex items-center justify-center gap-2"
            >
              পোর্টফোলিও দেখুন
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                />
              </svg>
            </a>
          </div>

          <!-- STATS -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div
              class="text-center backdrop-blur-xl rounded-2xl p-5 stat-card cursor-pointer"
            >
              <h3 class="text-lg md:text-2xl font-bold text-[#E31C52]">
                ৫০০+
              </h3>
              <p class="text-xs text-gray-600 mt-1">সন্তুষ্ট ক্লায়েন্ট</p>
            </div>

            <div
              class="text-center backdrop-blur-xl rounded-2xl p-5 stat-card cursor-pointer"
            >
              <div class="text-lg md:text-2xl font-bold text-[#E31C52]">
                ১২০০+
              </div>
              <div class="text-xs text-gray-600 mt-1">সম্পন্ন প্রজেক্ট</div>
            </div>

            <div
              class="text-center backdrop-blur-xl rounded-2xl p-5 stat-card cursor-pointer"
            >
              <div class="text-lg md:text-2xl font-bold text-[#E31C52]">৮+</div>
              <div class="text-xs text-gray-600 mt-1">বছরের অভিজ্ঞতা</div>
            </div>

            <div
              class="text-center backdrop-blur-xl rounded-2xl p-5 stat-card cursor-pointer"
            >
              <div class="text-lg md:text-2xl font-bold text-[#E31C52]">
                ৪.৯
              </div>
              <div class="text-xs text-gray-600 mt-1">গড় রেটিং</div>
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
                <svg
                  class="w-8 h-8 text-[#E31C52]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
              </div>
              <div>
                <div class="font-bold ">১০০% সন্তুষ্টি</div>
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
                <svg
                  class="w-8 h-8 text-[#E31C52]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="m12 14.475 1.925 1.15q.275.175.538-.012t.187-.513l-.5-2.175 1.7-1.475q.25-.225.15-.537t-.45-.338l-2.225-.175-.875-2.075q-.125-.3-.45-.3t-.45.3l-.875 2.075-2.225.175q-.35.025-.45.338t.15.537l1.7 1.475-.5 2.175q-.075.325.188.513t.537.012z"
                  />
                </svg>
              </div>
              <div>
                <div class="font-bold ">২৪/৭ সাপোর্ট</div>
                <div class="text-sm"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- END RIGHT -->
      </div>
    </div>
  </section>
</template>

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

/* Hover cards */
.stat-card {
  transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(21, 32, 66, 0.15);
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
