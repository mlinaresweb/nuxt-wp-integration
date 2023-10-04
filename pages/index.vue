<template>
  <section class="container">
    <HeaderComponent></HeaderComponent>

  </section>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';



export default {
  components: {
    HeaderComponent
}
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
