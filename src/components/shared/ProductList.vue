<template>
  <div>
    <h3 class="my-6">
      <span class="font-bold">{{ store.state.activeProduct }}</span>
      kategorisi içeriğindeki ürünler listeleniyor.
    </h3>
    <div class="grid grid-flow-col grid-cols-3 items-center my-6 mx-8">
      <select
        class="mx-2 rounded-md flex justify-center shadow-xl shadow-gray-300 border-2 h-10 p-2"
        v-model="selectedSorting"
      >
        <option v-for="sort in sortList" :key="sort.value" class="text-black">
          {{ sort.name }}
        </option>
      </select>
      <select
        class="mx-2 rounded-md flex justify-center shadow-xl shadow-gray-300 border-2 h-10 p-2"
        v-model="selectedCategory"
      >
        <option
          v-for="category in categories"
          :key="category.name"
          class="text-black"
        >
          {{ category.value }}
        </option>
      </select>
      <div
        class="mx-2 rounded-md flex justify-centerflex shadow-xl shadow-gray-300 border-2 h-10 w-20 p-2"
      >
        <button
          class="mx-2 hover:text-red-800 active:text-red-900"
          @click="listView = false"
        >
          <ion-icon name="grid-outline"></ion-icon>
        </button>
        <button
          class="mx-2 hover:text-red-800 active:text-red-900"
          @click="listView = true"
        >
          <ion-icon name="list-outline"></ion-icon>
        </button>
      </div>
    </div>
    <div
      class=""
      :class="{
        'card-size grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1':
          listView,
        'grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1':
          !listView,
      }"
    >
      <div
        class="card border-2 p-4 m-11 rounded-lg hover:cursor-pointer hover:shadow-lg hover:border-orange-800"
        :class="{
          'border-2 rounded-lg hover:cursor-pointer hover:shadow-lg hover:border-orange-800':
            listView,
        }"
        v-for="(product, idx) in products"
        :key="idx"
      >
        <div
          v-if="
            selectedCategory == 'all' || product.category == selectedCategory
          "
          :class="{
            'p-2 flex justify-start items-center rounded-lg hover:cursor-pointer hover:shadow-lg hover:border-orange-800':
              listView,
          }"
        >
          <div
            class="flex justify-center"
            :class="{
              'image-size': listView,
            }"
          >
            <img
              :src="product.image"
              alt=""
              class="rounded-md mb-4 w-52 h-52"
            />
          </div>
          <div
            class="mt-2 h-28"
            :class="{
              'flex justify-center items-center p-6': listView,
            }"
          >
            {{ product.title }}
          </div>
          <div
            class="mt-2 h-10"
            :class="{
              'non-display-price flex justify-center items-center p-6':
                listView,
            }"
          >
            {{ product.price }} ₺
          </div>
          <div
            class="mt-2"
            :class="{
              'non-display flex flex-col justify-center items-center p-6 w-80':
                listView,
            }"
          >
            <span class="font-bold">Taksitli Fiyat:</span>
            12 x {{ (product.price / 12).toFixed(2) }}TL
          </div>
          <div
            class="flex justify-center items-center p-4"
            :class="{
              'non-display-icon flex justify-center items-center p-6': listView,
            }"
          >
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
          <div
            class="flex justify-center items-center m-2"
            :class="{
              'non-display flex justify-center items-center p-6': listView,
            }"
          >
            <div class="mx-4 hover:text-red-400">
              {{ product.rating.rate }}
              <ion-icon name="star"></ion-icon>
            </div>
            <div class="mx-4 hover:text-red-400">
              {{ product.rating.count }}
              <ion-icon name="person"></ion-icon>
            </div>
          </div>
          <button
            class="bg-red-600 w-full text-white rounded-md hover:bg-red-400"
            :class="{
              'non-display-button flex justify-center items-center p-6 h-10 w-auto':
                listView,
            }"
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

const sortList = ref([
  { value: "first", name: "İlk eklenene göre" },
  { value: "last", name: "Son eklenene göre" },
  { value: "priceLow", name: "Düşük fiyattan yükseğe" },
  { value: "priceHigh", name: "Yüksek eklenene göre" },
]);
const selectedSorting = ref("İlk eklenene göre");

const categories = ref([
  { value: "all", name: "Tüm Kategoriler" },
  { value: "men's clothing", name: "Men's clothing" },
  { value: "jewelery", name: "Jewelery" },
  { value: "electronics", name: "Electronics" },
  { value: "women's clothing", name: "Women's clothing" },
]);
const selectedCategory = ref("all");

const listView = ref(false);

const productInfoService = new ProductService();
const products = ref([] as IProduct[]);
const productCategory = ref();
const productId = ref();

const getProductsInfo = () => {
  productInfoService.getProduct().then((response) => {
    products.value = response;
    productCategory.value = response.map((item) => item.category);
    productId.value = response.map((item) => item.id);
    console.log(productId.value);
  });
};

onMounted(getProductsInfo);
</script>

<style scoped lang="scss">
@media screen and (max-width: 1024px) {
  .non-display {
    display: none;
  }
}
@media screen and (max-width: 640px) {
  .non-display-icon,
  .non-display-button,
  .non-display-price {
    display: none;
  }
}
</style>
