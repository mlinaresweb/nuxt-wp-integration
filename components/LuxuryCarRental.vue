<template>
  <div class="bg-white p-8 md:p-12 rounded-lg md:mx-12 lg:mx-12 w-full overflow-hidden  ">
    <h2 class="text-2xl font-semibold mb-10 mt-4">Alquiler de coches de Lujo Barcelona</h2>
    <p class="mb-14 md:pr-20">Vive una experiencia inolvidable al volante del coche de tus sueños. En nuestra extensa gama de vehículos, encontrarás las marcas más prestigiosas y exclusivas del mercado. Desde un superdeportivo que te hará sentir la emoción de la velocidad, hasta un espacioso y cómodo SUV ideal para disfrutar de una agradable excursión en familia. Puedes alquilarlo por horas o días, o si lo prefieres, explorar nuestras rutas y experiencias Vip para descubrir la cultura y los idílicos paisajes de Catalunya. Con más de una década de experiencia en el alquiler de coches de lujo, te garantizamos que no te decepcionaremos.</p>

    <swiper
    :slides-per-view="1.2"
    :space-between="10"
    :breakpoints="{
      640: {
            slidesPerView: 3.2,
        },
        1024: {
            slidesPerView: 4.2,
        }
    }"
>
      <swiper-slide v-for="car in cars" :key="car.name">
        <div>
          <div class="relative grid h-[22rem] w-full max-w-[28rem] flex-col items-end justify-start overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 ">
            <div :style="{ backgroundImage: `url(${car.image})` }" loading="lazy"  class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-cover bg-center text-gray-700 shadow-none ">
              <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/100 via-black/0"></div>
            </div>
            <div class="relative p-6 px-6">
              <p class="block font-sans font-semibold leading-snug tracking-normal text-white antialiased">
                {{ car.description }}
              </p>
              <p class="-mb-2 text-left text-orange-400">{{ car.price }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>


<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const cars = ref([
      {
        name: 'BMW',
        image: 'https://i.ibb.co/gd9y9Dd/bmw-2.webp',
        description: 'Alquiler de BMW',
        price: '€150 / al dia'
      },
      {
        name: 'Porsche',
        image: 'https://i.ibb.co/f4nf2ZZ/porsche-2.webp',
        description: 'Alquiler de Porsche',
        price: '€150 / al dia'
      },
      {
        name: 'Mustang', 
        image: 'https://i.ibb.co/DLT0JmJ/mustang-2.webp',
        description: 'Alquiler de Mustang', 
        price: '€150 / al dia'
      },
      {
        name: 'Lamborghini',
        image: 'https://i.ibb.co/J2gNntg/lambo-1.webp',
        description: 'Alquiler de Lamborghini',
        price: '€150 / al dia'
      },
      {
        name: 'BMW',
        image: 'https://i.ibb.co/gd9y9Dd/bmw-2.webp',
        description: 'Alquiler de BMW',
        price: '€150 / al dia'
      },
    ])

    return {
      cars
    }
  }
}
</script>

  
  <style scoped>

  </style>
  
  <style scoped>

  </style>
  