<template>
  <a
    :href="url"
    target="_blank"
    class="group"
  >
    <div
      class="
      bg-[#21221D] 
      w-full  
      my-auto 
      border-white 
      border-2
      flex
      flex-col
    "
    >
      <img
        :src="imageUrl"
        alt="Placeholder Image"
        class="w-full object-cover"
      >
      <div class="text-center">
        <h2 class="text-white text-lg font-bold p-2 transition duration-300 ease-in-out group-hover:scale-120">
          {{ title }}
        </h2>
      </div>
    </div>
  </a>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
    default: 'https://placehold.co/800x400'
  },
  url: {
    type: String,
    required: false,
    default: '#'
  }
})
</script>