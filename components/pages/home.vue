<template>
    <div>
      <HeaderComponent :title="data.title.rendered" :subtitle="data.content.rendered"></HeaderComponent>
      <!-- <h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>  -->
      <LuxuryCarRental />
      <InfoCar/>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import HeaderComponent from '@/components/HeaderComponent.vue';
  
  const props = defineProps({
    data: Object
  });
  </script>
  