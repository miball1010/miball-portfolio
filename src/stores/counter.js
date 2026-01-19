import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const isDev = import.meta.env.DEV

  const works = ref([])
  const graphics = ref([])
  const skill = ref([])

  onMounted(() => {
    fetch(`${isDev ? '../public' : '.'}/data.json`)
      .then(res => res.json())
      .then(data => {
        skill.value = data.skill
        works.value = data.works
        graphics.value = data.graphics
      })
  })

  const nowPopup = ref({})
  const popupIsopen = ref(false)
  const popupContent = ref(null)//popup要重置位置用

  function popupClick(item) {
    nowPopup.value = item
    popupIsopen.value = true
    document.body.style.overflow = 'hidden'
  }

  function popupCloseClick() {
    popupIsopen.value = false
    setTimeout(() => {
      nowPopup.value = {}
      if (popupContent.value) {
        popupContent.value.scrollTop = 0;
      }
    }, 800)
    document.body.style.overflow = 'auto'
  }

  return {
    isDev,

    skill, works, graphics,

    nowPopup, popupContent, popupIsopen,
    popupClick, popupCloseClick,
  }
})