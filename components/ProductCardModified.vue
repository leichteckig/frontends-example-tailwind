<script setup lang="ts">
const { search } = useProductSearch();
const { getFormattedPrice } = usePrice();

const { product } = await search('f5cdc1a027ba4f48947eb2fe3de1b4d4');
const { unitPrice } = useProductPrice(ref(product));
const { addToCart } = useAddToCart(ref(product));
</script>

<template>
  
  <div class="border rounded-lg shadow bg-gray-800 text-white">
    <img class="p-8" :src="product.cover.media.url" :alt="product.cover.media.title||'Product cover'" />
    
    <div class="px-8 pb-8">
      <h5 class="text-xl font-semibold tracking-tight">{{ product.name }}</h5>

      <div class="flex items-center my-3">
        {{ product.availableStock }} left in stock
      </div>

      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold">{{ getFormattedPrice(unitPrice) }}</span>
        <button v-on:click="addToCart()" href="#" class="font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600">Add to cart</button>
      </div>
    </div>

  </div>

</template>
