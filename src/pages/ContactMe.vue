<script setup>
import EmailIcon from '@/components/icons/EmailIcon.vue';
import LinkedInIcon from '@/components/icons/LinkedInIcon.vue';
import UpworkIcon from '@/components/icons/UpworkIcon.vue';
</script>

<template>
  <div class="text-white w-full flex justify-around font-spacemono">
    <div class="bg-[#21221D] w-3/6 p-4">
      <p class="text-xl mb-2 font-bold">
        Here's my contact form if you'd like to know more about me or my work!
      </p>
      <span>Or send me an email/contact me through various channels.</span>

      <form
        action="https://formspree.io/f/xyzbrwla"
        method="POST"
      >
        <label class="block mt-4 mb-2">
          Your email:
        </label>
        <input
          type="email"
          name="email"
          class="bg-white block rounded-md w-1/2 h-8 mt-2 mb-4 text-black"
        >
        <label class="block mb-2">
          Your message:
        </label>
        <textarea
          name="message"
          class="bg-white block rounded-md w-1/2 h-30 mt-2 text-black"
        />
        <!-- your other form fields go here -->
        <button
          type="submit"
          class="
            mt-6
            rounded-md
            bg-stone-300
            py-2
            px-8
            text-stone-800
            hover:bg-stone-400
            hover:cursor-pointer
            font-bold
            border-2
            border-stone-700"
        >
          Send!
        </button>
      </form>
    </div>
    <div class="bg-[#21221D] w-2/6 p-4 self-center">
      <div>
        <div class="flex justify-start">
          <EmailIcon />
          <a href="mailto:rionnken@outlook.com">
            <span class="text-2xl ml-2 align-top font-quantico shrink underline">
              rionnken@outlook.com
            </span>
          </a>
        </div>
        <div class="flex justify-start">
          <LinkedInIcon />
          <a
            href="https://www.linkedin.com/in/rionn-kenshin-pineda-85309314b"
            target="_blank"
          >
            <span class="text-2xl ml-2 align-top font-quantico shrink underline">
              LinkedIn
            </span>
          </a>
        </div>
        <div class="flex justify-start">
          <UpworkIcon />
          <a
            href="https://www.upwork.com/freelancers/~01db45c1400f6b2f37 "
            target="_blank"
          >
            <span class="text-2xl ml-2 align-top font-quantico shrink underline">
              Upwork
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
