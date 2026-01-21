<script setup>
import { usePortfolioStore } from '@/stores/portfolioStore'
const store = usePortfolioStore()

import { onMounted } from 'vue'


onMounted(() => {
    // 確保 Instagram embed script 已經加載或動態載入
    if (!window.instgrm) {
        const script = document.createElement('script')
        script.src = 'https://www.instagram.com/embed.js'
        script.async = true
        script.onload = () => {
            window.instgrm.Embeds.process()  // 處理嵌入
        }
        document.body.appendChild(script)
    } else {
        window.instgrm.Embeds.process()  // 已經加載過就直接處理
    }
})
</script>

<template>
    <div class="box-border">

        <div ref="igContainer" class="instagram-embed">
            <blockquote class="instagram-media ig-post"
                data-instgrm-permalink="https://www.instagram.com/reel/DGSMsnBz_5F/" data-instgrm-version="14">
            </blockquote>
        </div>
        <div class="subtitle">糾正病｜ IG短影片</div>
        <div class="text">
            以文章內容改編的懶人包動畫，因先前已製作過貼文型懶人包，因此想嘗試製作觸及率更高的短影片。<br><br>
            目前在IG已有一萬觀看數。(當時粉絲數大概700)<br><br>
            我：腳本、動畫製作 <br>
            同事：配音
        </div>
    </div>

    <div class="box-border">
        <div class="video square">
            <video :src="`${store.isDev ? '/images/' : 'images/'}motion-1.mp4`" controls
                :poster="`${store.isDev ? '/images/' : 'images/'}motion-poster-1.jpg`"></video>
        </div>
        <div class="subtitle">流感懶人包</div>
        <div class="text">
            一開始以圖文插畫風格吸引目光，接著逐步帶入主題，強調必須正視流感的重要性。<br><br>
            我：動畫製作 <br>
            同事：文案
        </div>
    </div>

    <div class="box-border">
        <div class="video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SJl8KMfs9po?si=M99vhv-09Y8VyLDi"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="subtitle">開花結果｜畢業製作</div>
        <div class="text">於畢業製作《蒔夢 - 密室逃脫》中，讓玩家在黑暗環境中觀賞的投影劇情。<br><br>
            隨著種子發芽並逐漸開花，象徵故事主角隨著年齡成長，逐步走向並完成自己的夢想。
            同時，以黑白色彩表現父母的不認同與限制，營造出壓抑卻富含張力的氛圍。
        </div>
    </div>

    <div class="box-border">
        <div class="video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5IaR-cKyrOk?si=CMUAhQ7RXiYJtP89"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="subtitle">小朋友眼中的茶壺</div>
        <div class="text">這是在鶯歌陶瓷博物館實習期間所完成的動畫作品，由 22 位小朋友的圖畫拼湊而成，從劇情發想到動畫製作皆獨立完成。<br><br>
            在過程中必須思考如何將所有茶壺串聯起來，同時展現各自的特色。雖然在此之前並沒有動畫製作的經驗，但透過不斷摸索與嘗試，最終獲得了有趣且令人滿意的成果。
        </div>
    </div>
</template>

<style scoped>
.video {
    aspect-ratio: 16/9;
    max-width: 800px;
    margin: 0 auto;
}

.video video {
    max-height: 455px;
    width: 100%;
}

.instagram-embed {
    display: flex;
    justify-content: center;
}

.instagram-embed .ig-post {
    width: 100%;
    max-width: 500px;
}
</style>