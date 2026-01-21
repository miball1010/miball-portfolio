<script setup>
import ImageLoading from '@/components/ImageLoading.vue'
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '@/stores/portfolioStore'
const store = usePortfolioStore()
const { graphics } = storeToRefs(store)
const { popupClick } = store

function getImgSrc(item) {
    return (store.isDev ? '/images/' : 'images/') + `graphic-${item.name}-1${item.type}`
}
</script>

<template>
    <div class="graphic-box">
        <div class="box" v-for="item in graphics" :key="item.name" @click="popupClick(item)">
            <ImageLoading :src="getImgSrc(item)" imgClass="graphic-img" />
            <div class="bg"></div>
            <div class="text">{{ item.title }}</div>
        </div>
    </div>
</template>

<style scoped>
.graphic-box {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.box {
    cursor: pointer;
    width: calc((100% - 60px)/3);
    padding-top: calc((100% - 60px)/3);
    overflow: hidden;
    border-radius: 10px;
    background-color: #212121;
    position: relative;
    transition: 0.5s;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}

.box:hover {
    transform: scale(1.05);
}

.box .bg {
    background-color: #212121cb;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.5s;
}

.box .text {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 60%;
    left: 50%;
    color: white;
    text-align: center;
    border: 1px solid white;
    padding: 5px 10px;
    width: 70%;
    opacity: 0;
    transition: 0.5s;
}

.box:hover .bg {
    opacity: 1;
}

.box:hover .text {
    opacity: 1;
    top: 50%;
}

@media screen and (max-width:700px) {
    .box {
        width: calc((100% - 30px)/2);
        padding-top: calc((100% - 30px)/2);
    }
}

@media screen and (max-width:540px) {
    .graphic-box {
        gap: 20px;
    }

    .box {
        width: calc((100% - 20px)/2);
        padding-top: calc((100% - 20px)/2);
    }
}
</style>