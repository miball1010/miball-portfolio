<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const { isDev } = storeToRefs(store)
</script>

<template>
    <div class="box-border">
        <img :src="`${isDev ? '/images/' : 'images/'}web-woman-1.jpg`" alt="跨界真女子-主視覺理念" loading="lazy">
        <div class="subtitle">主視覺理念</div>
        <div class="text">
            女子勇敢向上邁進，底部的藤蔓深淵是她跨過的障礙，面對她的是成功的光芒，而身後的影子則透露出她的屹立不搖。
        </div>
    </div>
    <div class="box-border">
        <img :src="`${isDev ? '/images/' : 'images/'}web-woman-2.jpg`" alt="跨界真女子-【未採用】主視覺理念" loading="lazy">
        <div class="subtitle">【未採用】主視覺理念</div>
        <div class="text">
            此專題是以跨領域的成功女性為主角，所以每個人都有雙重身分。畫面中女子勇敢跨出自己的舒適圈(草原)，踩向水漥中的另一個世界(大城市)，而鞋子也轉變成較為正式、優雅的根鞋，與標題"跨界真女子"呼應。
        </div>
    </div>
</template>