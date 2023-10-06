<script setup>
import { ref, defineAsyncComponent } from 'vue'
const route = useRoute();

let slug = ref('home')  // valor por defecto

if (route.params.slug) {
    let lastIndex = route.params.slug.length - 1
    slug.value = route.params.slug[lastIndex] || route.params.slug[lastIndex - 1];
}

const loadComponent = (name) => {
    return defineAsyncComponent(() => import(`@/components/pages/${name}.vue`))
}

const CurrentComponent = ref(loadComponent(slug.value));

const { data, pending, error, refresh } = await useFetch('http://localhost/cochesdelujo/wp-json/wp/v2/pages', {
    query: { slug: slug.value }
});
</script>

<template>
<div>
    <component :is="CurrentComponent" v-if="CurrentComponent && data[0]" :data="data[0]"></component>
    <p v-if="error">Error loading the page</p>
</div>
</template>
