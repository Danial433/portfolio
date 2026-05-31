<template>
  <section class="relative h-full">
    <div class="bg-secondary bg-opacity-50 rounded w-full h-full absolute top-0 left-0 -rotate-2"></div>

    <div class="rounded border relative border-secondary bg-background h-full overflow-hidden">
      <div class="relative aspect-video bg-secondary bg-opacity-30 overflow-hidden">
        <Icon
          :icon="icon"
          style="font-size: 10em"
          class="opacity-15 absolute -right-8 -bottom-12"
        />

        <img
          v-if="image"
          :src="image"
          :alt="title"
          class="h-full w-full object-cover"
        />

        <div v-else class="h-full w-full flex items-center justify-center">
          <Icon :icon="icon" class="text-primary opacity-80" style="font-size: 5em" />
        </div>
      </div>

      <div class="p-4">
        <h3 class="text-xl font-bold mb-2">{{ title }}</h3>

        <p class="opacity-80 text-sm mb-3">
          {{ description }}
        </p>

        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="text-xs px-2 py-1 rounded bg-secondary bg-opacity-70 border border-secondary"
          >
            {{ tech }}
          </span>
        </div>

        <div class="flex flex-wrap gap-2">
          <a
            v-if="github"
            :href="github"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3 py-1 rounded bg-primary text-background font-bold text-sm hover:scale-105 duration-200"
          >
            GitHub
          </a>

          <a
            v-if="link"
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3 py-1 rounded border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-background duration-200"
          >
            Voir plus
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: {
    type: Array,
    default: () => []
  },
  image: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: "mingcute:code-fill"
  },
  github: {
    type: String,
    default: ""
  },
  link: {
    type: String,
    default: ""
  }
});
</script>