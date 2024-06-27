<script setup>

const props = defineProps(["description", "technologies"]);

</script>

<template>
  <v-card class="bg-transparent d-flex justify-end ga-6 w-100 mb-14" flat>
    <v-card class="bg-transparent d-flex flex-column align-end" flat>
      <p class="text-h5 text-secondary">Nome do projeto</p>
      <p class="text-body-1 mb-2 text-secondary text-right">
        {{ props.description }}
      </p>
      <p class="text-secondary"><span class="text-body-2 font-weight-bold text-secondary">Tecnologias utilizadas:</span> {{ props.technologies }}</p>
      <v-card class="bg-transparent mt-1 d-flex justify-end w-100 ga-4" flat>
        <v-btn class="pa-0" variant="text"><p class="text-body-1 text-decoration-underline">Ver projeto</p></v-btn>
        <v-btn class="ml-2 pa-0" prepend-icon="mdi-github" variant="text"><p class="text-body-1 text-decoration-underline">Github</p></v-btn>
      </v-card>
    </v-card>
    <v-img :width="500" src="https://picsum.photos/500/300"/>
  </v-card>
</template>