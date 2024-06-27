<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme'
}

</script>

<template>
  <v-card class="d-inline-flex justify-center w-100 bg-transparent ga-6 pa-10" elevation="0">
    <v-btn class="bg-transparent" variant="text" flat>
      <p class="text-subtitle-1 text-primary">Home</p>
    </v-btn>
    <v-btn class="bg-transparent" variant="text" flat>
      <p class="text-subtitle-1 text-tertiary">Projetos</p>
    </v-btn>
    <v-btn class="bg-transparent" variant="text" flat>
      <p class="text-subtitle-1 text-tertiary">Contatos</p>
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