<script setup>
import MainNavbar from '@/components/navbar/MainNavbar.vue';
import DisplayCard from '@/components/DisplayCard.vue';
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
    min-h-screen
    bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
    bg-[size:24px_24px]"
  >
    <MainNavbar />
    <div class="my-auto max-w-full">
      <div class="grid grid-rows-2 grid-cols-2 xl:grid-cols-3 items-center mx-auto px-10 py-45 gap-x-4 gap-y-4">
        <DisplayCard
          v-for="i in 6"
          :key="i"
          title="Card Title"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
