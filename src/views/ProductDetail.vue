<template>
    <div>
        <div>Product type</div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();

onMounted(() => {
    console.log(this.$route.params.type);
    console.log(router.currentRoute.value.params.type);
    store.dispatch("getProducts", router.currentRoute.value.params.type);
});
</script>

<style scoped></style>
