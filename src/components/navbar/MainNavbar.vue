<script setup>
import NavItem from '@/components/navbar/NavItem.vue'

const navItems = [
  { text: 'portfolio', link: 'portfolio' },
  { text: 'about', link: 'about' },
  { text: 'contact', link: 'contact' }
]
</script>

<template>
  <div
    class="
      max-w-full
      sm:min-h-screen
      sm:max-h-screen
      sm:max-w-150
      bg-[#12130F]
      font-jura
      text-white
      absolute
      sm:sticky
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
        justify-around
        sm:justify-center
        items-center
        text-sm
        xs:text-md
        sm:text-2xl
        font-bold
        sm:min-h-screen
        sm:max-h-screen
        px-4
      "
    >
      <div class="sm:text-3xl py-3 font-quantico font-normal w-full sm:w-auto text-center mr-3 py-auto">
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
