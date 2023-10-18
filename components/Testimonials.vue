<template>
  <div class="md:mx-24 lg:mx-24 mb-12 mt-8 w-auto p-8 md:p-0">
    <h2 class="text-2xl font-semibold mb-12">¿Qué opinan nuestros clientes?</h2>

    <Swiper
      :slides-per-view="2"
      :breakpoints="{
        320: { slidesPerView: 1.5, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 20 }
      }"
    >
      <SwiperSlide
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.name"
      >
        <div
          :class="[
            index % 2 === 1 ? 'bg-gray-700 text-white' : 'bg-gray-100', 
            'flex flex-col space-y-4 p-8 rounded-lg'
          ]"
        >
          <div class="flex space-x-4">
            <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <h3 class="font-bold">{{ testimonial.name }}</h3>
              <p>{{ testimonial.company }}</p>
            </div>
          </div>
          <p>{{ testimonial.feedback }}</p>
          <div class="mt-4">
            <span v-for="n in 5" :key="n" :class="n <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'">★</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

  
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'TestimonialCard',
    data() {
      return {
        testimonials: [
          {
            name: 'Kathleen Smith',
            company: 'Full Company',
            feedback: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
            rating: 5
          },
          {
            name: 'John Martin',
            company: 'Full Company',
            feedback: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
            rating: 4
          },
          {
            name: 'Manel Linares',
            company: 'Full Company',
            feedback: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
            rating: 4
          },
          {
            name: 'Kevin Smith',
            company: 'Full Company',
            feedback: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
            rating: 4
          }
        ]
      }
    }
  });
  </script>
  <style scoped>

</style>