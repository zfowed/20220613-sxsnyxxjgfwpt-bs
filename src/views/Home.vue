<template>
  <Layout>
    <template slot="left">
      <HomeLeft></HomeLeft>
    </template>
    <template slot="middle">
      <HomeMiddle></HomeMiddle>
    </template>
    <template slot="right">
      <Swiper>
        <SwiperItem>
          <HomeRight1></HomeRight1>
        </SwiperItem>
        <SwiperItem>
          <HomeRight2></HomeRight2>
        </SwiperItem>
        <SwiperItem>
          <HomeRight3></HomeRight3>
        </SwiperItem>
      </Swiper>
    </template>

    <div class="page-bg">
      <div class="page-bg__xxx"></div>
      <div class="page-bg__inner animate-animated animate-delay-0.3s animate-fadeIn">
        <video
          v-if="blobUrl"
          class="page-bg__video animate-animated animate-delay-0.3s animate-fadeIn"
          autoplay="true"
          controls="false"
          loop="true"
          muted="true"
          :src="blobUrl"
          @load="load"
        />
      </div>
    </div>
    
  </Layout>
</template>

<script setup lang="ts">
import APP_CONFIG from '@/config'
import { Swiper, SwiperSlide } from 'swiper/vue'

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

const load = () => {
  URL.revokeObjectURL && URL.revokeObjectURL(blobUrl.value)
}
</script>

<style lang="scss" scoped>
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
    // background: url('@/assets/images/background.jpg') no-repeat top left;
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
