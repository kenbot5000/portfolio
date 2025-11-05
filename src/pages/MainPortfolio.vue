<script setup>
import { ref } from 'vue';

import DisplayCard from '@/components/DisplayCard.vue';
import GithubIcon from '@/components/icons/GithubIcon.vue';
import { text } from '@/data/text.js';

const displayOpen = ref(false);
const currentDisplay = ref(null);

let openDisplay = (id) => {
  displayOpen.value = true;
  currentDisplay.value = text.find((item => item.id === id));
}
</script>

<template>
  <div class="grid grid-rows-2 grid-cols-2 xl:grid-cols-3 items-center mx-auto my-auto px-10 gap-x-4 gap-y-4">
    <DisplayCard
      v-for="(val, i) in text"
      :id="val.id"
      :key="i"
      :title="val.title"
      :description="val.description"
      :url="val.url"
      :image="val.image"
      @open-display="openDisplay(val.id)"
    />

    <!-- Background -->
    <Transition name="fade">
      <div
        v-if="displayOpen"
        class="fixed bg-stone-800/50 w-screen h-screen top-0 left-0"
        @click="displayOpen = false"
      />
    </Transition>
    <!-- Dialog -->
    <Transition name="fade">
      <div
        v-if="displayOpen"
        class="
          fixed
          top-1/2
          left-1/2
          -translate-1/2
          bg-stone-800
          w-full
          md:w-1/2
          rounded-md
          p-4
          text-white
          font-jura
          max-h-[90vh]
          overflow-y-auto
        "
        :class="displayOpen ? 'opacity-100' : 'opacity-0'"
      >
        <div class="w-full flex justify-end mb-2">
          <a
            href="javascript:;"
            class="text-white text-2xl hover:cursor-pointer font-black"
            @click="displayOpen = false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

          </a>
        </div>
        <img
          :src="currentDisplay.image"
          alt=""
          class="mb-4 rounded-md mx-auto"
        >
        <div class="px-5">
          <h2 class="text-3xl font-bold mb-4 hover:underline">
            {{ currentDisplay.title }}
          </h2>
          <p
            v-for="(line, index) in currentDisplay.description"
            :key="index"
            class="mb-3 text-justify"
          >
            {{ line }}
          </p>
          <a
            v-if="currentDisplay.url"
            :href="currentDisplay.url"
            target="_blank"
            class="my-4"
          >
            <button
              class="
                rounded-md
                bg-stone-300
                py-2
                px-4
                text-stone-800
                hover:bg-stone-400
                hover:cursor-pointer
                font-bold
                border-2
                border-stone-700
              "
            >
              Open Site
            </button>
          </a>
          <a
            v-if="currentDisplay.github"
            :href="currentDisplay.github"
            target="_blank"
            class="my-4"
          >
            <button
              class="
                rounded-md
                bg-stone-300
                py-2
                px-4
                text-stone-800
                hover:bg-stone-400
                hover:cursor-pointer
                font-bold
                border-2
                border-stone-700
              "
            >
              <div class="inline-flex">
                <GithubIcon class="mr-2" /> Github
              </div>
            </button>
          </a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
