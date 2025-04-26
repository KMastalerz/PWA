<script setup>
import { ref } from 'vue';

useHead({
  title: 'Nuxt 3 PWA',
  link: [
    { rel: 'manifest', href: '/manifest.webmanifest' }
  ],
  meta: [
    { name: 'theme-color', content: '#4DBA87' }
  ]
})

const stateModal = ref(false);
const startModal = () => {
    stateModal.value = true
};

const stopModal = () => {
    stateModal.value = false
};
</script>
<template>
    <BarBlack @toggle-modal="startModal"/>
    <NavBar/>
    <!-- <AppHeader/> -->
    <Modal v-if="stateModal" @toggle-modal="stopModal"/>
    <NuxtPage/>
    <AppFooter/>
</template>
<style scoped>
</style>