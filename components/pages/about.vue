<template>
  <div class="p-4">
    <form @submit.prevent="submitForm" class="space-y-4">
      <input class="border p-2 w-full rounded" v-model="formData.yourName" placeholder="Your Name" required />
      
      <input type="email" class="border p-2 w-full rounded" v-model="formData.yourEmail" placeholder="Your Email" required />
      
      <input class="border p-2 w-full rounded" v-model="formData.yourSubject" placeholder="Your Subject" required />
      
      <textarea class="border p-2 w-full rounded h-32" v-model="formData.yourMessage" placeholder="Your Message" required></textarea>
      
      <button type="submit" class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  yourName: '',
  yourEmail: '',
  yourSubject: '',
  yourMessage: ''
});

const submitForm = async () => {
  const response = await sendDataToWP(formData.value);
  if (response.status === 'mail_sent') {
    alert('Mensaje enviado con éxito.');
  } else {
    alert('Error al enviar el mensaje.');
  }
};

const sendDataToWP = async (data: any) => {
  const apiUrl = 'https://wordpress-1123256-3934790.cloudwaysapps.com/wp-json/contact-form-7/v1/contact-forms/21/feedback';

  const formData = new FormData();
  formData.append('your-name', data.yourName);
  formData.append('your-email', data.yourEmail);
  formData.append('your-subject', data.yourSubject);
  formData.append('your-message', data.yourMessage);

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: formData
    });
    return await response.json();
  } catch (error) {
    console.error("There was an error:", error);
  }
};


</script>
