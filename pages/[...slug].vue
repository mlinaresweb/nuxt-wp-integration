<script setup>
import { shallowRef, ref, defineAsyncComponent } from 'vue'
const route = useRoute();

let slug = ref('home')  // valor por defecto

if (route.params.slug) {
    let lastIndex = route.params.slug.length - 1
    slug.value = route.params.slug[lastIndex] || route.params.slug[lastIndex - 1];
};

const loadComponent = (name) => {
    return defineAsyncComponent(() => import(`@/components/pages/${name}.vue`))
};

const CurrentComponent = shallowRef(loadComponent(slug.value));

const { data, pending, error, refresh } = await useFetch('https://wordpress-1123256-3934790.cloudwaysapps.com/wp-json/wp/v2/pages', {
    query: { slug: slug.value }
});

useServerSeoMeta({
    title: () => data.value[0].yoast_head_json.title,
    description: () => data.value[0].yoast_head_json.description,
    ogUrl: () => data.value[0].yoast_head_json.og_url,
    ogTitle: () => data.value[0].yoast_head_json.og_title,
    ogDescription: () => data.value[0].yoast_head_json.og_description,
    ogImage: () => data.value[0].yoast_head_json.og_image,
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
