<template>
    <div>
        <h3 class="my-6">
            <span class="font-bold">{{ store.state.activeProduct }}</span>
            kategorisi içeriğindeki ürünler listeleniyor.
        </h3>
        <div class="grid grid-flow-col grid-cols-3 items-center my-6 mx-8">
            <select
                class="mx-2 rounded-md flex justify-center shadow-xl shadow-gray-300 border-2 h-10 p-2"
            >
                <option value="last">Son eklenene göre</option>
                <option value="first">İlk eklenene göre</option>
                <option value="priceLow">Düşük fiyattan yükseğe</option>
                <option value="priceHigh">Yüksek fiyattan düşüğe</option>
            </select>
            <select
                class="mx-2 rounded-md flex justify-center shadow-xl shadow-gray-300 border-2 h-10 p-2"
            >
                <option value="all">Tüm Ürünler</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's clothing</option>
            </select>
            <div
                class="mx-2 rounded-md flex justify-centerflex shadow-xl shadow-gray-300 border-2 h-10 w-20 p-2"
            >
                <button class="mx-2 hover:text-red-800 active:text-red-900">
                    <ion-icon name="grid-outline"></ion-icon>
                </button>
                <button class="mx-2 hover:text-red-800 active:text-red-900">
                    <ion-icon name="list-outline"></ion-icon>
                </button>
            </div>
        </div>
        <div
            class="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4"
        >
            <div
                class="card border-2 p-4 m-11 rounded-lg hover:cursor-pointer hover:shadow-lg hover:border-orange-800"
                v-for="(product, idx) in products"
                :key="idx"
            >
                <div>
                    <div class="flex justify-center">
                        <img
                            :src="product.image"
                            alt=""
                            class="rounded-md mb-4 w-52 h-52"
                        />
                    </div>
                    <div class="mt-2 h-28">{{ product.title }}</div>
                    <div class="mt-2 h-10">{{ product.price }}</div>
                    <div class="mt-2 h-10">
                        <span class="font-bold">Taksitli Fiyat:</span>
                        12 x {{ (product.price / 12).toFixed(2) }}TL
                    </div>
                    <div class="flex justify-center items-center m-2">
                        <div class="mx-4 hover:text-red-400">
                            {{ product.rating.rate }}
                            <ion-icon name="star"></ion-icon>
                        </div>
                        <div class="mx-4 hover:text-red-400">
                            {{ product.rating.count }}
                            <ion-icon name="person"></ion-icon>
                        </div>
                    </div>
                    <div class="flex justify-center items-center p-4">
                        <ion-icon
                            class="mx-4 text-xl hover:text-red-800"
                            name="bag-add-outline"
                        ></ion-icon>
                        <ion-icon
                            class="mx-4 text-xl hover:text-red-800"
                            name="heart-outline"
                        ></ion-icon>
                        <ion-icon
                            class="mx-4 text-xl hover:text-red-800"
                            name="reorder-three-outline"
                        ></ion-icon>
                    </div>

                    <!-- <div class="m-2">{{ product.category }}</div> -->
                    <button
                        class="bg-red-600 w-full text-white rounded-md hover:bg-red-400"
                    >
                        Ürünü İncele
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { IProduct } from "@/models/Country.interface";
import { ProductService } from "@/services/Product.service";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
const store = useStore();
const router = useRouter();

const productInfoService = new ProductService();
const products = ref([] as IProduct[]);
const productCategory = ref(null);

const getProductsInfo = () => {
    productInfoService.getProduct().then((response) => {
        products.value = response;
    });
    productInfoService.getProductCategory().then((response) => {
        productCategory.value = response.filter(
            (item) => item.category === store.state.activeProduct
        );
    });
};

onMounted(getProductsInfo);
</script>

<style scoped></style>
