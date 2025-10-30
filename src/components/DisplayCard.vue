<template>
  <a
    href="javascript:;"
    class="group"
    @click="$emit('open-display', id)"
  >
    <div
      class="
      bg-[#21221D] 
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
        class="object-cover"
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
defineEmits(['open-display'])

defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: ''
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