<template>
  <div>
    <HeaderComponent :title="data.title.rendered" :subtitle="data.content.rendered" />
    <LuxuryCarRental />
    <InfoCar />
    <ServicesComponent />
    <Testimonials />
    <BannerSecundario />
    <CarBrands />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const LuxuryCarRental = defineAsyncComponent(() => import('@/components/LuxuryCarRental.vue'));
const InfoCar = defineAsyncComponent(() => import('@/components/InfoCar.vue'));
const ServicesComponent = defineAsyncComponent(() => import('@/components/ServicesComponent.vue'));
const Testimonials = defineAsyncComponent(() => import('@/components/Testimonials.vue'));
const BannerSecundario = defineAsyncComponent(() => import('@/components/BannerSecundario.vue'));
const CarBrands = defineAsyncComponent(() => import('@/components/CarBrands.vue'));

const props = defineProps({
  data: Object
});
</script>
