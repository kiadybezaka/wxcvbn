<script setup>
  import AppHeader from '../components/AppHeader.vue'
  import SayHello from '../components/SayHello.vue'
  // import { useRoute } from 'vue-router';
  // const route = useRoute();
  // const name = route.params.name;  // Récupère le paramètre de la route

  import { useMainStore } from '../store/mainStore';
  import { computed } from 'vue';

// Initialize store and reactive data
const store = useMainStore();
const connectedUser = computed(() => store.connectedUser);

</script>
<template>
  <main>
    <AppHeader />
    <SayHello :name="connectedUser.name" :desc="connectedUser.description"/>
  </main>
</template>