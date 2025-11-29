<template>
  <NuxtLayout>
    <UApp class="w-full">
      <Transition name="blur-fade" mode="out-in">
        <NuxtPage />
      </Transition>
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
.blur-fade-enter-active,
.blur-fade-leave-active {
  transition: all 0.3s ease;
}

.blur-fade-enter-from,
.blur-fade-leave-to {
  opacity: 0;
  filter: blur(8px);
  transform: scale(0.98);
}

.blur-fade-enter-to,
.blur-fade-leave-from {
  opacity: 1;
  filter: blur(0);
  transform: scale(1);
}

@supports not selector(::-webkit-scrollbar) {
  body {
    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
  }
}
</style>