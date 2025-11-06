<script setup>
import PortfolioIconCard from '@/components/PortfolioIconCard.vue';
import GithubIcon from '@/components/icons/GithubIcon.vue';
import UpworkIcon from '@/components/icons/UpworkIcon.vue';
import ResumeIcon from '@/components/icons/ResumeIcon.vue';
import LinkedInIcon from '@/components/icons/LinkedInIcon.vue';
</script>

<template>
  <div>
    <div class="w-full xl:w-1/2 grid grid-cols-4 mx-auto text-white gap-x-4 px-7 mb-7">
      <PortfolioIconCard
        text="Github"
        url="https://github.com/kenbot5000/"
      >
        <GithubIcon
          width="50px"
          height="50px"
          fill="#FFFFFF"
          class="mx-auto aspect-square"
        />
      </PortfolioIconCard>
      <PortfolioIconCard
        text="Resume"
        url="/file/pineda_resume.pdf"
      >
        <ResumeIcon
          width="50px"
          height="50px"
          fill="#FFFFFF"
          class="mx-auto aspect-square"
        />
      </PortfolioIconCard>
      <PortfolioIconCard
        text="Upwork"
        url="https://www.upwork.com/freelancers/~01db45c1400f6b2f37"
      >
        <UpworkIcon
          width="50px"
          height="50px"
          fill="#FFFFFF"
          class="mx-auto aspect-square"
        />
      </PortfolioIconCard>
      <PortfolioIconCard
        text="LinkedIn"
        url="https://www.linkedin.com/in/rionn-kenshin-pineda-85309314b"
      >
        <LinkedInIcon
          width="50px"
          height="50px"
          fill="#FFFFFF"
          class="mx-auto aspect-square"
        />
      </PortfolioIconCard>
    </div>
    <div
      class="
      md:mx-20
      px-4
      py-2
      md:py-5
      text-white
      bg-[#21221D]
      md:rounded-md
      *:my-4
      *:text-lg
      font-spacemono
      max-h-[60vh]
      overflow-y-auto
    "
    >
      <p>
        I'm an experienced fullstack web dev with over 5 years of development experience under my belt. I primarily work with the MEVN stack (though AWS is mostly used in my current project), but most experienced in front-end development using Vue. Most of my work is done as a developer for Winona, a medical company where I developed several projects from scratch, which are used by the various members of the company.
      </p>
      <p>
        As for other tools that I use for creating projects: I've used Express.js for backend work, and have used Figma to create designs. I use Python, as well as different game engines to make small games and tools. I've also created small Discord chat bots using Python in the past. I like to dabble in development skills beyond web, and I'm always willing to learn something new to pull off a project.
      </p>
      <p>
        In my free time, I like to play video games and cosplay :) I also own a cat and a dog!
      </p>
    </div>
  </div>
</template>
