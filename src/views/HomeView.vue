<script setup>
import Work from '@/components/Work.vue'
import { onMounted, onUnmounted } from 'vue'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const { skill } = storeToRefs(store)

let timeoutId
function handleResize() {
  clearTimeout(timeoutId)
  timeoutId = setTimeout(() => {
    ScrollTrigger.refresh()
  }, 500)
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  setTimeout(() => {
    gsapInit()
  }, 300)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const gsapInit = () => {
  gsap.from('.bg', {
    scrollTrigger: {
      trigger: '.work-container',
      start: "top 50%",
      end: "bottom top",
      toggleClass: { targets: '.bg', className: 'black' },
    },
  })
}
</script>

<template>
  <div class="bg">
    <div class="container">
      <div class="content L">
        <!-- <div class="title">網頁前端 Ｘ 網頁設計</div>
        <div class="subtitle">Front-end ＆ Web Design</div> -->
        <div class="text">Hi～我是Miball，目前擁有一年半前端視覺工程師的經驗。<br>擅長使用Figma設計與Vue3製作互動流暢的網頁，對新技術充滿好奇，樂於接受挑戰。</div>
        <div class="icons">
          <img :src="`${store.isDev ? '/images/' : 'images/'}icons/${item}-icon.jpg`" :alt="`${item}-icon`"
            v-for="(item, index) in skill" :style="{ animationDelay: `${0.5 + index * 0.1}s` }" :key="item">
        </div>
      </div>
      <div class="content R">
        <div class="img-content">
        </div>
      </div>
    </div>
    <Work />
    <div class="footer">
      © 2026 Miball
    </div>
  </div>
</template>

<style scoped>
.bg {
  transition: 1.5s;
}

.bg.black {
  background-color: #212121;
}

.container {
  position: relative;
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
  padding: 200px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 50px;
  flex-wrap: wrap;
}

.content {
  width: calc((100% - 100px)/2);
}

.content.L {
  opacity: 0;
  animation: first 0.5s forwards;
  color: #6A6A6A;
  text-align: center;
}

.content.R {
  opacity: 0;
  animation: first 0.5s forwards;
  animation-delay: 0.2s;
}

@keyframes first {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);

  }
}

.img-content {
  margin: 0 auto;
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1 / 1;
  background-image: url(../assets/me.jpg);
  background-size: cover;
  transition: 0.3s;
  position: relative;
}

.img-content::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  border-radius: 10px;
  border: 1px solid #212121;
  z-index: -1;
  animation: first-border 0.5s forwards;
  animation-delay: 1s;
  opacity: 0;
}

@keyframes first-border {
  0% {
    opacity: 0;
    top: 0px;
    left: 0px;
  }

  100% {
    opacity: 1;
    top: 10px;
    left: 10px;
  }
}

.img-content:hover {
  background-image: url(../assets/me2.jpg);
  transform: scale(0.95);
}

.img-content:hover img {
  transform: scale(1.05);
}

.subtitle {
  text-align: center;
  margin: 5px 0 60px;
  font-family: "Noto Serif TC", serif;
}

.text {
  margin: 0 0 40px;

}

.icons {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  gap: 15px;
}

.icons img {
  height: 40px;
  border-radius: 5px;
  transition: 0.3s;
  animation: fadeUp 1s forwards;
  opacity: 0;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

.icons img:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.footer {
  color: #ffffffad;
}

@media screen and (max-width: 1140px) {
  .container {
    gap: 50px;
  }

  .content {
    width: calc((100% - 50px)/2);
  }
}

@media screen and (max-width: 800px) {
  .container {
    padding: 100px 0 40px;
    flex-direction: column-reverse;
    gap: 50px;
  }

  .content {
    width: 100%;
  }

  .subtitle {
    margin: 0 0 30px;
  }
}
</style>