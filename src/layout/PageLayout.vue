<script setup lang="js">
import MenuSuperior from "@/components/MenuSuperior/MenuSuperior.vue";
</script>
<template>
  <header>
    <MenuSuperior/>
  </header>
  <main>
    <router-view/>
  </main>
</template>