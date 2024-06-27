<script setup>
import ProjectRight from "@/components/Project/ProjectRight.vue";
import ProjectLeft from "@/components/Project/ProjectLeft.vue";

function openGithub () {
  window.open("https://github.com/marisangela-sousa", "_blank");
}

function openLinkedin() {
  window.open("https://www.linkedin.com/in/marisangela-sousa/", "_blank");
}

function openEmail () {
  window.location.href = "mailto:marisangelalima110@gmail.com"
}

</script>

<template>
  <v-container id="home" class="mt-16 pt-16">
    <v-row class="ga-6">
      <v-col class="bg-transparent d-flex flex-column justify-end ga-4 pb-16 ml-14">
        <v-card class="bg-transparent" flat>
          <p class="text-h3 text-secondary">Olá, sou desenvolvedora front-end</p>
        </v-card>
        <v-card class="bg-transparent h-auto align-self-baseline" flat>
          <p class="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie, nisi semper gravida ornare, elit
            massa vestibulum ex, congue tincidunt est orci id mi. Donec sit amet tellus lectus. Nulla at ornare risus.
            Interdum et malesuada 
          </p>
        </v-card>
        <v-card class="ga-4 bg-transparent d-flex justify-start" flat>
          <v-btn class="bg-primary" flat>
            <p class="text-subtitle-1"> Baixe meu curriculo </p>
          </v-btn>
        </v-card>
      </v-col>
      <v-col class="bg-transparent position-relative">
        <v-card class="bg-primary card">
        </v-card>
        <v-img width="400" class="position-absolute bottom-0 right-10" src="https://picsum.photos/400/500"/>
      </v-col>
    </v-row>
  </v-container>
  <v-card class="bg-primary mt-4" :style="{ height: '50px' }" flat id="projetos">
    <v-container class="d-inline-flex justify-center ga-6">
      <p>HTML</p>
      <p>CSS</p>
      <p>JAVASCRIPT</p>
      <p>TYPSCRIPT</p>
      <p>REACT</p>
      <p>VUE</p>
    </v-container>
  </v-card>
  <v-container class="d-flex flex-column align-center mt-10">
    <p class="text-h3 mb-14 text-secondary">PROJETOS</p>
    <project-left
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie, nisi semper gravida ornare, elit
          massa vestibulum ex, congue tincidunt est orci id mi. Donec sit amet tellus lectus."
        technologies="HTML, CSS, JS"
    />
    <project-right
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie, nisi semper gravida ornare, elit
          massa vestibulum ex, congue tincidunt est orci id mi. Donec sit amet tellus lectus."
      technologies="Vue, Vuetify, javascript"
    />
  </v-container>
  <v-card class="bg-primary d-flex align-center" :style="{ height: '80px' }" id="contatos">
    <v-row class="d-inline-flex pa-4">
      <v-col>
        <p class="text-h6">Marisangela Sousa</p>
      </v-col>
      <v-col class="d-inline-flex ga-10">
        <v-btn @click="openGithub" class="ml-2 pa-0" prepend-icon="mdi-github" variant="text"><p class="text-body-1 text-decoration-underline">Marisangela Sousa</p></v-btn>
        <v-btn @click="openLinkedin" class="ml-2 pa-0" prepend-icon="mdi-linkedin" variant="text"><p class="text-body-1 text-decoration-underline">Marisangela Sousa</p></v-btn>
        <v-btn @click="openEmail" class="ml-2 pa-0" prepend-icon="mdi-gmail" variant="text"><p class="text-body-1 text-decoration-underline">marisangelalima110@gmail.com</p></v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<style>
.card {
  height: 500px;
  width: 400px;
  margin-left: 30px;
  margin-bottom: 20px;
}
</style>