<script setup>
import { usePortfolioStore } from '@/stores/portfolioStore'
const store = usePortfolioStore()
</script>

<template>
    <video :src="`${store.isDev ? '/images/' : 'images/'}web-cny-1.mp4`" controls
        :poster="`${store.isDev ? '/images/' : 'images/'}web-cny-poster.jpg`"></video>

    <img :src="`${store.isDev ? '/images/' : 'images/'}web-cny-${item + 1}.jpg`" :alt="`新年抽獎-${item + 1}`" loading="lazy"
        v-for="item in 6" :key="item">
</template>

<style scoped>
video {
    display: block;
    margin-bottom: 30px;
}
</style>