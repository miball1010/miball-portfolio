<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const { isDev } = storeToRefs(store)

const modules = [Mousewheel, Navigation]

const props = defineProps({
  img: String,
  number: Number
})
</script>

<template>
  <div class="swiper-content">
    <Swiper
  class="my-swiper"
  :modules="modules"
  :space-between="16"
  :slides-per-view="1.1"
  :breakpoints="{
    0: {
      slidesPerView: 1
    },
    600: {
      slidesPerView: 1.1
    }
  }"
   :free-mode="true"
  :free-mode-momentum="false"
  :mousewheel="{
    forceToAxis: true,
    sensitivity: 0.6
  }"
  :speed="500"
  :navigation="true"
>

      <SwiperSlide v-for="item in props.number" :key="item" class="my-slide">
        <img :src="`${isDev ? '/images/' : 'images/'}${img}${item}.jpg`" alt="" class="slide-img" />
      </SwiperSlide>
    </Swiper>
  </div>

</template>

<style scoped></style>
