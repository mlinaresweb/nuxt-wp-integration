<template>
  <section class="relative w-full bg-cover bg-center bg-no-repeat">
  <!-- Imagen adaptativa -->
  <nuxt-img
      :src="desktopImageUrl"
      :srcset="srcsetImages"
      sizes="(max-width: 640px) 640px,(max-width: 380px) 380px 100vw"
      layout="responsive"
      class="absolute inset-0 w-full h-full object-cover"
      alt="banner porsche"
    />
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
  const desktopImageUrl = 'https://i.ibb.co/3FBRsdh/bannercoche-2.webp';
const mobileImageUrl = 'https://i.ibb.co/Qrr8mGc/bannercoche-2-1.webp'; 

const srcsetImages = `${mobileImageUrl} 640w, ${desktopImageUrl} 1920w`;

useHead(() => {
  return {
    link: [
      {
        rel: 'preload',
        href: desktopImageUrl, 
        as: 'image',
        type: 'image/webp',
      },
      {
        rel: 'preload',
        href: mobileImageUrl, 
        as: 'image',
        type: 'image/webp',  
      }
    ]
  };
});
</script>
<style scoped>
.container-texto{
  max-width: 380px;
}
</style>