<template>
  <RouterLink
    :to="{name: link}"
    href="javascript:;"
    class="w-full py-3 transition duration-300 ease-in-out hover:scale-120 text-center"
    :class="link == $route.name ? 'underline underline-offset-3' : ''"
  >
    {{ text }}
  </RouterLink>
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