<template>
    <div>
      <!-- Footer para pantallas pequeñas (≤ 900px) -->
      <div class="block lg:hidden">
        <FooterMobile/>
      </div>
  
      <!-- Footer para pantallas grandes (> 900px) -->
      <div class="hidden lg:block">
        <FooterDesktop/>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'FooterComponent'
  })
  </script>
  
  <style scoped>
  </style>
  