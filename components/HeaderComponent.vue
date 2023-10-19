<template>
  <section class="adaptive-bg">
  <!-- Imagen adaptativa -->
  
    <!-- Degradado oscuro -->
    <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60"></div>
    <!-- Nav Component -->
    <NavComponent></NavComponent>

    <div
      class="relative z-10 max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="md:mx-16 lg:mx-16 text-left ltr:sm:text-left rtl:sm:text-right">
        <h1 class="text-3xl font-extrabold sm:text-5xl text-white container-texto">
          {{ title }}
        </h1>

        <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white">
          {{ subtitle }}
        </p>

        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <a
            href="#"
            class="block rounded-lg bg-white px-12 py-3 text-sm font-medium text-black shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
          >
            MAS INFO
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
 const props = defineProps({
    title: {
      type: String,
      default: 'Disfruta de tu Porsche carrera' 
    },
    subtitle: {
      type: String,
      default: 'Porsche 911 Carrera S' 
    }
  });


useHead(() => {
  return {
    link: [
      {
        rel: 'preload',
        href: 'https://i.ibb.co/3FBRsdh/bannercoche-2.webp', 
        as: 'image',
        type: 'image/webp',
      },
      {
        rel: 'preload',
        href: 'https://i.ibb.co/Qrr8mGc/bannercoche-2-1.webp', 
        as: 'image',
        type: 'image/webp',  
      }
    ]
  };
});
</script>
<style scoped>
.container-texto {
  max-width: 380px;
}

.adaptive-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* Definimos la imagen por defecto para dispositivos más grandes (desktop) */
  background-image: url('https://i.ibb.co/3FBRsdh/bannercoche-2.webp');
}

/* Utilizamos media queries para cambiar la imagen para dispositivos más pequeños (mobile) */
@media (max-width: 640px) {
  .adaptive-bg {
    background-image: url('https://i.ibb.co/Qrr8mGc/bannercoche-2-1.webp');
  }
}
</style>