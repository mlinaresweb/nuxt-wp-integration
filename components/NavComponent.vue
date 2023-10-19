<template>
    <nav class="absolute top-0 left-0 right-0 z-20 flex items-center justify-center h-16 px-8 bg-black bg-opacity-70 ">
      <div class="flex items-center justify-between w-full md:mx-16 lg:mx-16">
  
        <!-- Logo a la izquierda solo para móviles -->
        <a href="#" v-if="isMobile" >
          <NuxtImg src="https://i.ibb.co/T8FGxdn/logo.webp" alt="Logo"  width="22" height="33" class=""/>
        </a>
  
  <!-- Texto centrado para móviles, junto con logo para pantallas más grandes -->
  <div class="flex items-center justify-center space-x-4 md:justify-start w-full md:w-auto">
        <NuxtImg src="https://i.ibb.co/T8FGxdn/logo.webp" alt="Logo"  width="22" height="33" v-if="!isMobile"/> <!-- Oculta en móviles -->
        <span class="font-bold text-white">Coches de Lujo</span>
      </div>
 <!-- Menú de navegación para pantallas grandes -->
 <div class="hidden md:flex items-center space-x-8" v-if="!isMobile">
            <a href="#" class="text-white">Inicio</a>
            <a href="#" class="text-white">Alquiler</a>
            <a href="#" class="text-white">Coches</a>
            <a href="#" class="text-white">Blog</a>
            <a href="#" class="text-white">Contacto</a>
            <label :for="dynamicId" class="sr-only">{{ labelForSelectedLanguage }}</label>
              <select :id="dynamicId" aria-label="Seleccionar idioma" v-model="selectedLanguage" @change="changeLanguage" class="text-white bg-transparent border-none appearance-none">
                <option class="bg-black text-white" value="es">ES</option>
                <option class="bg-black text-white" value="en">EN</option>
            </select>
        </div>

        <!-- Icono de menú hamburguesa para pantallas móviles -->
        <div class="flex md:hidden items-center space-x-4" v-if="isMobile">
          <button @click="toggleMenu" class="focus:outline-none" :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'">
    <div class="w-6 h-0.5 bg-white mb-1.5"></div>
    <div class="w-6 h-0.5 bg-white mb-1.5"></div>
    <div class="w-6 h-0.5 bg-white"></div>
</button>

        </div>
      </div>

      <!-- Menú desplegable para pantallas móviles -->
      <div v-if="isMenuOpen" ref="navRef" class="fixed top-16 right-0 bottom-0 w-64 bg-black bg-opacity-70 transform translate-x-0 md:translate-x-full transition-transform ease-in-out duration-300 z-20">
          <div class="flex flex-col space-y-4 mt-4 pl-4">
              <a href="#" class="text-white">Inicio</a>
              <a href="#" class="text-white">Alquilar</a>
              <a href="#" class="text-white">Coches</a>
              <a href="#" class="text-white">Blog</a>
              <a href="#" class="text-white">Contacto</a>
              <label :for="dynamicId" class="sr-only">{{ labelForSelectedLanguage }}</label>
<select :id="dynamicId" aria-label="Seleccionar idioma" v-model="selectedLanguage" @change="changeLanguage" class="text-white bg-transparent border-none appearance-none">
  <option class="bg-black text-white" value="es">ES</option>
  <option class="bg-black text-white" value="en">EN</option>
</select>

          </div>
      </div>
    </nav>
</template>


<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watchEffect, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useOutsideClick } from '@/composables/useOutsideClick';  

const router = useRouter();
const { locale } = useI18n();

// Inicializa selectedLanguage con el valor actual de locale
const selectedLanguage = ref(locale.value);
const isMenuOpen = ref(false);  // Variable para controlar la apertura del menú
const navRef = ref(null);
const outsideClicked = useOutsideClick(navRef);
const windowWidth = ref(0);
const dynamicId = "language-selector";

const labelForSelectedLanguage = computed(() => {
  return selectedLanguage.value === "es" ? "Cambiar idioma (actualmente en Español)" : "Change language (currently in English)";
});

function changeLanguage() {
  locale.value = selectedLanguage.value;

  const newPath = `/${selectedLanguage.value}/${router.currentRoute.value.params.slug[1] || 'home'}`;
  if (router.currentRoute.value.path !== newPath) {
    router.push({ path: newPath });
  }
}
// Cierra el menú cuando se haga clic fuera de él
watch(outsideClicked, (newValue) => {
    if (newValue) {
        isMenuOpen.value = false;
    }
});
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener('resize', updateWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWidth);
});

function updateWidth() {
  windowWidth.value = window.innerWidth;
}

const isMobile = computed(() => windowWidth.value <= 768);  

</script>

<style scoped>


</style>