<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../stores/counter'
const store = useCounterStore()
const { popupIsopen, nowPopup, popupContent } = storeToRefs(store)
const { popupCloseClick } = store
</script>

<template>
    <div class="popup-container " :class="{ active: popupIsopen }">
        <div class="popup-bg" @click="store.popupCloseClick()"></div>
        <div class="popup-content" ref="popupContent">
            <div class="overlay">
                <div class="box-border">
                    <img :src="`${store.isDev ? '/images/' : 'images/'}graphic-${nowPopup.name}-${item}${nowPopup.type}`"
                        :alt="nowPopup.title + item" v-for="item in nowPopup.number" :key="item">
                    <div class="subtitle" v-if="nowPopup.title">{{ nowPopup.title }}</div>
                    <div class="text" v-if="nowPopup.text">{{ nowPopup.text }}</div>
                </div>
            </div>
            <div class="popup-close" @click="popupCloseClick()"><img src="/images/close.svg" alt=""></div>
        </div>
    </div>
</template>

<style scoped>
.popup-container {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -5;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0s;
    transition-delay: 0.8s;
}

.popup-container.active {
    z-index: 30;
    transition-delay: 0s;
}

.popup-bg {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: 0.3s;
    transition-delay: 0.5s;
}

.active .popup-bg {
    opacity: 1;
    transition-delay: 0s;
}

.popup-content {
    width: 95%;
    max-width: 800px;
    background-color: white;
    height: auto;
    max-height: 90vh;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    padding: 20px 20px;
    overflow-y: auto;
    opacity: 0;
    transition: 0.5s;
    transition-delay: 0.3s;
}

.active .popup-content {
    opacity: 1;
    transition-delay: 0s;
}

.overlay {
    width: 100%;
    margin: 0 auto;
    transform: translateY(50px);
    transition: 0.3s;
    transition-delay: 0.3s;
    opacity: 0;
}

.active .overlay {
    opacity: 1;
    transform: translateY(0px);
}

img {
    display: block;
    width: 100%;
    margin-bottom: 20px;
}

img:last-child {
    margin: 0;
}

.popup-close {
    cursor: pointer;
    position: fixed;
    bottom: 10px;
    height: 50px;
    width: 50px;
    transform: translate(-50%, 100px);
    left: 50%;
    border-radius: 50px;
    background-color: white;
    padding: 10px;
    color: white;
    text-align: center;
    transition: transform 0.5s, box-shadow 0.3s;
    transition-delay: 0s, 0s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.171);
}

.active .popup-close {
    transform: translate(-50%, 0px);
    transition-delay: 0.6s, 0s;
}

.popup-close img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.popup-close:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.274);
}

/* scrollbar */
::-webkit-scrollbar {
    width: 7px;
}

::-webkit-scrollbar-button {
    background: transparent;
    border-radius: 4px;
}

::-webkit-scrollbar-track-piece {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgb(136, 136, 136);
}

::-webkit-scrollbar-track {
    box-shadow: transparent;
}
</style>