<template>
  <div class="py-24 pt-24 px-2 mx-auto max-w-5xl">
    <HeroComp />

    <div id="about" class="py-8 text-center rounded scroll-mt-24">
      <h2 class="text-3xl font-bold text-center">{{ t.home.aboutTitle }}</h2>
      <Separator />
    </div>

    <div class="grid md:grid-cols-2 md:gap-4 w-full gap-12">
      <WindowContainer :title="t.home.aboutCardTitle" class="md:row-span-2" icon="mingcute:code-fill">
        <div>
          <div class="my-2 mt-4 text-md">
            <h3 class="text-xl mb-2 font-bold max-md:text-center">
              {{ t.home.aboutCardTitle }}
            </h3>

            <p>{{ t.home.about1 }}</p>

            <p class="mt-2">
              {{ t.home.about2 }}
            </p>

            <p class="mt-2">
              {{ t.home.about3 }}
            </p>
          </div>
        </div>
      </WindowContainer>

      <WindowContainer :title="t.home.educationTitle" icon="mingcute:document-2-fill">
        <div class="text-center my-2 mb-4">
          <div class="my-2 mt-4 text-md text-left">
            <h3 class="text-xl mb-2 font-bold max-md:text-center">
              {{ t.home.educationTitle }}
            </h3>

            <p>
              {{ t.home.educationText }}
            </p>
          </div>

          <a
            href="#skills"
            class="inline-block px-4 py-2 mt-2 bg-primary font-semibold rounded text-background"
          >
            <Icon icon="mingcute:book-2-fill" class="text-xl inline mr-1" />
            <span>{{ t.home.seeSkills }}</span>
          </a>
        </div>
      </WindowContainer>

      <WindowContainer :title="t.home.objectiveTitle" icon="mingcute:target-fill">
        <div class="text-center my-2 mb-4">
          <div class="my-2 mt-4 text-md text-left">
            {{ t.home.objectiveText }}
          </div>

          <a
            href="#projects"
            class="inline-block px-4 py-2 mt-2 bg-primary font-semibold rounded text-background"
          >
            <Icon icon="mingcute:sparkles-2-fill" class="text-xl inline mr-1" />
            <span>{{ t.home.seeProjects }}</span>
          </a>
        </div>
      </WindowContainer>

      <WindowContainer
        id="skills"
        :title="t.home.skillsTitle"
        icon="mingcute:server-fill"
        class="md:col-span-2 min-w-0 scroll-mt-24"
      >
        <div class="my-2 mb-4 text-center">
          <div class="flex gap-4 max-md:flex-col w-full items-center">
            <div class="my-2 mt-4 text-md md:text-right w-full">
              <h3 class="text-xl mb-2 font-bold max-md:text-center">
                {{ t.home.devSkillsTitle }}
              </h3>

              <p>
                {{ t.home.devSkillsText }}
              </p>
            </div>

            <div class="my-2 text-md text-left md:w-1/2 w-full">
              <Vue3Marquee class="rounded overflow-hidden" :duration="25">
                <template v-for="(logo, text) in prog.tech" :key="text">
                  <div
                    class="overflow-hidden mx-2 rounded-md bg-secondary px-4 py-2 hover:scale-110 hover:bg-primary hover:text-background duration-300"
                  >
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
              <h3 class="text-xl mb-2 font-bold max-md:text-center">
                {{ t.home.toolsTitle }}
              </h3>

              <p>
                {{ t.home.toolsText }}
              </p>
            </div>

            <div class="my-2 text-md text-left md:w-1/2 w-full">
              <Vue3Marquee class="rounded overflow-hidden" :duration="25">
                <template v-for="tool in tools" :key="tool.name">
                  <div
                    class="overflow-hidden mx-2 rounded-md bg-secondary px-4 py-2 hover:scale-110 hover:bg-primary hover:text-background duration-300"
                  >
                    <Icon :icon="tool.icon" class="text-xl inline mr-2" />
                    <b>{{ tool.name }}</b>
                  </div>
                </template>
              </Vue3Marquee>
            </div>
          </div>

          <Separator icon="mingcute:celebrate-fill" />

          <div class="mt-8 relative">
            <div class="text-center">
              <h3 class="text-3xl mb-2 font-bold max-md:text-center">
                {{ t.home.languagesTitle }}
              </h3>

              <p>
                {{ t.home.languagesText }}
              </p>
            </div>

            <div class="flex flex-wrap gap-4 my-8 justify-center">
              <template v-for="(icon, text, i) in prog.lang" :key="text">
                <div
                  class="border-secondary border-2 px-3 py-2 rounded"
                  :style="{ opacity: 4 / (i + 1) }"
                >
                  <Icon :icon="'devicon:' + icon" style="font-size: 4em" class="inline mb-2" />
                  <p>{{ text }}</p>
                </div>
              </template>
            </div>
          </div>
        </div>
      </WindowContainer>
    </div>

    <div id="projects" class="mt-24 mb-16 scroll-mt-24">
      <h2 class="text-3xl font-bold text-center">{{ t.home.projectsTitle }}</h2>
      <Separator />
    </div>

    <div class="grid md:grid-cols-3 gap-4">
      <ProjectCardComp
        v-for="project in t.home.projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :technologies="project.technologies"
        :icon="project.icon"
        :github="project.github"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import WindowContainer from "../components/WindowContainer.vue";
import ProjectCardComp from "../components/ProjectCardComp.vue";
import { Vue3Marquee } from "vue3-marquee";
import HeroComp from "../components/HeroComp.vue";
import { useLanguage } from "@/stores/language";
import { text } from "@/translations/portfolioText";

const { currentLanguage } = useLanguage();

const t = computed(() => text[currentLanguage.value]);

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
  lang: {
    PHP: "php",
    Javascript: "javascript",
    Python: "python",
    Java: "java"
  }
};

const tools = [
  { name: "Visual Studio Code", icon: "devicon:vscode" },
  { name: "Git", icon: "devicon:git" },
  { name: "GitHub", icon: "devicon:github" },
  { name: "Cisco Packet Tracer", icon: "mingcute:router-modem-fill" },
  { name: "Wireshark", icon: "mingcute:search-3-fill" },
  { name: "LoRa", icon: "mingcute:signal-fill" },
  { name: "Raspberry Pi", icon: "devicon:raspberrypi" }
];
</script>