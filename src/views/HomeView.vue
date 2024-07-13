<script setup>
import ProjectRight from "@/components/Project/ProjectRight.vue";
import ProjectLeft from "@/components/Project/ProjectLeft.vue";
import {downloadCv} from "@/stores/download.js";
import Eu from "../assets/Eu.jpg";
import CapaCamilla from "../assets/capa-camilla-mendes.png";
import CapaPortfolio from "../assets/capa-portfolio.png"

function openGithub() {
  window.open("https://github.com/marisangela-sousa", "_blank");
}

function openLinkedin() {
  window.open("https://www.linkedin.com/in/marisangela-sousa/", "_blank");
}

function openEmail() {
  window.location.href = "mailto:marisangelalima110@gmail.com"
}

function Download() {
  downloadCv()
}


</script>

<template>
  <v-container id="home" class="mt-8 mt-sm-16 pt-16 section d-flex">
    <v-row>
      <v-col cols="12" md="6"
             class="d-flex flex-column justify-center justify-md-end align-center align-md-end align-xl-end ga-4 pb-md-16">
        <v-card class="bg-transparent" flat>
          <v-card class="bg-transparent align-self-center" flat max-width="700px">
            <p class=" text-h4 text-lg-h3 text-xl-h2 text-secondary mb-4"> Olá, sou desenvolvedora front-end </p>
          </v-card>
          <v-card class="bg-transparent h-auto w-md-100" flat max-width="600px">
            <p class="text-secondary text-md-body-1 text-xl-h6 mb-2">
              Me chamo Marisangela, tenho quase um ano de experiencia como desenvolvedora front-end, mais precisamente com
              Vuejs,
              typescript e Vuetify, e estudo desenvolvimento web a três anos.
            </p>
            <p class="text-secondary text-md-body-1 text-xl-h6">
              Sou graduanda em Design Digital na Universidade Federal do Ceará,
              que foi onde conheci o desenvolvimento web e o mundo da programação em geral.
            </p>
            <v-card class="ga-4 bg-transparent d-flex justify-start mt-5" flat>
              <v-btn @click="Download" class="bg-primary" flat>
                <p class="text-subtitle-1"> Baixe meu curriculo </p>
              </v-btn>
            </v-card>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="12" md="6"
             class="bg-transparent position-relative d-flex justify-center justify-lg-end justify-xl-center pr-md-5">
        <v-card class="bg-primary card">
        </v-card>
        <v-img width="400" class="position-absolute bottom-0 mr-10" :src="Eu" alt="Foto da autora do portfolio"/>
      </v-col>
    </v-row>
  </v-container>
  <v-card class="bg-primary mt-4 d-flex justify-center" :style="{ height: '50px' }" flat id="projetos">
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
    <v-card flat class="bg-transparent pa-10 pa-md-0">
      <project-left
          name="Portfólio"
          description="Projeto criado para mostrar meus projetos de uma forma bonita e organizada. Também criei o projeto com o objetivo de programar mais em VueJs e fortalecer
                      alguns conceitos do framework e da biblioteca vuetify."
          technologies="VueJS, Vuetify, Javascript"
          link-site="marisangela-sousa.vercel.app"
          link-github="https://github.com/marisangela-sousa/meu-portfolio"
          :image="CapaPortfolio"
      />
      <project-right
          name="Blog Camilla Mendes"
          description="Esse site é um blog ficticio para uma pessoa ficticia chamada Camilla Mendes. O projeto foi criado com o objetivo
                       de programar um pouco em react para relembrar os conceitos e também estudar um pouco de Clean Code."
          technologies="ReactJS, HTML, CSS, Javascript"
          link-site="https://camilla-mendes.vercel.app"
          link-github="https://github.com/marisangela-sousa/Site-Camilla-Mendes"
          :image="CapaCamilla"
      />
    </v-card>
  </v-container>
  <v-card class="bg-primary d-flex align-center" :style="{ height: '120px' }" id="contatos">
    <v-row class="d-inline-flex pa-4">
      <v-col cols="6" md="5" class="align-self-center">
        <p class="text-h6">Marisangela Sousa</p>
      </v-col>
      <v-col cols="6" md="7" class="d-flex flex-column flex-md-row align-start justify-md-end ga-md-5">
        <v-btn @click="openGithub" class="ml-2 pa-0" prepend-icon="mdi-github" variant="text">
          <p class="text-body-1 text-decoration-underline">Marisangela Sousa</p>\
        </v-btn>
        <v-btn @click="openLinkedin" class="ml-2 pa-0" prepend-icon="mdi-linkedin" variant="text">
          <p class="text-body-1 text-decoration-underline">Marisangela Sousa</p>
        </v-btn>
        <v-btn @click="openEmail" class="ml-2 pa-0" prepend-icon="mdi-gmail" variant="text">
          <p class="text-body-1 text-decoration-underline">marisangelalima110@gmail.com</p>
        </v-btn>
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