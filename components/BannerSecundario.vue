<template>
  <div class="relative mb-12 h-56 md:h-64 lg:h-72 xl:h-auto">
    <NuxtImg
   src="/banner222.webp"
   width="1200" height="auto"
   alt="Banner"
   loading="lazy"
   class="w-full h-full object-cover"
/>

    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent opacity-70"></div>
  </div>
</template>

  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Banner',
  });
  </script>
  