<!-- HomeView.vue -->
<script setup>
import { productStore } from '../stores/productStore';
import ProductCard from '../components/ProductCard.vue';

const todoStore = productStore();
</script>

<template> 
    <div class="grid grid-cols-3 mx-10 gap-5">
        <ProductCard v-for="product in todoStore.products" :key="product.id" :product="product" />
    </div>
</template>
