<template>
  <Layout @loaded="handleLoaded">
    <template #left>
      <HomeLeft />
    </template>
    <template #middle>
      <HomeMiddle />
    </template>
    <template #right>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <HomeRight1 :active="swiperActive" />
          </div>
          <div class="swiper-slide">
            <HomeRight2 :active="swiperActive" />
          </div>
          <div class="swiper-slide">
            <HomeRight3 :active="swiperActive" />
          </div>
        </div>
        <div class="swiper-pagination" />
      </div>
    </template>

    <div class="page-bg">
      <div class="page-bg__xxx" />
      <div class="page-bg__inner animate-animated animate-delay-1.6s animate-fadeIn">
        <video
          v-if="blobUrl"
          class="page-bg__video"
          autoplay="true"
          controls="false"
          loop="true"
          muted="true"
          :src="blobUrl"
          @load="videoLoad"
        />
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">

import Swiper, { Autoplay, EffectFade, Pagination } from 'swiper'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import APP_CONFIG from '@/config'

import defaultVideoUrl from '@/assets/videos/background.mp4?url'

const videoUrl = APP_CONFIG.BACKGROUND_VIDEO || defaultVideoUrl
const blobUrl = ref('')
onMounted(() => {
  setTimeout(() => {
    const URL = window.URL || window.webkitURL
    const xhr = new XMLHttpRequest()
    xhr.open('GET', videoUrl, true)
    xhr.responseType = 'blob'
    xhr.onload = function() {
      if (this.status === 200) {
        const blob = this.response
        blobUrl.value = URL.createObjectURL ? URL.createObjectURL(blob) : videoUrl
      }
    }
    xhr.send()
  }, 1000)
})
const videoLoad = () => {
  URL.revokeObjectURL && URL.revokeObjectURL(blobUrl.value)
}

let swiper: Swiper
const swiperActive = ref(1)
const handleLoaded = () => {
  nextTick(() => {
    swiper = new Swiper('.swiper', {
      modules: [Pagination, EffectFade, Autoplay],
      // loop: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true,
      // },
      observer: true,
      observeParents: true,
      on: {
        slideChange(aaa) {
          swiperActive.value = aaa.realIndex + 1
        },
      },
    })
  })
}
onUnmounted(() => {
  swiper?.destroy()
})
</script>

<style lang="scss" scoped>
.swiper {
  height: 100%;
  .swiper-wrapper {
    height: 100%;
  }
  .swiper-slide {
    height: 100%;
  }
  &::v-deep {
    .swiper-pagination-bullet {
      width: 100px;
      height: 10px;
      border-radius: 10px;
      margin: 0 20px;
      background-color: rgba(255, 255, 255, 0.6);
      &.swiper-pagination-bullet-active {
        background-color: #fff;
      }
    }
  }
}

.page-bg {
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translateX(-50%);
  z-index: 1;
  &__xxx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  &__inner {
    width: 100%;
    height: 100%;
    background: url('@/assets/images/background.jpg') no-repeat top left;
    background-size: 100% 100%;
  }
  &__video {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    // mix-blend-mode: multiply;
    &::-webkit-media-controls-fullscreen-button,
    &::-webkit-media-controls-play-button,
    &::-webkit-media-controls-timeline,
    &::-webkit-media-controls-current-time-display,
    &::-webkit-media-controls-time-remaining-display,
    &::-webkit-media-controls-mute-button,
    &::-webkit-media-controls-toggle-closed-captions-button,
    &::-webkit-media-controls-enclosure,
    &::-webkit-media-controls-volume-slider {
        display: none;
    }
  }
}
</style>
