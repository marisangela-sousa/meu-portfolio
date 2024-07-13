<script setup lang="js">
import NavBar from "@/components/MenuSuperior/NavBar.vue";
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme'
}

</script>
<template>
  <main :class="toggleTheme ? 'bg-background' : 'bg-white'">
    <router-view/>
  </main>
  <header :class="toggleTheme ? 'bg-background' : 'bg-white'">
    <nav-bar />
  </header>
</template>