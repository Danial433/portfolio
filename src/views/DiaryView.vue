<template>
  <div class="p-2 mx-auto max-w-5xl relative z-10">
    <div class="mt-4 mb-8 text-center">
      <p class="text-5xl max-md:text-center font-bold">Hobbies</p>
      <p class="opacity-75 mt-2">
        Une page plus personnelle où je partage mes centres d’intérêt en dehors des cours.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <div class="bg-background rounded border border-secondary px-4 py-3">
        <div class="flex gap-3 border-b border-secondary border-opacity-50 pb-2">
          <Icon icon="mingcute:game-2-fill" class="text-primary" style="font-size: 2.5em" />
          <div>
            <p class="font-bold text-lg">Jeux vidéo compétitifs</p>
            <p class="text-sm opacity-60">Stratégie • Réflexes • Travail d’équipe</p>
          </div>
        </div>
        <p class="py-2">
          J’aime les jeux compétitifs parce qu’ils demandent de la concentration,
          de la stratégie et une prise de décision rapide. C’est aussi un bon moyen
          de travailler la communication en équipe.
        </p>
      </div>

      <div class="bg-background rounded border border-secondary px-4 py-3">
        <div class="flex gap-3 border-b border-secondary border-opacity-50 pb-2">
          <Icon icon="mingcute:movie-fill" class="text-primary" style="font-size: 2.5em" />
          <div>
            <p class="font-bold text-lg">Anime & manga</p>
            <p class="text-sm opacity-60">Univers visuels • Histoires • Inspiration</p>
          </div>
        </div>
        <p class="py-2">
          J’aime découvrir des univers différents à travers les anime et les manga.
          Cela m’inspire aussi pour le design, l’ambiance visuelle et la créativité
          dans mes projets web.
        </p>
      </div>

      <div class="bg-background rounded border border-secondary px-4 py-3">
        <div class="flex gap-3 border-b border-secondary border-opacity-50 pb-2">
          <Icon icon="mingcute:code-fill" class="text-primary" style="font-size: 2.5em" />
          <div>
            <p class="font-bold text-lg">Web & expérimentation</p>
            <p class="text-sm opacity-60">Vue • Design • Templates</p>
          </div>
        </div>
        <p class="py-2">
          J’aime tester de nouveaux outils et modifier des projets existants pour
          comprendre comment ils fonctionnent. Ce portfolio m’a permis de découvrir
          Vue, Vite, npm et GitHub Actions.
        </p>
      </div>

      <div class="bg-background rounded border border-secondary px-4 py-3">
        <div class="flex gap-3 border-b border-secondary border-opacity-50 pb-2">
          <Icon icon="mingcute:planet-fill" class="text-primary" style="font-size: 2.5em" />
          <div>
            <p class="font-bold text-lg">Culture japonaise</p>
            <p class="text-sm opacity-60">Langue • Culture • Découverte</p>
          </div>
        </div>
        <p class="py-2">
          Je commence aussi à m’intéresser à la langue japonaise et à certains aspects
          de la culture japonaise. C’est un centre d’intérêt que j’aimerais développer
          progressivement.
        </p>
      </div>
    </div>

    <div class="mt-12">
      <p class="text-3xl font-bold text-center mb-6">Blinkies & badges</p>

      <div class="bg-background rounded border border-secondary p-4">
        <div class="flex flex-wrap gap-2 justify-center">
          <img
            v-for="blinkie in blinkies"
            :key="blinkie.name"
            :src="blinkie.src"
            :alt="blinkie.name"
            class="h-[31px] w-[88px] image-render-pixel hover:scale-110 duration-200"
          />
        </div>
      </div>
    </div>

    <div class="mt-12">
      <p class="text-3xl font-bold text-center mb-6">Anime / Manga list</p>

      <div class="bg-background rounded border border-secondary overflow-hidden">
        <table class="w-full text-left text-sm">
          <thead class="bg-secondary">
            <tr>
              <th class="px-3 py-2">Titre</th>
              <th class="px-3 py-2">Type</th>
              <th class="px-3 py-2">Statut</th>
              <th class="px-3 py-2">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in animeList"
              :key="item.title"
              class="border-t border-secondary border-opacity-50"
            >
              <td class="px-3 py-2 font-bold">{{ item.title }}</td>
              <td class="px-3 py-2">{{ item.type }}</td>
              <td class="px-3 py-2">{{ item.status }}</td>
              <td class="px-3 py-2 text-primary font-bold">{{ item.score }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-center mt-4">
        <p class="opacity-75 text-sm mb-3">
          Cette section présente quelques anime et manga que je suis ou que j’apprécie.
        </p>

        <a
          href="https://anilist.co/user/Jikue"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-background font-bold rounded hover:scale-105 duration-200"
        >
          <Icon icon="mingcute:external-link-fill" class="text-xl" />
          Voir mon AniList
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const blinkies = [
  {
    name: "Blinkie 1",
    src: import.meta.env.BASE_URL + "blinkies/blinkie1.gif"
  },
  {
    name: "Blinkie 2",
    src: import.meta.env.BASE_URL + "blinkies/blinkie2.gif"
  },
  {
    name: "Blinkie 3",
    src: import.meta.env.BASE_URL + "blinkies/blinkie3.gif"
  },
  {
    name: "Blinkie 4",
    src: import.meta.env.BASE_URL + "blinkies/blinkie4.gif"
  },
  {
    name: "Blinkie 5",
    src: import.meta.env.BASE_URL + "blinkies/blinkie5.gif"
  },
  {
    name: "Blinkie 6",
    src: import.meta.env.BASE_URL + "blinkies/blinkie6.gif"
  },
  {
    name: "Blinkie 7",
    src: import.meta.env.BASE_URL + "blinkies/blinkie7.png"
  },
  {
    name: "Blinkie 8",
    src: import.meta.env.BASE_URL + "blinkies/blinkie8.gif"
  },
  {
    name: "Blinkie 9",
    src: import.meta.env.BASE_URL + "blinkies/blinkie9.png"
  }
];

const animeList = [
  {
    title: "Steins;Gate",
    type: "Anime",
    status: "Complété",
    score: "95"
  },
  {
    title: "Chainsaw Man",
    type: "Manga",
    status: "En lecture",
    score: "90"
  },
  {
    title: "Sousou no Frieren",
    type: "Anime",
    status: "À regarder",
    score: "-"
  },
  {
    title: "One Piece",
    type: "Anime/Manga",
    status: "En cours",
    score: "-"
  }
];
</script>

<style scoped>
.image-render-pixel {
  image-rendering: pixelated;
}
</style>