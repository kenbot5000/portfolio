<script setup>
import NavItem from '@/components/navbar/NavItem.vue'

const navItems = [
  { text: 'portfolio', link: '#' },
  { text: 'about', link: '#' },
  { text: 'github', link: '#' },
  { text: 'contact', link: '#' }
]
</script>

<template>
  <div
    class="
      max-w-full
      sm:min-h-screen
      sm:max-h-screen
      sm:w-150
      bg-[#12130F] 
      font-jura
      text-white 
      my-auto
      sticky
      top-0
      sm:left-0
      border-solid
      sm:border-r-4
      border-[#80808012]
   "
  >
    <div
      class="
        flex
        sm:flex-col
        justify-center
        items-center
        text-2xl
        font-bold 
        sm:min-h-screen
        sm:max-h-screen
      "
    >
      <div class="text-3xl py-3 font-quantico font-normal">
        kenbot5000
      </div>
      <NavItem
        v-for="(item, index) in navItems"
        :key="index"
        :text="item.text"
        :link="item.link"
      />
    </div>
  </div>
</template>
