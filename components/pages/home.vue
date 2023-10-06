<template>
    <div>
      <HeaderComponent :title="data.title.rendered" :subtitle="data.content.rendered"></HeaderComponent>
      <p>hola</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import HeaderComponent from '@/components/HeaderComponent.vue';
  
  const props = defineProps({
    data: Object
  });
  </script>
  