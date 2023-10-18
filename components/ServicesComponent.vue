<template>
  <div class="p-10 md:mx-14 lg:mx-14">
    <h2 class="text-3xl mb-10 mt-6">Otros servicios</h2>
    <Swiper
      :slides-per-view="3"
      :breakpoints="{
        320: { slidesPerView: 1.5, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 20 }
      }"
      class="mySwiper"
    >
      <SwiperSlide
        v-for="servicio in servicios"
        :key="servicio.titulo"
      >
        <div 
          class="relative grid h-[28rem] w-full max-w-[28rem] flex-col items-end justify-start overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700"
        >
          <div 
            class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent shadow-none" 
            :style="`background-image: url(${servicio.imagen});`" 
            loading="lazy"
          >
            <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/100 via-black/0"></div>
          </div>
          <div class="relative p-6 px-6">
            <p class="mb-2 block font-sans font-semibold leading-snug tracking-normal text-white antialiased">
              {{ servicio.titulo }}
            </p>
            <p class="-mb-2 text-left text-orange-400">{{ servicio.info }}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <p class="mt-12">
      Con el objetivo de hacer que tu visita a Barcelona sea única, te ofrecemos diferentes servicios que mejorarán tu estancia. Disfruta de visitas guiadas por Barcelona para descubrir sus rincones más emblemáticos. La comodidad de contratar un chofer exclusivo que te facilitará tus desplazamientos desde el aeropuerto y por toda la ciudad, y la posibilidad de contratar el coche de lujo que más te apetezca.

    </p>
  </div>
</template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        servicios: [
          {
            titulo: "Visita guiada",
            imagen: "https://i.ibb.co/mcmF37B/avion.webp",
            info: "Info"
          },
          {
            titulo: "Recogida en aeropuerto",
            imagen: "https://i.ibb.co/JHYVbQR/ciudad.webp",
            info: "Info"
          },
          {
            titulo: "Servicio Chófer",
            imagen: "https://i.ibb.co/yFjnMzP/volante.webp",
            info: "Info"
          }
        ]
      };
    }
  };
  </script>
  
  
  <style scoped>
  </style>