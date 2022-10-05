<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/basket">Basket</router-link>
            <router-link to="/about">About</router-link>
            <router-view></router-view>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import HomeView from "./views/HomeView.vue";
import LoginView from "./views/LoginView.vue";
import BasketView from "./views/BasketView.vue";
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* background-color: #2c3e507e;
    width: 100%;
    height: 100vh; */
}

nav {
    a {
        margin: 20px;
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
