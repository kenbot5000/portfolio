<script setup>
import MainNavbar from '@/components/navbar/MainNavbar.vue';

import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = ref(useRoute())

const pageHeaderMessage = computed(() => {
  switch (route.value.name) {
    case "about":
      return "About Me"
    case "contact":
      return "Contact Me"
    default:
      return "Hi there, I'm Kenshin! Check out what I worked on.";
  }
})
</script>

<template>
  <div
    class="
    main
    flex
    flex-col
    sm:flex-row
  bg-[#12130F]
    inset-0
    w-screen
    bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
    bg-[size:24px_24px]"
  >
    <MainNavbar class="w-full md:w-2/6 xl:w-1/6" />
    <div class="w-full min-h-screen flex items-center">
      <div class="w-full flex flex-col">
        <div
          class="px-5 text-xl md:text-4xl text-white font-jura flex mb-7 text-center"
        >
          <div class="mx-auto font-spacemono">
            {{ pageHeaderMessage }}
          </div>
        </div>
        <Transition
          name="slowfade"
          mode="out-in"
        >
          <RouterView />
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slowfade-enter-active,
.slowfade-leave-active {
  transition: opacity 0.5s ease;
}

.slowfade-enter-from,
.slowfade-leave-to {
  opacity: 0;
}
</style>
