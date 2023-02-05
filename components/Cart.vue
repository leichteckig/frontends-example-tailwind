<script setup>

const { cartItems, refreshCart, totalPrice, shippingTotal, subtotal, removeItem } = useCart();
const { getFormattedPrice } = usePrice();

onMounted(() => {
  refreshCart();
});

</script>

<template>

    <!-- Product listing -->
    <div>
        <h1 class="text-3xl font-bold text-center">Cart</h1>
        
        <div class="mt-8">

            <!-- Product cards -->
            <div v-on:click="removeItem(item)" class="p-4 mb-2 rounded-lg flex justify-between bg-gray-800 text-white cursor-pointer" v-for="item in cartItems">
                <h2 class="text-sm font-medium">{{ item.quantity }} x {{ item.label }}</h2>
                <p>{{ getFormattedPrice(item.price.unitPrice) }}</p>
            </div>

            <div class="mt-8 text-lg text-right">
                <p>Subtotal {{ getFormattedPrice(subtotal) }}</p>
                <p>Shipping {{ getFormattedPrice(shippingTotal) }}</p>
                <p class="mt-2 pt-2 font-bold border-t border-gray-800">Total {{ getFormattedPrice(totalPrice) }}</p>
            </div>

        </div>
    </div>

</template>
