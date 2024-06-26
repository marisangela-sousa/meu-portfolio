<template>
  <v-container>
    <v-row class="ga-6">
      <v-col class="bg-background d-flex flex-column justify-end ga-4 pb-16 ml-14">
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
      <v-col class="bg-background position-relative">
        <v-card class="bg-primary card">
        </v-card>
        <img class="position-absolute bottom-0 right-10" src="https://picsum.photos/400/500">
      </v-col>
    </v-row>
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