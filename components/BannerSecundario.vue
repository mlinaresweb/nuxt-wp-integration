<template>
  <div class="relative mb-12 h-56 md:h-64 lg:h-72 xl:h-auto">
    <NuxtImg src="https://i.ibb.co/K9mnphf/banner22.webp" alt="Banner" loading="lazy" sizes="(max-width: 640px) 600px, 1920px"  class="w-full h-full object-cover" />
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent opacity-70"></div>
  </div>
</template>

  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Banner',
  });
  </script>
  