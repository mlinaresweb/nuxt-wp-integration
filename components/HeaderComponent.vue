<template>
  <section
    class="relative w-full bg-cover bg-center bg-no-repeat bg-[url(https://i.postimg.cc/5y1nQFpv/bannercoche.webp)]"

  >
    <!-- Degradado oscuro -->
    <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60"></div>

    <!-- Nav Component -->
    <NavComponent></NavComponent>

    <div
      class="relative z-10 max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="mx-16 text-left ltr:sm:text-left rtl:sm:text-right">
        <h1 class="text-3xl font-extrabold sm:text-5xl text-white" style="max-width: 380px;">
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
    title: String,
    subtitle: String,
  });
</script>
