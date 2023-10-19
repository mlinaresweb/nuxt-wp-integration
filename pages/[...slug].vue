<script setup>
import { shallowRef, ref, defineAsyncComponent } from 'vue'
import { fetchPage } from '@/services/page'; 


const route = useRoute();

let language = ref('es');  
let slug = ref('home');    


if (route.params.slug && route.params.slug.length > 1) {
    language.value = route.params.slug[0]
    slug.value = route.params.slug[1]
    console.log(language.value)
}


// const loadComponent = (name) => {
//     return defineAsyncComponent(() => import(`@/components/pages/${name}.vue`))
// };

// const CurrentComponent = shallowRef(loadComponent(slug.value));

const CurrentComponent = shallowRef(null);

// Función para cargar el componente
const loadComponent = async (name) => {
    const comp = await import(`@/components/pages/${name}.vue`);
    CurrentComponent.value = comp.default;
};

// Carga el componente inicialmente
loadComponent(slug.value);

const { data, pending, error, refresh,  } = await useFetch('https://wordpress-1123256-3934790.cloudwaysapps.com/wp-json/wp/v2/pages', {
    query: { slug: slug.value, language:language.value }
});
useHead(() => ({
  htmlAttrs: {
    lang: language.value
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ],
  
}));
useServerSeoMeta({
    title: () => data.value[0].yoast_head_json.title,
    description: () => data.value[0].yoast_head_json.description,
    ogUrl: () => `https://nuxt-wp-integration.vercel.app/${slug.value}/`,
    ogTitle: () => data.value[0].yoast_head_json.og_title,
    ogDescription: () => data.value[0].yoast_head_json.og_description,
    ogImage: () => data.value[0].yoast_head_json.og_image,
    canonical: ()=> 'https://nuxt-wp-integration.vercel.app/',
    ogType: () => data.value[0].yoast_head_json.og_type,
    ogLocale: () => data.value[0].yoast_head_json.og_locale,
    twitterCard: () => data.value[0].yoast_head_json.twitter_card,
    twitterTitle: () => data.value[0].yoast_head_json.twitter_title,
    twitterDescription: () => data.value[0].yoast_head_json.twitter_description,
    twitterImage: () => data.value[0].yoast_head_json.twitter_image,
});
</script>

<template>
<div>
    <component :is="CurrentComponent" v-if="CurrentComponent && data[0]" :data="data[0]"/>
    <p v-if="error">Error loading the page</p>
</div>
</template>
