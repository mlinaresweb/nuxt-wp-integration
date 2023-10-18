<template>
  <div class="brands-container py-8 max-w-screen-xl md:mx-12 2xl:mx-auto">
    <h2 class="text-left mb-6 font-semibold text-xl md:ml-12 ml-8 ">Nuestras marcas</h2>
    
    <!-- En pantallas grandes -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6" v-if="isLargeScreen">
      <div v-for="brand in brands" :key="brand.name" class="flex flex-col items-center justify-center">
        <div :class="`brand-image aspect-ratio-box ${brand.name.toLowerCase()}`">
          <NuxtImg 
    :src="brand.imageUrl" 
    :alt="brand.name" 
    :width="brand.width" 
    :height="brand.height" 
    class="max-w-full max-h-full object-contain"
/>
        </div>
        <span class="text-sm mt-2">{{ brand.name }}</span>
      </div>
    </div>
    
    <!-- En pantallas móviles -->
    <swiper v-else :slides-per-view="4"
    :space-between="10">
      <swiper-slide v-for="brand in brands" :key="brand.name">
        <div class="flex flex-col items-center justify-center">
          <div :class="`brand-image aspect-ratio-box ${brand.name.toLowerCase()}`">
            <NuxtImg 
    :src="brand.imageUrl" 
    :alt="brand.name" 
    :width="brand.width" 
    :height="brand.height" 
    class="max-w-full max-h-full object-contain"
/>
          </div>
          <span class="text-sm mt-2">{{ brand.name }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

  
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  type Brand = {
    name: string;
    imageUrl: string;
    width: number;
    height: number;
  };
  
  export default defineComponent({
    name: 'Brands',
    setup() {
      const brands = ref<Brand[]>([
        { name: 'Ferrari', imageUrl: 'https://i.ibb.co/fNw2gbB/ferrari.webp', width:36, height:45 },
        { name: 'Audi', imageUrl: 'https://i.ibb.co/cQDmjwP/audi.webp', width:66, height:26  },
        { name: 'BMW', imageUrl: 'https://i.ibb.co/XyPjtFQ/bmw-1.webp', width:45, height:45  },
        { name: 'Lamborghini', imageUrl: 'https://i.ibb.co/Rc2c0Vc/lamborghini.webp', width:42, height:45  },
        { name: 'Mercedes', imageUrl: 'https://i.ibb.co/7Wc88j2/mercedes.webp', width:43, height:45  },
        { name: 'Maserati', imageUrl: 'https://i.ibb.co/MndThg1/maserati.webp', width:36, height:56  },
        { name: 'Tesla', imageUrl: 'https://i.ibb.co/x8NCtJx/tesla.webp', width:47, height:45  },
        { name: 'Aston Martin', imageUrl: 'https://i.ibb.co/RyZtTHx/astonmartin-1.webp', width:82, height:21  },
        { name: 'Mustang', imageUrl: 'https://i.ibb.co/n7yBpsd/mustang-1.webp', width:76, height:34  },
        { name: 'McLaren', imageUrl: 'https://i.ibb.co/tZWTPMZ/mclaren.webp', width:45, height:45  },
        { name: 'Porsche', imageUrl: 'https://i.ibb.co/gD4CPW2/porsche-1.webp', width:35, height:45  },
        { name: 'Land Rover', imageUrl: 'https://i.ibb.co/MRXmSNT/landrover.webp', width:68, height:39  },
        { name: 'Rolls Royce', imageUrl: 'https://i.ibb.co/GF29KDB/rollsroys.webp', width:29, height:36  },
        { name: 'Jaguar', imageUrl: 'https://i.ibb.co/Bcs9Vth/jaguar.webp', width:47, height:48  },
        { name: 'Bentley', imageUrl: 'https://i.ibb.co/61nnv4f/bentley.webp', width:79, height:45  },
        { name: 'Hummer', imageUrl: 'https://i.ibb.co/vZGtk37/hummer-logo-1.webp' , width:88, height:57 },
      ]);
      
      const screenWidth = ref<number>(0);  // valor inicial

    const isLargeScreen = computed(() => {
      return screenWidth.value > 768;  // This value can be adjusted as per your requirement
    });

    const updateScreenWidth = () => {
      screenWidth.value = window.innerWidth;
    };

    onMounted(() => {
      updateScreenWidth();  // Establecer el valor inicial en el montaje
      window.addEventListener('resize', updateScreenWidth);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateScreenWidth);
    });


      return {
        brands,
        isLargeScreen
      };
    },
  });
  </script>
  
  <style scoped>

  </style>
  