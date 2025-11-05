<template>
  <a
    href="javascript:;"
    class="group font-jura"
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
        :src="image"
        class="object-cover"
      >
      <div class="text-center py-2">
        <div class="inline-block text-white text-lg font-bold p-2 transition duration-300 ease-in-out group-hover:scale-120">
          {{ title }}
        </div>
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
  image: {
    type: String,
    required: false,
    default: 'https://placehold.co/1920x1080'
  },
  url: {
    type: String,
    required: false,
    default: '#'
  }
})
</script>
