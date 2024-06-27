<template>
  <v-container>
    <v-row class="ga-6">
      <v-col class="bg-transparent d-flex flex-column justify-end ga-4 pb-16 ml-14">
        <v-card class="bg-transparent" flat>
          <p class="text-h3">Olá, sou desenvolvedora front-end</p>
        </v-card>
        <v-card class="bg-transparent h-auto align-self-baseline" flat>
          <p>
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
  <v-card class="bg-primary mt-4" :style="{ height: '50px' }" flat>
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
    <p class="text-h3 mb-14">PROJETOS</p>
    <v-card class="bg-transparent d-flex justify-start ga-6 w-100" flat>
      <v-img :width="500" src="https://picsum.photos/500/300"/>
      <v-card class="bg-transparent" flat>
        <p class="text-h5">Nome do projeto</p>
        <p class="text-body-1 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie, nisi semper gravida ornare, elit
          massa vestibulum ex, congue tincidunt est orci id mi. Donec sit amet tellus lectus.
        </p>
        <p><span class="text-body-2 font-weight-bold">Tecnologias utilizadas:</span> HTML, CSS</p>
        <v-card class="bg-transparent mt-1" flat>
          <v-btn class="pa-0" variant="text"><p class="text-body-1 text-decoration-underline">Ver projeto</p></v-btn>
          <v-btn class="ml-2 pa-0" prepend-icon="mdi-github" variant="text">Github</v-btn>
        </v-card>
      </v-card>
    </v-card>
    <v-card>
      aaaaaaaa
    </v-card>
  </v-container>
</template>
<style>
.card {
  height: 500px;
  width: 400px;
  margin-left: 30px;
  margin-bottom: 20px;
}
</style>
<script setup>
</script>