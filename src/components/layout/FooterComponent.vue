<template class="">
    <div class="footer">
        <footer class="p-4 bg-white sm:p-6 dark:bg-gray-200">
            <div class="md:flex md:justify-between">
                <div
                    class="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-5"
                >
                    <div>
                        <h2
                            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-red-400"
                        >
                            Kurumsal
                        </h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li
                                class="mb-4"
                                v-for="kurum in kurumsal"
                                :key="kurum.name"
                            >
                                <a href="#" class="hover:underline">{{
                                    kurum.name
                                }}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2
                            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-red-400"
                        >
                            Müşteri Hizmetleri
                        </h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li
                                class="mb-4"
                                v-for="musteri in musteris"
                                :key="musteri.name"
                            >
                                <a href="#" class="hover:underline">{{
                                    musteri.name
                                }}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2
                            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-red-400"
                        >
                            Yardım
                        </h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li
                                class="mb-4"
                                v-for="yardim in yardims"
                                :key="yardim.name"
                            >
                                <a href="#" class="hover:underline">{{
                                    yardim.name
                                }}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2
                            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-red-400"
                        >
                            İletişim
                        </h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li
                                class="mb-4"
                                v-for="iletisim in iletisims"
                                :key="iletisim.address"
                            >
                                <a href="#" class="hover:underline">{{
                                    iletisim.address
                                }}</a>
                            </li>
                            <li
                                class="mb-4"
                                v-for="iletisim in iletisims"
                                :key="iletisim.telefon"
                            >
                                <a href="#" class="hover:underline">{{
                                    iletisim.telefon
                                }}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2
                            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-red-400"
                        >
                            Bizi Takip Edin
                        </h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <div
                                class="flex items-center justify-center space-x-4"
                                v-for="(icon, idx) in icons"
                                :key="idx"
                            >
                                <ion-icon
                                    class="p-2 hover:cursor-pointer hover:text-gray-600 text-lg "
                                    :name="icon.logo"
                                ></ion-icon>
                            </div>
                            <li class="mb-4">
                                <a href="#" class="hover:underline"
                                    >E-Bültenimize abone olun, gelişmeleri
                                    kaçırmayın</a
                                >
                            </li>
                            <form>
                                <label
                                    for="default-search"
                                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                                    >Search</label
                                >
                                <div class="relative">
                                    <div
                                        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-red-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-red-500 outline-none"
                                        placeholder="Bize ulaşın"
                                    />
                                    <button
                                        type="submit"
                                        class="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                    >
                                        <ion-icon
                                            name="arrow-forward-outline"
                                        ></ion-icon>
                                    </button>
                                </div>
                            </form>
                        </ul>
                    </div>
                </div>
            </div>
            <hr
                class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
            />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span
                    class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
                    ><span>Copyright © </span>
                    <a href="/" class="text-red-400 font-bold hover:underline"
                        >Karma - Kırmızı</a
                    >
                </span>
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
                <span
                    class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
                >
                    <a href="/" class="hover:underline">melihticaret</a>
                </span>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const kurumsal = ref([
    { name: "Hakkımızda", link: "#" },
    { name: "Kampanyalar", link: "#" },
    { name: "Banka Hesap Numaraları", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Haberler", link: "#" },
]);
const musteris = ref([
    { name: "Sipariş Sorgulama", link: "#" },
    { name: "Teslimat ve Kargo", link: "#" },
    { name: "İade ve Değşim", link: "#" },
    { name: "Üyelik Sözleşmesi", link: "#" },
    { name: "Gizlilik ve Güvenlik", link: "#" },
]);
const yardims = ref([
    { name: "İletişim Bilgileri", link: "#" },
    { name: "Sıkça Sorulan Sorular", link: "#" },
]);
const iletisims = ref([
    {
        address: "1376 Sok. No:1/43 Boran Plaza, Halkapınar, Konak/Izmir",
        telefon: "0850555555",
    },
]);

const icons = ref([
    { logo: "logo-facebook"},
    { logo: "logo-instagram" },
    { logo: "logo-twitter" },
    { logo: "logo-youtube" },
]);
</script>

<style scoped lang="scss">
.footer {
    bottom: 0;
    height: 60px;
    width: 100%;
    font: 500 0.675rem/1.5rem "Poppins", sans-serif;
}
</style>
