<script setup lang="js">
import MenuSuperior from "@/components/MenuSuperior/MenuSuperior.vue";
</script>
<template>
  <header :style="{ backgroundColor: $vuetify.theme.themes.darkTheme.colors.background }">
    <menu-superior/>
  </header>
  <main :style="{ backgroundColor: $vuetify.theme.themes.darkTheme.colors.background }">
    <router-view/>
  </main>
</template>