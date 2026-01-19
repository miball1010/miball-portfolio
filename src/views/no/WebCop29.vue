<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const { isDev } = storeToRefs(store)
</script>

<template>
     <!-- {
                    "key": "cop29",
                    "link": "cop29",
                    "img": "cop29.jpg",
                    "title": "Cop29｜專題報導",
                    "text": "主視覺部分，需求方希望觀眾能清楚了解會議的舉辦地點，因此我設計了以地球動畫為核心，最後再接回場地風景圖的動畫。<br>我最喜歡的部分是網頁滾動時，某個區域的背景小人會手拉著手一起移動，象徵大家團結守護地球的溫暖感受。",
                    "tag": [
                        "Vue3",
                        "主視覺設計",
                        "layout設計"
                    ],
                    "btn": [
                        {
                            "url": "https://esg.businesstoday.com.tw/2024/cop29/",
                            "text": "前往網頁"
                        }
                    ]
                }, -->
    <img :src="`${isDev ? '/images/' : 'images/'}web-cop29-${item}.jpg`" :alt="`Cop29-${item}`" loading="lazy"
        v-for="item in 8" :key="item">
</template>
