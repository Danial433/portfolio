<template>
  <div class="py-24 pt-16 px-2 mx-auto max-w-5xl">
    <HeroComp />

    <div id="about" class="py-8 text-center rounded">
      <h2 class="text-3xl font-bold text-center">À Propos</h2>
      <Separator />
    </div>
    <div class="grid md:grid-cols-2 md:gap-4 w-full gap-12">
      <WindowContainer title="À propos" class="md:row-span-2" icon="mingcute:code-fill">
        <div class="">
          <div class="my-2 mt-4 text-md">
            <h3 class="text-xl mb-2 font-bold max-md:text-center">À Propos</h3>
            <p>
              Je suis Muhammad Danial A'qil, étudiant en première année de BUT Réseaux & Télécommunications.
            </p>
            <p class="mt-2">
              Je m'intéresse particulièrement aux réseaux, au développement web et aux systèmes connectés.
              À travers mes projets, j'aime comprendre comment les technologies fonctionnent et développer
              des solutions concrètes.
            </p>
            <p class="mt-2">
              Je travaille actuellement sur plusieurs projets, notamment SAE_Thales17, une plateforme web
              permettant la gestion et la consultation d'images avec une future intégration Raspberry Pi.
            </p>
          </div>
        </div>
      </WindowContainer>
      <WindowContainer title="Formation" icon="mingcute:document-2-fill">
        <div class="text-center my-2 mb-4">
          <div class="my-2 mt-4 text-md text-left">
            <h3 class="text-xl mb-2 font-bold max-md:text-center">Formation</h3>
            <p>Je suis actuellement en première année de BUT Réseaux & Télécommunications.
              Cette formation me permet de développer des compétences en réseaux, systèmes,
              télécommunications et développement web.</p>
          </div>
          <button class="px-4 py-2 mt-2 bg-primary font-semibold rounded text-background">
            <Icon icon="mingcute:download-2-fill" class="text-xl inline mr-1" />
            <span> En savoir plus</span>
          </button>
        </div>
      </WindowContainer>
      <WindowContainer title="Objectif" icon="mingcute:paw-fill">
        <div class="text-center my-2 mb-4">
          <div class="my-2 mt-4 text-md text-left">
            Mon objectif est de progresser dans les domaines des réseaux,
            de l’administration système et du développement web, afin de construire
            des projets utiles et bien structurés.
          </div>

          <button class="px-4 py-2 mt-2 bg-primary font-semibold rounded text-background">
            <Icon icon="mingcute:sparkles-2-fill" class="text-xl inline mr-1" />
            <span>Voir mes projets</span>
          </button>
        </div>
      </WindowContainer>
      <WindowContainer id="skills" title="Compétences & technologies" icon="mingcute:server-fill" class="md:col-span-2 min-w-0">
        <div class="my-2 mb-4 text-center">
          <div class="flex gap-4 max-md:flex-col w-full items-center">
            <div class="my-2 mt-4 text-md md:text-right w-full">
              <h3 class="text-xl mb-2 font-bold max-md:text-center">Compétences en développement</h3>
              <p>Je développe progressivement mes compétences en développement web à travers des projets académiques et personnels. J'utilise principalement HTML, CSS, PHP et MySQL pour créer des applications web simples et fonctionnelles, tout en découvrant de nouvelles technologies comme Vue.js et JavaScript moderne.</p>
            </div>
            <div class="my-2 text-md text-left md:w-1/2 w-full">
              <!--  -->
              <Vue3Marquee class="rounded overflow-hidden" :duration="25">
                <template v-for="(logo, text) in prog.tech">
                  <div
                    class="overflow-hidden mx-2 rounded-md bg-secondary px-4 py-2 hover:scale-110 hover:bg-primary hover:text-background duration-300">
                    <Icon :icon="'devicon:' + logo" class="text-xl inline mr-2" />
                    <b>{{ text }}</b>
                  </div>
                </template>
              </Vue3Marquee>
            </div>
          </div>
          <Separator icon="mingcute:close-fill" />
          <div class="flex gap-4 max-md:flex-col w-full flex-row-reverse items-center">
            <div class="my-2 mt-4 text-md md:text-left w-full">
              <h3 class="text-xl mb-2 font-bold max-md:text-center">Outils Utilisés</h3>
              <p>Dans le cadre du BUT Réseaux & Télécommunications, j'utilise différents outils pour la configuration, l'analyse et le développement de solutions réseaux. Je travaille notamment avec Linux, Cisco Packet Tracer, Wireshark et Raspberry Pi afin de mieux comprendre les infrastructures et systèmes connectés.</p>
            </div>
            <div class="my-2 text-md text-left md:w-1/2 w-full">
              <!--  -->
              <Vue3Marquee class="rounded overflow-hidden" :duration="25">
                <template v-for="(logo, text) in prog.tool">
                  <div
                    class="overflow-hidden mx-2 rounded-md bg-secondary px-4 py-2 hover:scale-110 hover:bg-primary hover:text-background duration-300">
                    <Icon :icon="'devicon:' + logo" class="text-xl inline mr-2" />
                    <b>{{ text }}</b>
                  </div>
                </template>
              </Vue3Marquee>
            </div>
          </div>
          <Separator icon="mingcute:celebrate-fill" />
          <div class="mt-8 relative">
            <div class="text-center">
              <h3 class="text-3xl mb-2 font-bold max-md:text-center">Langages de Programmation Utilisés</h3>
              <p>Je continue à développer mes compétences en programmation en pratiquant différents langages selon les besoins de mes projets. Mon objectif est d'acquérir une base solide en développement tout en restant ouvert à l'apprentissage de nouvelles technologies.</p>
            </div>
            <div class="flex flex-wrap gap-4 my-8 justify-center">
              <template v-for="(icon, text, i) in prog.lang">
                <div class="border-secondary border-2 px-3 py-2 rounded" :style="{ opacity: 4 / (i + 1) }">
                  <Icon :icon="'devicon:' + icon" style="font-size: 4em" class="inline mb-2" />
                  <p>
                    {{ text }}
                  </p>
                </div>
              </template>
            </div>
          </div>
        </div>
      </WindowContainer>
    </div>
    <div id="projects" class="mt-24 mb-16">
      <h2 class="text-3xl font-bold text-center">Projets</h2>
      <Separator />
    </div>
    <WindowContainer title="SAE_Thales17" class="mx-auto max-w-sm" icon="mingcute:code-fill">
      <div class="p-2">
        <h3 class="text-lg text-center">Plateforme web de galerie</h3>
        <p class="mt-2 text-center">
          Projet principal développé avec HTML, CSS, PHP et MySQL.
          Il comprend une gestion d'utilisateurs, un système de rôles,
          une galerie d'images et une future intégration avec Raspberry Pi.
        </p>
      </div>
    </WindowContainer>
  </div>
</template>

<script setup>
import WindowContainer from "../components/WindowContainer.vue";
import { Vue3Marquee } from "vue3-marquee";
import HeroComp from "../components/HeroComp.vue";

const prog = {
  tech: {
    HTML: "html5",
    CSS: "css3",
    PHP: "php",
    MySQL: "mysql",
    Vue: "vuejs",
    Javascript: "javascript",
    Python: "python",
    Linux: "linux"
  },
  tool: {
    "Visual Studio Code": "vscode",
    Git: "git",
    Github: "github",
    "Cisco Packet Tracer": "",
    Wireshark: "",
    LoRa: "",
    "Raspberry Pi": "raspberrypi"
  },
  lang: {
    PHP: "php",
    Javascript: "javascript",
    Python: "python",
    Java: "java"
  }
};
</script>
