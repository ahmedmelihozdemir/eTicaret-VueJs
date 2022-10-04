<template>
    <div>
        <LayoutComponent>
            <ProductList></ProductList>
        </LayoutComponent>
        
        <!-- <HomeView></HomeView>
        <LoginView></LoginView>
        <BasketView></BasketView> -->
    </div>
</template>

<script lang="ts" setup>
import LayoutComponent from "./components/layout/LayoutComponent.vue";
import ProductList from "./components/shared/ProductList.vue";

/* import HomeView from "./views/HomeView.vue";
import LoginView from "./views/LoginView.vue";
import BasketView from "./views/BasketView.vue"; */
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
