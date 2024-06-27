<script setup>
import {useTheme} from 'vuetify'
import {ref} from "vue";

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme'
}

const homeClicado = ref(true);
const contatosClicado = ref(false);
const activeSection = ref('home');

function ActiveSection (section) {
  activeSection.value = section;
}

function isActive (section) {
  return activeSection.value === section;
}


</script>

<template>
  <v-card class="d-inline-flex justify-center w-100 bg-background ga-6 pa-5 position-fixed top-0" elevation="0">
    <v-btn @click="ActiveSection('home')" href="#home" class="bg-transparent" variant="text" flat>
      <p :class="isActive('home') ? 'text-primary' : 'text-tertiary'" class="text-subtitle-1">Home</p>
    </v-btn>
    <v-btn @click="ActiveSection('projetos')" href="#projetos" class="bg-transparent" variant="text" flat>
      <p :class="isActive('projetos') ? 'text-primary' : 'text-tertiary'" class="text-subtitle-1">Projetos</p>
    </v-btn>
    <v-btn @click="ActiveSection('contatos')" href="#contatos" class="bg-transparent" variant="text" flat>
      <p :class="isActive('contatos') ? 'text-primary' : 'text-tertiary'" class="text-subtitle-1">Contatos</p>
    </v-btn>
    <p class="text-subtitle-1">
      <v-btn class="bg-transparent" variant="text" flat>
        <span class="text-secondary">PT</span>
      </v-btn>
      <span class="text-tertiary"> | </span>
      <v-btn class="bg-transparent" variant="text" flat>
        <span class="text-tertiary">EN</span>
      </v-btn>
    </p>
    <v-btn @click="toggleTheme">toggle theme</v-btn>
  </v-card>
</template>
<style>
</style>