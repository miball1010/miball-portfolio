<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const { works } = storeToRefs(store)

function work_click(work) {
    router.push(`work/${work.link}`)
}
</script>

<template>
    <div class="work-container">
        <div class="work-box" v-for="work_item in works">
            <div class="work-title">
                <div class="work-EN-title">{{ work_item.work_EN_title }}</div>
                <div class="work-CN-title title">{{ work_item.work_CN_title }}</div>
            </div>
            <div class="work-list">
                <div @click="work_click(item)" v-for="(item, index) in work_item.work" :key="item.key" class="work-item"
                    :to="item.link">

                    <div class="work-content">
                        <div class="work-text">
                            <div class="subtitle">{{ item.title }}</div>
                            <div class="text" v-html="item.text"></div>
                            <div class="tag-box" v-if="item.tag">
                                <div class="tag" v-for="x in item.tag">{{ x }}</div>
                            </div>
                        </div>
                        <img :src="`${store.isDev ? '/images/' : 'images/'}${item.type}-${item.img}`" :alt="item.img" class="work-img"
                            loading="lazy">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.work-container {
    padding: 80px 0 0;
    width: 90%;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
}

.work-box:not(:first-child) {
    margin-top: 200px;
}

.work-title {
    position: relative;
    padding: 0 0 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ffffffad;
}

.work-EN-title {
    -webkit-text-stroke: #ffffffad 1px;
    font-size: 5rem;
    white-space: nowrap;
    font-weight: 600;
    color: transparent;
    position: absolute;
    top: -4.5rem;
    opacity: 0.5;
    animation: EN-title 0.7s infinite alternate;
}

@keyframes EN-title {
    0% {
        opacity: 0.5;
    }

    10% {
        opacity: 0.2;
    }

    30% {
        opacity: 0.5;
    }

    100% {
        opacity: 0.2;
    }
}

.work-CN-title {
    color: white;
    padding-left: 10px;
}

.work-list {
    display: flex;
    flex-wrap: wrap;
    gap: 80px;
}

.work-item {
    width: 100%;
    position: relative;
    transition: 0.5s;
    cursor: pointer;
}

.work-item:hover {
    transform: scale(1.03);
}

.work-content {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    display: flex;
    padding: 40px 40px 40px 40px;
    width: calc(100% - 60px);
}

.work-item:nth-child(even) .work-content {
    flex-direction: row-reverse;
    margin-left: auto;
}

.work-item:hover .work-content {
    transition: 0.5s;
    animation: shadow 1s infinite alternate;
}

@keyframes shadow {
    0% {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    100% {
        box-shadow: 0 0 15px #81caec;
    }
}

.work-img {
    position: relative;
    width: 345px;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-right: -100px;
    margin-left: 40px;
    border: 1px solid rgb(236, 236, 236);
    transition: 0.5s;
}

.work-item:nth-child(even) .work-img {
    margin-left: -100px;
    margin-right: 40px;
}

.work-content:hover .work-img {
    transform: translateY(-20px) scale(0.9);
}

.subtitle {
    color: #2f8fbf;
}

.text {
    margin: 10px 0 30px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
}

.tag-box {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 10px;
}

.tag {
    color: #A2A2A2;
    border: 1px solid #A2A2A2;
    border-radius: 5px;
    padding: 5px 10px;
    transition: 0.5s;
    font-size: 1rem;
}

.tag:hover {
    color: #6A6A6A;
    border: 1px solid #6A6A6A;
}

@media screen and (max-width: 860px) {
    .tag {
        font-size: 0.8rem;
    }
}

@media screen and (max-width: 740px) {
    .work-EN-title {
        font-size: 3rem;
        top: -2rem;
    }

    .work-title {
        margin-bottom: 60px;
    }

    .work-content,
    .work-item:nth-child(even) .work-content {
        flex-direction: column-reverse;
        margin-top: 40px;
        padding: 40px;
        width: 100%;
    }

    .work-img,
    .work-item:nth-child(even) .work-img {
        margin: -100px auto 40px;
        width: 85%;
        max-height: 250px;
        object-fit: cover;
    }

    .work-content:hover .work-img {
        transform: scale(0.9);
    }
}

@media screen and (max-width: 540px) {
    .work-container {
        padding: 80px 0 0;
    }

    .work-box:not(:first-child) {
        margin-top: 150px;
    }

    .work-EN-title {
        font-size: 2rem;
        top: -1.7rem;
    }

    .work-content,
    .work-item:nth-child(even) .work-content {
        padding: 20px 30px 30px;
    }

    .work-img,
    .work-item:nth-child(even) .work-img {
        margin: -50px auto 20px;
        width: 100%;
        height: auto;
    }

    .text {
        margin: 5px 0 15px;
    }

    .tag-box {
        gap: 10px;
    }

    .tag {
        font-size: 0.7rem;
    }
}

@media screen and (max-width: 200px) {
    .work-EN-title {
        display: none;
    }
}
</style>
