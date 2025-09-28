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
  <div class="
    h-screen 
    bg-[#12130F] 
    font-jura
    text-white 
    my-auto
    flex
    flex-col
    justify-center
    items-center
    text-2xl
    font-bold
    border-solid
    border-r-4
    border-[#80808012]
   ">
    <div class="text-3xl py-3 font-quantico font-normal">
      kenbot5000
    </div>
    <NavItem v-for="(item, index) in navItems" :key="index" :text="item.text" :link="item.link" />
  </div>
</template>
