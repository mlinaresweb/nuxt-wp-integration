<template>
  <div>
    <HeaderComponent :title="data.title.rendered" :subtitle="data.content.rendered"/>
    <LuxuryCarRental v-if="LuxuryCarRental"/>
    <InfoCar v-if="InfoCar"/>
    <ServicesComponent v-if="ServicesComponent"/>
    <Testimonials/>
    <BannerSecundario v-if="BannerSecundario"/>
    <CarBrands v-if="CarBrands"/>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

const props = defineProps({
  data: Object
});

const LuxuryCarRental = defineAsyncComponent(() => import('@/components/LuxuryCarRental.vue'));
const InfoCar = defineAsyncComponent(() => import('@/components/InfoCar.vue'));
const ServicesComponent = defineAsyncComponent(() => import('@/components/ServicesComponent.vue'));
const BannerSecundario = defineAsyncComponent(() => import('@/components/BannerSecundario.vue'));
const CarBrands = defineAsyncComponent(() => import('@/components/CarBrands.vue'));
</script>
