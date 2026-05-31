<template>
  <div class="min-h-screen bg-background bg-pattern text-text relative overflow-hidden">
    <!-- <AuthenticationComponent /> -->

    <NavigationComponent :top="true" />

    <img
      src="/wavy-bg.svg"
      alt=""
      class="absolute -top-0 opacity-25 w-full min-w-[512px] h-auto -left-1/4 pointer-events-none"
    />

    <div class="relative">
      <RouterView />
    </div>

    <FooterComp />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import FooterComp from "@/components/FooterComp.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
</script>