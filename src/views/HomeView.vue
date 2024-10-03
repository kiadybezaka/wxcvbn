<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMainStore } from '../store/mainStore';

const store = useMainStore();

const router = useRouter();
const nameInput = ref('');  // Référence pour stocker le nom saisi
const descInput = ref('');  // Référence pour stocker la description saisie

const goToHelloPage = () => {
  store.updateConnectedUser({name: nameInput.value,description: descInput.value});
  if (nameInput.value.trim() && descInput.value.trim()) {
    router.push(`/hello`);
  }
};
</script>

<template>
  <main>
    <AppHeader />
    <h2>Home View</h2>
    <div class="input-section">
    <input
      type="text"
      v-model="nameInput"
      placeholder="Enter your name"
      class="border rounded px-4 py-2"
    />
     <input
      type="textarea"
      v-model="descInput"
      placeholder="Enter your description"
      class="border rounded px-4 py-2"
    />
    <button @click="goToHelloPage" class="bg-blue-500 text-white px-4 py-2 rounded">
      Go
    </button>
  </div>
  <AppFooter/>
  </main>
</template>