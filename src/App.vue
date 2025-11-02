<script setup>
import MainNavbar from '@/components/navbar/MainNavbar.vue';

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
      <div class="flex flex-col">
        <div
          class="px-5 text-xl md:text-4xl text-white font-black font-jura flex mb-5 text-center"
        >
          <div class="mx-auto">
            Hi there, I'm Kenshin! Check out what I worked on.
          </div>
        </div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
