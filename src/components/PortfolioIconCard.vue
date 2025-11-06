<template>
  <a
    :href="url"
    target="_blank"
  >
    <div class="bg-[#12130F] rounded-md border-white border-4 min-w-20 min-h-20 aspect-square flex flex-col justify-center text-center p-2 md:p-4">
      <slot />
      <span class="font-quantico mt-2">{{ text }}</span>
    </div>
  </a>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  url: {
    type: String,
    default: '#'
  },
})
</script>
