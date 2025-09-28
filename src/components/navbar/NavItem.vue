<template>
  <a href="javascript:;" class="w-full py-3 transition duration-300 ease-in-out hover:scale-120 text-center" >
      {{ text }}
  </a>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false,
    default: '#'
  }
})
</script>