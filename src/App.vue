<script setup>
import MainNavbar from '@/components/navbar/MainNavbar.vue';
import DisplayCard from '@/components/DisplayCard.vue';
</script>

<template>
  <div class="
    main 
    flex
  bg-[#12130F] 
    min-h-screen 
    inset-0 
    w-full 
    bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
    bg-[size:24px_24px]"
  >
    <MainNavbar class="w-1/6" />
    <div class="w-5/6 grid grid-rows-2 grid-cols-3 items-center px-10 py-45 gap-x-4">
      <DisplayCard v-for="i in 6" :key="i" />
    </div>
  </div>
</template>

<style scoped></style>
