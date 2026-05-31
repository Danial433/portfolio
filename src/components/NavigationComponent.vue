<template>
  <nav class="fixed top-0 left-0 right-0 p-2 z-50 from-background to-transparent bg-gradient-to-b">
    <div
      v-motion
      :initial="{
        y: -100,
        opacity: 0,
        rotate: -10
      }"
      :enter="{
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: { type: 'spring', stiffness: 250, damping: 8, mass: 0.5 }
      }"
      class="from-transparent max-w-5xl mx-auto rounded overflow-hidden bg-primary flex bg-pattern"
    >
      <div class="w-full">
        <router-link
          v-for="(nav, i) in navs"
          :key="nav.name"
          :to="nav.path"
          :title="nav.name"
          class="px-1.5 sm:px-2 inline-block py-1 text-background duration-300 h-full hover:border-secondary hover:text-secondary border-primary border-b-4"
        >
          <Icon
            v-motion
            :initial="{
              scale: 0,
              rotate: 180
            }"
            :visible="{
              scale: 1,
              rotate: 0,
              transition: {
                type: 'spring',
                stiffness: 250,
                damping: 10,
                mass: 0.5,
                delay: i * 100
              }
            }"
            :icon="'mingcute:' + nav.icon"
            class="text-3xl sm:text-4xl inline"
          />
        </router-link>
      </div>

      <div class="px-2 py-0.5 text-background relative">
        <Icon
          icon="mingcute:cloud-fill"
          style="font-size: 12em"
          class="absolute -right-full -top-full text-accent"
          v-motion
          :initial="{
            rotate: -10
          }"
          :enter="{
            rotate: 10,
            transition: {
              repeat: Infinity,
              duration: 5000,
              repeatType: 'mirror'
            }
          }"
        />

        <button
          @click="toggleLanguage"
          class="z-10 relative px-1.5 py-0.5 mb-1 bg-background text-primary rounded text-[10px] font-bold leading-none"
        >
          {{ currentLanguage === "fr" ? "EN" : "FR" }}
        </button>

        <div
          class="z-10 relative hidden sm:block"
          v-motion
          :initial="{
            scale: 0,
            x: 200
          }"
          :enter="{
            scale: 1,
            x: 0,
            transition: {
              duration: 1000,
              type: 'keyframes',
              ease: 'easeOut'
            }
          }"
        >
          <p class="text-lg leading-5 font-bold">Danial</p>
          <p class="font-bold text-[10px] -mt-1 text-right leading-4 whitespace-nowrap">
            Portfolio
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useLanguage } from "@/stores/language";
import { text } from "@/translations/portfolioText";

const { currentLanguage, toggleLanguage } = useLanguage();

const t = computed(() => text[currentLanguage.value]);

const navs = computed(() => [
  {
    name: t.value.nav.home,
    icon: "home-2-fill",
    path: "/"
  },
  {
    name: t.value.nav.about,
    icon: "user-3-fill",
    path: { path: "/", hash: "#about" }
  },
  {
    name: t.value.nav.projects,
    icon: "folder-fill",
    path: { path: "/", hash: "#projects" }
  },
  {
    name: t.value.nav.skills,
    icon: "code-fill",
    path: { path: "/", hash: "#skills" }
  },
  {
    name: t.value.nav.hobbies,
    icon: "game-2-fill",
    path: "/hobbies"
  }
]);
</script>