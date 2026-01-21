<script setup>
import { usePortfolioStore } from '@/stores/portfolioStore'
const store = usePortfolioStore()
</script>

<template>
     <div class="box-border">
        <video src="/images/web-flurryPop-1.mp4" autoplay muted loop></video>
        <div class="subtitle">從首頁開始的購物體驗</div>
        <div class="text">
            提供多種冰淇淋選擇的商品介紹頁面，採用Vue3的動態路由設計。透過網址中的編號呼叫API，動態取得對應商品資料，確保每個頁面都能即時顯示正確資訊。
        </div>
    </div>
    <div class="box-border">
        <video src="/images/web-flurryPop-2.mp4" autoplay muted loop></video>
        <div class="subtitle">簡單結帳，幾步完成</div>
        <div class="text">
            簡潔的購物流程，使用者不需要登入也能預覽訂單，整體體驗快速流暢。
        </div>
    </div>
    <div class="box-border">
        <img :src="`${store.isDev ? '/images/' : 'images/'}web-flurryPop-${item}.jpg`" :alt="`FlurryPop-${item}`"
            loading="lazy" v-for="item in 3" :key="item">
        <div class="subtitle">商品與訂單管理介面</div>
        <div class="text">
            後台需登入後才能操作，是使用課程提供的API進行串接。<br>
            由於資料內容固定，必須在各種限制下調整與拼湊，才能呈現出符合設計版面的功能。同時也具備查看訂單的功能，方便進行管理。
        </div>
    </div>
</template>

<style scoped>
img,video {
    border: 1px solid rgb(242, 242, 242);
}
</style>