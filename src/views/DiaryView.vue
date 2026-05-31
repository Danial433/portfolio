<template>
  <div class="pt-24 p-2 mx-auto max-w-5xl relative z-10">
    <div class="mt-4 mb-8 text-center">
      <p class="text-5xl max-md:text-center font-bold">Hobbies.exe</p>
      <p class="opacity-75 mt-2">
        Mon petit coin personnel sur le web.
      </p>
    </div>

    <div class="bg-background rounded border border-secondary px-4 py-3 mb-8">
      <div class="flex gap-3 border-b border-secondary border-opacity-50 pb-2">
        <Icon icon="mingcute:sparkles-2-fill" class="text-primary" style="font-size: 2.5em" />
        <div>
          <p class="font-bold text-lg">Espace personnel</p>
          <p class="text-sm opacity-60">Passions • Culture web • Créativité</p>
        </div>
      </div>

      <p class="py-2">
        Cette page est une partie plus personnelle de mon portfolio. Elle me permet de présenter
        quelques centres d’intérêt en dehors des projets académiques : manga, jeux vidéo,
        culture japonaise et esthétique web rétro.
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
          <Icon icon="mingcute:book-5-fill" class="text-primary" style="font-size: 2.5em" />
          <div>
            <p class="font-bold text-lg">Manga</p>
            <p class="text-sm opacity-60">Histoires • Univers • Inspiration</p>
          </div>
        </div>
        <p class="py-2">
          J’aime découvrir des univers différents à travers les manga. Cela m’inspire aussi
          pour le design, l’ambiance visuelle et la créativité dans mes projets web.
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
          J’aime tester de nouveaux outils et modifier des projets existants pour comprendre
          comment ils fonctionnent. Ce portfolio m’a permis de découvrir Vue, Vite, npm
          et GitHub Actions.
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
      <p class="text-3xl font-bold text-center mb-6">En ce moment</p>

      <div class="grid md:grid-cols-4 gap-4">
        <div class="bg-background rounded border border-secondary px-4 py-3 text-center">
          <Icon icon="mingcute:book-5-fill" class="text-primary mx-auto" style="font-size: 2.5em" />
          <p class="font-bold mt-2">Lecture</p>
          <p class="text-sm opacity-75">Manga sur AniList</p>
        </div>

        <div class="bg-background rounded border border-secondary px-4 py-3 text-center">
          <Icon icon="mingcute:game-2-fill" class="text-primary mx-auto" style="font-size: 2.5em" />
          <p class="font-bold mt-2">Jeux</p>
          <p class="text-sm opacity-75">Jeux compétitifs</p>
        </div>

        <div class="bg-background rounded border border-secondary px-4 py-3 text-center">
          <Icon icon="mingcute:code-fill" class="text-primary mx-auto" style="font-size: 2.5em" />
          <p class="font-bold mt-2">Apprentissage</p>
          <p class="text-sm opacity-75">Vue, Vite & design web</p>
        </div>

        <div class="bg-background rounded border border-secondary px-4 py-3 text-center">
          <Icon icon="mingcute:planet-fill" class="text-primary mx-auto" style="font-size: 2.5em" />
          <p class="font-bold mt-2">Découverte</p>
          <p class="text-sm opacity-75">Culture japonaise</p>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <p class="text-3xl font-bold text-center mb-6">Blinkies & badges</p>

      <div class="bg-background rounded border border-secondary p-4">
        <p class="text-center opacity-75 text-sm mb-4">
          Une petite touche inspirée de l’esthétique old-web / Y2K.
        </p>

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
      <p class="text-3xl font-bold text-center mb-6">Liste manga</p>

      <div class="bg-background rounded border border-secondary p-4 mb-4">
        <div class="grid md:grid-cols-4 gap-3 text-center">
          <div class="bg-secondary bg-opacity-50 rounded px-3 py-2">
            <p class="text-2xl font-bold text-primary">{{ mangaStats.total }}</p>
            <p class="text-sm opacity-75">entrées</p>
          </div>

          <div class="bg-secondary bg-opacity-50 rounded px-3 py-2">
            <p class="text-2xl font-bold text-primary">{{ mangaStats.completed }}</p>
            <p class="text-sm opacity-75">complétés</p>
          </div>

          <div class="bg-secondary bg-opacity-50 rounded px-3 py-2">
            <p class="text-2xl font-bold text-primary">{{ mangaStats.reading }}</p>
            <p class="text-sm opacity-75">en lecture</p>
          </div>

          <div class="bg-secondary bg-opacity-50 rounded px-3 py-2">
            <p class="text-2xl font-bold text-primary">{{ mangaStats.averageScore }}</p>
            <p class="text-sm opacity-75">moyenne</p>
          </div>
        </div>
      </div>

      <div class="bg-background rounded border border-secondary overflow-hidden">
        <table class="w-full text-left text-sm">
          <thead class="bg-secondary">
            <tr>
              <th class="px-3 py-2">Titre</th>
              <th class="px-3 py-2">Statut</th>
              <th class="px-3 py-2">Chapitres</th>
              <th class="px-3 py-2">Note</th>
            </tr>
          </thead>

          <tbody>
            <tr v-if="loadingManga">
              <td colspan="4" class="px-3 py-4 text-center opacity-75">
                Chargement depuis AniList...
              </td>
            </tr>

            <tr v-else-if="mangaList.length === 0">
              <td colspan="4" class="px-3 py-4 text-center opacity-75">
                Impossible de charger la liste manga AniList pour le moment.
              </td>
            </tr>

            <tr
              v-for="item in mangaList"
              :key="item.id"
              class="border-t border-secondary border-opacity-50"
            >
              <td class="px-3 py-2 font-bold">
                <a
                  :href="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-primary duration-200"
                >
                  {{ item.title }}
                </a>
              </td>

              <td class="px-3 py-2">
                <span class="px-2 py-1 rounded bg-secondary bg-opacity-70 text-xs font-bold">
                  {{ formatStatus(item.status) }}
                </span>
              </td>

              <td class="px-3 py-2">
                {{ item.progress }} / {{ item.chapters }}
              </td>

              <td class="px-3 py-2 text-primary font-bold">
                {{ item.score }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-center mt-4">
        <p class="opacity-75 text-sm mb-3">
          Cette section est chargée automatiquement depuis ma liste manga AniList.
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

    <div class="mt-12 mb-6 bg-background rounded border border-secondary px-4 py-3 text-center">
      <p class="opacity-80">
        Même si cette page est plus personnelle, elle fait aussi partie de mon identité numérique :
        elle montre mes centres d’intérêt, ma créativité et mon envie d’expérimenter avec le web.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

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

const loadingManga = ref(true);
const mangaList = ref([]);

const query = `
query ($username: String) {
  MediaListCollection(userName: $username, type: MANGA) {
    lists {
      name
      entries {
        id
        score
        status
        progress
        media {
          title {
            romaji
            english
          }
          chapters
          siteUrl
        }
      }
    }
  }
}
`;

onMounted(async () => {
  try {
    const response = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        query,
        variables: {
          username: "Jikue"
        }
      })
    });

    const result = await response.json();

    mangaList.value = result.data.MediaListCollection.lists
      .flatMap((list) =>
        list.entries.map((entry) => ({
          id: entry.id,
          title: entry.media.title.romaji || entry.media.title.english || "Titre inconnu",
          status: entry.status,
          score: entry.score || "-",
          progress: entry.progress || 0,
          chapters: entry.media.chapters || "?",
          url: entry.media.siteUrl
        }))
      )
      .sort((a, b) => {
        if (a.status === "CURRENT" && b.status !== "CURRENT") return -1;
        if (a.status !== "CURRENT" && b.status === "CURRENT") return 1;

        const scoreA = typeof a.score === "number" ? a.score : 0;
        const scoreB = typeof b.score === "number" ? b.score : 0;

        return scoreB - scoreA;
      })
      .slice(0, 20);
  } catch (error) {
    console.error("Erreur AniList:", error);
    mangaList.value = [];
  } finally {
    loadingManga.value = false;
  }
});

const mangaStats = computed(() => {
  const total = mangaList.value.length;

  const completed = mangaList.value.filter((item) => item.status === "COMPLETED").length;
  const reading = mangaList.value.filter((item) => item.status === "CURRENT").length;

  const scoredItems = mangaList.value.filter(
    (item) => typeof item.score === "number" && item.score > 0
  );

  const averageScore =
    scoredItems.length > 0
      ? Math.round(scoredItems.reduce((sum, item) => sum + item.score, 0) / scoredItems.length)
      : "-";

  return {
    total,
    completed,
    reading,
    averageScore
  };
});

function formatStatus(status) {
  const statuses = {
    CURRENT: "En lecture",
    COMPLETED: "Complété",
    PAUSED: "En pause",
    DROPPED: "Abandonné",
    PLANNING: "À lire",
    REPEATING: "Relecture"
  };

  return statuses[status] || status;
}
</script>

<style scoped>
.image-render-pixel {
  image-rendering: pixelated;
}
</style>