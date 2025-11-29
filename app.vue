<template>
  <NuxtLayout>
    <UApp class="w-full">
        <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>
<style>
* {
  --sb-track-color: #1f1f1f;
  --sb-thumb-color: #032737;
  --sb-size: 5px;
}

*::-webkit-scrollbar {
  width: var(--sb-size);
  background: transparent;
}

*::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 3px;
}

*::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 3px;

}

/* Page transition: blur and fade */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

@supports not selector(::-webkit-scrollbar) {
  body {
    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
  }
}
</style>