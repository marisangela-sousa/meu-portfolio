<script setup lang="js">
import MenuSuperior from "@/components/MenuSuperior.vue";
</script>
<template>
  <header>
    <MenuSuperior/>
  </header>
  <main>
    <router-view/>
  </main>
</template>