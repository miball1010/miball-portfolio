<script setup>
import { usePortfolioStore } from '@/stores/portfolioStore'
const store = usePortfolioStore()
</script>

<template>
    <div class="video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/omQZPhdNs18?si=DBqDAp3dhjZaG4E7"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </div>

    <img :src="`${store.isDev ? '/images/' : 'images/'}web-cny-${item + 1}.jpg`" :alt="`新年抽獎-${item + 1}`"
        loading="lazy" v-for="item in 6" :key="item">
</template>

<style scoped>
.video {
    aspect-ratio: 16/9;
    max-width: 800px;
    margin-bottom: 30px;
}
</style>