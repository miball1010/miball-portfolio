<script setup>
import popup from '@/components/Popup.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '@/stores/portfolioStore'
const store = usePortfolioStore()
const { works, popupNumber } = storeToRefs(store)

const currentPage = route.path.split('/').pop()

const workIfo = computed(() =>
    (works.value || [])
        .flatMap(group => group.work || [])
        .find(item => item.key === currentPage) || null
)

const workText = computed(() =>
    workIfo.value?.text.replace(/<br>/g, '<br><br>') || ''
)
</script>

<template>
    <div class="page-container" v-if="workIfo">
        <div class="title-box">
            <div class="title">{{ workIfo.title }}</div>
            <div class="text" v-html="workText"></div>
            <div class="btn-box" v-if="workIfo.btn">
                <a v-for="item in workIfo.btn" class="link-btn" :href="item.url" target="_blank">{{ item.text }}</a>
            </div>
        </div>
        <RouterView />
    </div>
    <div class="footer">
        © 2025 Miball
    </div>
    <popup :number="popupNumber" />
</template>

<style scoped>
.page-container {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 120px;
    opacity: 0;
    transform: translateY(10px);
    animation: fade 0.5s ease-in forwards;
}

@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }

    100% {
        opacity: 100%;
        transform: translateY(0px);
    }
}

.page-container .title-box {
    border: 1px solid #6A6A6A;
    background-color: white;
    padding: 60px;
    margin-bottom: 60px;
}

.page-container .title-box .title {
    text-align: center;
    color: #2f8fbf;
}

.page-container .title-box .text {
    margin: 35px 0 0;
    text-align: justify;
}

.btn-box {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.link-btn {
    cursor: pointer;
    background-color: #313B44;
    color: white;
    padding: 10px 20px;
    display: block;
    width: fit-content;
    position: relative;
    font-size: 1rem;
    transition: 0.5s;
}

.link-btn::after {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px solid white;
    animation: btnAni 2s infinite;
}

@keyframes btnAni {
    0% {
        inset: 3px;
        opacity: 1;
    }

    80% {
        inset: 0px;
        opacity: 0;
    }

    100% {
        inset: 0px;
        opacity: 0;
    }
}

.link-btn:hover {
    background-color: #2f8fbf;
}

@media screen and (max-width:540px) {
    .page-container {
        padding-top: 75px;
    }

    .page-container .title-box {
        padding: 40px 20px;
        margin-bottom: 50px;
    }

    .page-container .title-box .text {
        margin: 25px 0 0;
    }

    .btn-box {
        margin-top: 30px;
    }

    .link-btn {
        font-size: 0.9rem;
    }
}
</style>