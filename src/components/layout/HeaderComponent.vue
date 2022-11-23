<template>
    <nav class="navbar">
        <div class="upper-info grid grid-flow-col bg-gray-100">
            <div
                class="flex justify-center items-center text-gray-500 text-sm font-bold"
                v-for="(icon, idx) in icons"
                :key="idx"
            >
                <div class="flex justify-center items-center">
                    <ion-icon
                        class="hover:cursor-pointer hover:text-gray-600"
                        :name="icon.logo"
                    ></ion-icon>
                </div>
            </div>

            <div class="right-info flex justify-end">
                <div class="yardim hover:cursor-pointer">
                    <a href="/yardim" class="text-white hover:text-red-300"
                        >Yardım</a
                    >
                </div>
                <div class="blog hover:cursor-pointer">
                    <a href="/blog" class="text-white hover:text-red-300"
                        >Blog</a
                    >
                </div>
            </div>
        </div>
        
        <div
            class="logo-section grid grid-flow-col grid-cols-4 gap-2 sm:grid-cols-1 md:grid-cols-1"
        >
            <div
                class="flex justify-between items-center align-center p-2 bg-white border-2"
            >
                <div class="flex justify-center align-center ml-24">
                    <a href="/" class="">
                        <img
                            src="@/assets/karma-logo.png"
                            alt=""
                            class="logo-img rounded-xl w-40 hover:cursor-pointer"
                        />
                    </a>
                </div>
                <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div
                            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                        >
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-white-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-red-500 outline-none"
                            placeholder="Search"
                        />
                    </div>
                    <button
                        type="submit"
                        class="p-2.5 ml-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                        <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                </form>
                <div class="flex justify-center align-center mr-24">
                    <div class="flex items-center">
                        <router-link to="/login" class="flex items-center">
                            <ion-icon
                                class="log-icon"
                                name="person-outline"
                            ></ion-icon>
                            <div class="flex flex-col text-black">
                                Giriş Yap
                                <span class="text-xs text-gray-500"
                                    >veya üye ol</span
                                >
                            </div>
                            <ion-icon
                                class="log-icon"
                                name="chevron-down-outline"
                            ></ion-icon>
                        </router-link>
                        <router-link to="/basket" class="flex items-center">
                            <ion-icon
                                class="log-icon"
                                name="basket-outline"
                            ></ion-icon>
                            <div class="flex flex-col text-black">
                                Sepet
                                <span class="text-xs text-gray-500">0.00₺</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="up-header grid grid-flow-col gap-2">
            <div
                class="flex items-center justify-center m-2 text-white hover:cursor-pointer"
            >
                <div
                    class="hover:text-red-300 mx-4"
                    v-for="typ in types"
                    :key="typ.type"
                    @click="getProducts(typ.type, typ.value)"
                >
                    {{ typ.type }}
                </div>
            </div>
        </div>
        <div class="grid grid-flow-col gap-2 bg-gray-100 h-10 items-center">
            <div class="flex justify-start mx-6">
                Anasayfa >
                <span class="font-bold"> {{ store.state.activeProduct }}</span>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRoute();

const types = ref([
    { type: "Beyaz Eşya", value: "beyazesya" },
    { type: "Ayakkabı", value: "ayakkabi" },
    { type: "Tv & Ses Sistemi", value: "tv" },
    { type: "Ev Eşyaları", value: "ev" },
    { type: "Kişisel Bakım", value: "kisisel" },
    { type: "Mutfak Gereçleri", value: "mutfak" },
]);
const icons = ref([
    { logo: "logo-facebook" },
    { logo: "logo-instagram" },
    { logo: "logo-twitter" },
    { logo: "logo-youtube" },
]);

const goLogin = () => {
    router.push("/login");
};
const goBasket = () => {
    router.push("/basket");
};

const getProducts = (type: string, value: string) => {
    store.state.activeProduct = type;
};
</script>

<style lang="scss" scoped>
@import "@/components/layout/HeaderComponent.scss";
</style>
