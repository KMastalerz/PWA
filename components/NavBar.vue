<script setup>
    const searchQuery = ref('');
    const showModal = ref(false);


    const displayModal = () => {
        showModal.value = !showModal.value;
    }

</script>
<template>


    <nav class="navbar">
        <!-- is-active -->

        <div class="container is-flex is-align-items-center is-justify-content-space-between">

            <div class="navbar-left is-flex is-align-items-center">
                <img class="logo-image" src="/assets/icons/logo-black.svg" alt="Logo"/>
            </div>

            <div class="navbar-right is-flex is-align-items-center">
                <div class="navbar-menu">
                    <NuxtLink to="/" class="navbar-item">SALE UP TO -60%!</NuxtLink to="/">
                    <NuxtLink to="/" class="navbar-item">NOWOŚCI</NuxtLink to="/">
                    <NuxtLink to="about" class="navbar-item">MĘSKIE</NuxtLink to="/">
                    <NuxtLink to="/" class="navbar-item">DAMSKIE</NuxtLink to="/">
                    <NuxtLink to="/" class="navbar-item">DZIECIĘCE</NuxtLink to="/">
                    <NuxtLink to="/" class="navbar-item">AKCESORIA</NuxtLink to="/">
                    <NuxtLink to="/" class="navbar-item">PROMOCJE</NuxtLink to="/">
                </div>

                <div class="navbar-search">
                    <input type="text" placeholder="Szukaj" class="search-input">
                    <button class="search-button">
                        <img src="/assets/icons/search.svg" alt="Search button"/>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped>

.navbar {
    background-color: white;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;  
}

.navbar-left,
.navbar-right {
    gap: 1rem;
}

.logo-image {
    height: 40px;
    margin-right: 10px;
}

.navbar-menu {
    display: flex;
    gap: 20px;
}

.navbar-item {
    font-weight: bold;
    color: black;
    background-color: transparent;
    text-decoration: none;
    position: relative;
}

.navbar-item:hover {
    opacity: 0.2;
}

.navbar-item::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: black;
    opacity: 0;
    transition: opacity 0.3s;
}

.navbar-item:hover {
    opacity: 1;
}

.navbar-search {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;

    img {
        color: black
    }
}

.search-input {
    border: none;
    outline: none;
    padding: 5px;
}

.search-button {
    all: unset;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px;
}

.search-button i {
    font-size: 16px;
    color: #333;
}
</style>