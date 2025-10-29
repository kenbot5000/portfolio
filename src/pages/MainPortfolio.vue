<script setup>
import DisplayCard from '@/components/DisplayCard.vue';
</script>

<template>
  <div class="grid grid-rows-2 grid-cols-2 xl:grid-cols-3 items-center mx-auto my-auto px-10 gap-x-4 gap-y-4">
    <DisplayCard
      v-for="i in 6"
      :key="i"
      title="Card Title"
    />
  </div>
</template>