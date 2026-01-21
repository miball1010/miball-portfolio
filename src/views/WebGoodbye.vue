<script setup>
import { usePortfolioStore } from '@/stores/portfolioStore'
const store = usePortfolioStore()
</script>

<template>
    <img :src="`${store.isDev ? '/images/' : 'images/'}web-goodbye-${item}.jpg`" :alt="`好好說再見-${item}`" loading="lazy"
        v-for="item in 5" :key="item">
</template>
