<template>
    <div>
        <HeaderComponent />
        <slot />
        <FooterComponent />
    </div>
</template>

<script setup lang="ts">
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";
</script>

<style scoped lang="scss"></style>
