<script setup>
import { ref } from 'vue'
const props = defineProps({
    src: { type: String, required: true },
    imgClass: { String, default: '' },
    alt: { type: String, default: '' }
})

const loaded = ref(false)
</script>

<template>
    <div v-if="!loaded" class="skeleton"></div>
    <img :src="src" :alt="alt" @load="loaded = true" :class="imgClass, [loaded ? 'img-loaded' : 'img-loading']" loading="lazy"/>
</template>



<style scoped>
img {
    display: block;
    width: 100%;
}

/* props class */
.popup-img{
    display: block;
    width: 100%;
    height: 100%;
}

.graphic-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* 原始設定 */
.img-loading,
.img-loaded {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.5s;
}

.img-loading {
    opacity: 0;
    z-index: 0;
}

.img-loaded {
    opacity: 1;
    z-index: 10;
}

.skeleton {
    position: absolute;
    inset: 0;
    z-index: 20;
    background: linear-gradient(90deg,
            #e5e5e5 25%,
            #f2f2f2 37%,
            #e5e5e5 63%);
    background-size: 400% 100%;
    animation: shimmer 1.4s ease infinite;
}

@keyframes shimmer {
    0% {
        background-position: 100% 0;
    }

    100% {
        background-position: -100% 0;
    }
}
</style>