<template>
    <div>
      <HeaderComponent :title="data.title.rendered" :subtitle="data.content.rendered"></HeaderComponent>
      <div class="blog-container" v-if="posts.length">
        <div v-for="post in posts" :key="post.id" class="blog-post">
          <h2>{{ post.title.rendered }}</h2>
          <div v-html="post.content.rendered"></div>
        </div>
      </div>
      <p v-else>No hay posts disponibles.</p>
      <div>Current Route: {{ $route.path }}</div>
      <div>Route Params: {{ route.params }}</div>


    </div>
  </template>
  
  <script setup>
  import { ref, onMounted,watchEffect   } from 'vue';
  import { useRoute } from 'vue-router';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import { fetchPosts } from '@/services/axios'; 
  
  const props = defineProps({
    data: Object
  });
  
  const posts = ref([]);
  const route = useRoute();  // Usamos el hook useRoute para obtener la ruta actual.
  
  watchEffect(async () => {
    const lang = route.params.slug[0] || 'es'; 
    console.log("Current Language:", lang);
    posts.value = await fetchPosts(lang);
  });

  </script>
  
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  
  .blog-container {
      font-family: 'Poppins', sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
  }
  
  .blog-post {
      background-color: #ffffff;
      padding: 30px;
      margin-bottom: 30px;
      border-radius: 12px;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease;
  }
  
  .blog-post:hover {
      transform: translateY(-10px);
  }
  
  .blog-post h2 {
      margin-top: 0;
      margin-bottom: 20px;
      color: #2C3E50;
      font-size: 28px;
      font-weight: 600;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
  }
  
  .blog-post div {
      color: #34495E;
      font-size: 18px;
      line-height: 1.8;
      word-wrap: break-word;
  }
  </style>
