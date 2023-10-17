<template>
  <div class="brands-container py-8 md:mx-16 lg:mx-16 max-w-screen-xl mx-auto">
    <h2 class="text-start mb-6 font-semibold text-xl ml-12">Nuestras marcas</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      <div v-for="brand in brands" :key="brand.name" class="flex flex-col items-center justify-center">
        <img :src="brand.imageUrl" :alt="brand.name" class="w-8 h-auto object-contain mb-2">
        <span class="text-sm">{{ brand.name }}</span>
      </div>
    </div>
  </div>
</template>

  
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  type Brand = {
    name: string;
    imageUrl: string;
  };
  
  export default defineComponent({
    name: 'Brands',
    setup() {
      const brands = ref<Brand[]>([
        { name: 'Ferrari', imageUrl: 'https://i.ibb.co/fNw2gbB/ferrari.webp' },
        { name: 'Audi', imageUrl: 'https://i.ibb.co/cQDmjwP/audi.webp' },
        { name: 'BMW', imageUrl: 'https://i.ibb.co/XyPjtFQ/bmw-1.webp' },
        { name: 'Lamborghini', imageUrl: 'https://i.ibb.co/Rc2c0Vc/lamborghini.webp' },
        { name: 'Mercedes', imageUrl: 'https://i.ibb.co/7Wc88j2/mercedes.webp' },
        { name: 'Maserati', imageUrl: 'https://i.ibb.co/MndThg1/maserati.webp' },
        { name: 'Tesla', imageUrl: 'https://i.ibb.co/x8NCtJx/tesla.webp' },
        { name: 'Aston Martin', imageUrl: 'https://i.ibb.co/RyZtTHx/astonmartin-1.webp' },
        { name: 'Mustang', imageUrl: 'https://i.ibb.co/n7yBpsd/mustang-1.webp' },
        { name: 'McLaren', imageUrl: 'https://i.ibb.co/tZWTPMZ/mclaren.webp' },
        { name: 'Porsche', imageUrl: 'https://i.ibb.co/gD4CPW2/porsche-1.webp' },
        { name: 'Land Rover', imageUrl: 'https://i.ibb.co/MRXmSNT/landrover.webp' },
        { name: 'Rolls Royce', imageUrl: 'https://i.ibb.co/GF29KDB/rollsroys.webp' },
        { name: 'Jaguar', imageUrl: 'https://i.ibb.co/Bcs9Vth/jaguar.webp' },
        { name: 'Bentley', imageUrl: 'https://i.ibb.co/61nnv4f/bentley.webp' },
        { name: 'Hummer', imageUrl: 'https://i.ibb.co/vZGtk37/hummer-logo-1.webp' },
      ]);
  
      return {
        brands,
      };
    },
  });
  </script>
  
  <style scoped>

  </style>
  