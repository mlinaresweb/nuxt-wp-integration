<template>
  <div>
    <h1>{{ data.title.rendered }}</h1>
    <div v-html="data.content.rendered" ref="contentDiv"></div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineProps } from 'vue';

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup() {
    const contentDiv = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      const form = contentDiv.value?.querySelector('form');

      if (form) {
        form.addEventListener('submit', async (e: Event) => {
          e.preventDefault();

          const formData = new FormData(form);
          try {
            const response = await fetch(form.action, {
              method: 'POST',
              body: formData,
            });

            if (response.ok) {
              // Manejar la respuesta exitosa, por ejemplo:
              alert('Formulario enviado exitosamente!');
            } else {
              // Manejar errores, por ejemplo:
              alert('Hubo un error al enviar el formulario.');
            }
          } catch (error) {
            // Manejar errores de red u otros errores
            console.error('Error enviando el formulario:', error);
          }
        });
      }
    });

    return { contentDiv };
  }
}
</script>
