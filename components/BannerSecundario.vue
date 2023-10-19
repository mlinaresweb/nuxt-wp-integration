<template>
  <div class="relative mb-12 h-56 md:h-64 lg:h-72 xl:h-auto">
    <NuxtImg v-if="isMobile" 
             src="https://i.ibb.co/JdJmMjJ/banner2-2-2.webp" 
             alt="Banner móvil" 
             loading="lazy" 
             class="w-full h-full object-cover" />
    <NuxtImg v-else 
             src="https://i.ibb.co/K9mnphf/banner22.webp" 
             alt="Banner desktop" 
             loading="lazy" 
             class="w-full h-full object-cover" />
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent opacity-70"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  data() {
    return {
      isMobile: ref(false)
    };
  },
  mounted() {
    this.updateViewportWidth();
    window.addEventListener('resize', this.updateViewportWidth);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateViewportWidth);
  },
  methods: {
    updateViewportWidth() {
      this.isMobile = window.innerWidth <= 640; // Ajusta el valor 640 según tus necesidades
    }
  }
});
</script>
