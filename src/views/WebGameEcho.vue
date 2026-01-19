<script setup>
    import BaseSwiper from '@/components/BaseSwiper.vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const { isDev } = storeToRefs(store)
</script>

<template>

<BaseSwiper :img="'web-gameEcho-'" :number="4"/>

    <!-- <div class="box-border"> -->
        <!-- <BaseSwiper :img="'web-gameEcho-'" :number="4"/> -->

        <!-- <video src="/images/web-flurryPop-1.mp4" autoplay muted loop></video> -->
        <!-- <div class="subtitle">從首頁開始的購物體驗</div>
        <div class="text">
            提供多種冰淇淋選擇的商品介紹頁面，採用Vue3的動態路由設計。透過網址中的編號呼叫API，動態取得對應商品資料，確保每個頁面都能即時顯示正確資訊。
        </div> -->
    <!-- </div> -->
</template>

<style scoped>
img,video {
    border: 1px solid rgb(242, 242, 242);
}
</style>