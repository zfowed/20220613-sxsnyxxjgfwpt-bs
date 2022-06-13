<template>
  <div class="layout">
    <div class="layout-header animate-animated animate-delay-0.3s animate-fadeIn">
      <img class="w-4374px h-208px m-auto" src="@/assets/images/layout-header.png" alt="">
    </div>
    <div class="layout-tip animate-animated animate-delay-0.6s animate-fadeIn">
      <img class="w-4616px h-136px m-auto" src="@/assets/images/layout-tip.png" alt="">
    </div>

    <div class="layout-left animate-animated animate-delay-1s animate-fadeInLeft">
      <slot name="left"/>
    </div>
    <div class="layout-middle animate-animated animate-delay-1.6s animate-fadeIn">
      <slot name="middle"/>
    </div>
    <div class="layout-right animate-animated animate-delay-1s animate-fadeInRight">
      <slot name="right"/>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
import { format } from '@/utils/dayjs'

</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  display: block;
  width: 7440px;
  height: 2976px;
  // background: #061127 url('@/assets/images/layout-bg.png') no-repeat top center;
  background-size: cover;

  .layout-header {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: block;
    width: 100%;
    height: 208px;
    img {
      display: block;
      margin: auto;
      max-height: 100%;
    }
  }

  .layout-tip {
    position: absolute;
    top: 226px;
    left: 0;
    z-index: 10;
    display: block;
    width: 100%;
    height: 136px;
    img {
      display: block;
      margin: auto;
      max-height: 100%;
    }
  }

  .layout-left {
    position: absolute;
    top: 402px;
    left: 158px;
    z-index: 10;
    display: block;
    width: 2510px;
    height: 2480px;
    opacity: 0.68;
    border-radius: 20px;
    overflow: auto;
  }

  .layout-middle {
    position: absolute;
    top: 402px;
    left: 2696px;
    z-index: 10;
    display: block;
    width: 2048px;
    height: 2480px;
    border-radius: 20px;
    overflow: auto;
  }

  .layout-right {
    position: absolute;
    top: 402px;
    right: 158px;
    z-index: 10;
    display: block;
    width: 2510px;
    height: 2480px;
    opacity: 0.68;
    border-radius: 20px;
  }
}
</style>
