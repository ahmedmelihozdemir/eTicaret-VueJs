<template>
    <div>
        <nav>
            <!-- <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/basket">Basket</router-link>
            <router-link to="/about">About</router-link> -->
            <router-view></router-view>
        </nav>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

</style>
