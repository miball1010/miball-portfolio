<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const { isDev } = storeToRefs(store)
</script>

<template>
    <img :src="`${isDev ? '/images/' : 'images/'}web-goodbye-${item}.jpg`" :alt="`好好說再見-${item}`" loading="lazy"
        v-for="item in 5" :key="item">
</template>
