<script setup>

const props = defineProps(["description", "technologies", "name", "image", "linkSite", "linkGithub"]);

function LinkSite(link) {
  window.open(link, "_blank")
}

function LinkGithub(link) {
  window.open(link, "_blank")
}

</script>

<template>
  <v-card class="bg-transparent d-flex flex-column flex-md-row justify-md-end ga-6 w-100 mb-14" flat>
    <v-card class="bg-transparent d-flex flex-column align-md-end" flat max-width="1000px">
      <p class="text-h4 text-md-h5 text-secondary">{{props.name}}</p>
      <p class="text-body-1 mb-2 text-secondary text-md-right">
        {{ props.description }}
      </p>
      <p class="text-secondary"><span class="text-body-2 font-weight-bold text-secondary">Tecnologias utilizadas:</span> {{ props.technologies }}</p>
      <v-card class="bg-transparent mt-1 d-flex justify-md-end w-100 ga-4 mb-4" flat>
        <v-btn @click="LinkSite(props.linkSite)" class="pa-0" variant="text"><p class="text-body-1 text-decoration-underline">Ver projeto</p></v-btn>
        <v-btn @click="LinkGithub(props.linkGithub)" class="ml-2 pa-0" prepend-icon="mdi-github" variant="text"><p class="text-body-1 text-decoration-underline">Github</p></v-btn>
      </v-card>
    </v-card>
    <v-img width="400" max-width="1000" class="w-100 w-md-50" :src="image"/>
  </v-card>
</template>