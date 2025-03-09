<script setup>
    const cartItem = ref(1) // Liczba produktów w koszyku, watosc poczatkowa to 1
</script>
<template>
    <nav class="navbar is-align-items-center is-black">
        <div class="container is-flex is-align-items-center is-justify-content-space-between">
            <!-- lewa strona nawigacji -->
            <div class="navbar-left is-flex is-align-items-center">
                <img src="/assets/icons/localization.svg" alt="Localizations"/>
                <a href="" class="navbar-item">
                    <span>Nasze salony</span>
                </a>
            </div>

            <!-- srodkowy element nawigacji -->
            <div class="navbar-center has-text-white has-text-weight-bold has-text-centered has-text-uppercase">
                <span>KOLEKCJA WIOSNA/LATO 2025!<br>POKAŻ PRODUKTY!</span>
            </div>

            <!-- prawa strona nawigacji -->
            <div class="navbar-right is-flex is-align-items-center">
                <div class="is-flex is-align-items-center">
                    <img src="/assets/icons/user-pitbull.svg" alt="Localizations"/>
                    <a href="" class="navbar-item">
                        <span>Moje konto</span>
                    </a>
                </div>
                <div class="is-flex is-align-items-center">
                    <img src="/assets/icons/heart-pitbull-gray.svg" alt="Localizations"/>
                    <a href="" class="navbar-item">
                        <span>Lista życzeń <span class="wishlist-count">0</span></span>
                    </a>
                </div>
                <div class="is-flex is-align-items-center cart-button has-text-white">
                    <img src="/assets/icons/shopping-cart.svg" alt="Localizations"/>
                    <a href="" class="navbar-item">
                        <span>Koszyk ({{ cartItem }})</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.navbar {
    padding: 0.5rem 1rem;
}

.navbar-left,
.navbar-right {
    gap: 1rem;
}

.navbar-item {
    color: white;
}

img {
    width: 24px;
    height: 24px;
}

.cart-button {
    background-color: #47b75f;
    border-radius: 8px;
    padding: 10px 15px;
    font-weight: bold;
}
</style>