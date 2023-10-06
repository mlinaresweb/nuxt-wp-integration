<template>
    <div>
      <h1>{{ data.title.rendered }}</h1>
      <div v-html="data.content.rendered"></div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Definir las props que este componente espera
  const props = defineProps({
    data: Object
  });
  </script>
  