
<script setup>
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