<script setup>
import {useTheme} from 'vuetify'
import {ref} from "vue";
// import { useI18n } from "vue-i18n";

const theme = useTheme();
// const localeGlobal = useI18n();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme'
}

const activeSection = ref('home');

function ActiveSection(section) {
  activeSection.value = section;
}

// function setLocale(locale) {
//   localeGlobal.locale.value = locale;
// }

</script>

<template>
  <v-card class="d-inline-flex justify-center align-center w-100 bg-background ga-md-6 pt-5 pb-5 pa-md-5 position-fixed top-0" elevation="0">
    <v-btn @click="ActiveSection('home')" href="#home" class="bg-transparent" variant="text" flat>
      <p class="text-subtitle-1 text-tertiary">Home</p>
    </v-btn>
    <v-btn @click="ActiveSection('projetos')" href="#projetos" class="bg-transparent" variant="text" flat>
      <p class="text-subtitle-1 text-tertiary">Projetos</p>
    </v-btn>
    <v-btn @click="ActiveSection('contatos')" href="#contatos" class="bg-transparent" variant="text" flat>
      <p class="text-subtitle-1 text-tertiary">Contatos</p>
    </v-btn>
<!--    <p class="text-subtitle-1">-->
<!--      <v-btn @click="setLocale('pt')" class="bg-transparent" variant="text" flat>-->
<!--        <span class="text-primary font-weight-bold">PT</span>-->
<!--      </v-btn>-->
<!--      <span class="text-tertiary"> | </span>-->
<!--      <v-btn @click="setLocale('en')" class="bg-transparent" variant="text" flat>-->
<!--        <span class="text-tertiary">EN</span>-->
<!--      </v-btn>-->
<!--    </p>-->
    <v-btn @click="toggleTheme" icon flat class="bg-secondary">
      <v-icon >
        mdi-theme-light-dark
      </v-icon>
    </v-btn>
  </v-card>
</template>
<style>
</style>