<script setup>
import logo from '@/assets/logo.png'
// import { storeToRefs } from 'pinia'
// import { useCounterStore } from '@/stores/counter.js'
// const store = useCounterStore()
// const { } = storeToRefs(store)
// import { ref } from 'vue'
// const menuIsopen = ref(false)

// function menu_click() {
//   menuIsopen.value = !menuIsopen.value
// }
</script>

<template>
    <div class="menu">

        <RouterLink to="/">
            <div class="logo"><img :src="logo" alt="">Miball’s Portfolio</div>
        </RouterLink>

        <!-- <div class="menu-list" :class="{ active: menuIsopen }">
            <RouterLink to="/" style="--i:1" @click="menuIsopen = false">Home</RouterLink>
            <RouterLink to="/about" style="--i:2" @click="menuIsopen = false">About</RouterLink>
        </div>
        <div class="menu-btn" @click="menu_click">
            <img src="/images/menu-white.svg" alt="" v-if="!menuIsopen">
            <img src="/images/close-white.svg" alt="" v-else>
        </div> -->
    </div>
</template>

<style scoped>
.menu {
    min-height: 55px;
    width: 100%;
    background-color: #212121dc;
    margin: 0 auto;
    position: fixed;
    display: flex;
    justify-content: center;
    /* justify-content: space-between; */
    align-items: center;
    top: 0;
    z-index: 20;
    padding: 15px 20px;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
}

.logo {
    transition: 0.5s;
    color: white;
    font-family: monospace, serif;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.25rem;
}

.logo img {
    height: 30px;
}

.logo:hover {
    transform: scale(0.9);
}

.menu-list {
    display: flex;
}

.menu-list a {
    color: white;
    padding: 10px;
    margin: 0 10px;
    transform: translateY(0px);
    transition: 0.5s;
    position: relative;
    display: block;
    opacity: 0;
    animation: topAni 0.8s forwards;
    animation-delay: calc(var(--i)*0.1s);
}

@keyframes topAni {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

.menu-list a:hover {
    color: var(--main-color);
}

.menu-btn {
    height: 50%;
    cursor: pointer;
    display: none;
}

.menu-btn img {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 1024px) {
    .menu-list {
        position: absolute;
        flex-direction: column;
        top: calc(100% + 1px);
        transform: translateX(-50%);
        left: 50%;
        background-color: rgb(255, 255, 255);
        width: 0%;
        padding: 0px;
        box-shadow: 5px 5px 10px var(--shadow-dark);
        transition: 0.5s;
        border-radius: 10px;
    }

    .menu-list.active {
        padding: 0 15px;
        width: 100%;
        border-radius: 0 0 10px 10px;
    }

    .menu-list a {
        color: var(--main-black);
        margin: 15px 0;
        text-align: center;
        opacity: 0;
        transition: 0s;
        animation: none;
    }

    .menu-list.active a {
        opacity: 1;
        transition: 1s;
    }

    .menu-btn {
        display: block;
        transition: 0.5s;
    }

    .menu-btn:hover {
        transform: rotate(180deg);
    }
}

@media screen and (max-width: 540px) {
    .menu {
        padding: 10px 20px;
    }

    .logo img {
        height: 20px;
    }
}
</style>
