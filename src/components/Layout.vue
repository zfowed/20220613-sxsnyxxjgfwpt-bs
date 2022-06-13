<template>
  <div class="layout">
    <div class="layout-left">
      <slot name="left"/>
    </div>
    <div class="layout-middle">
      <slot name="middle"/>
    </div>
    <div class="layout-right">
      <slot name="right"/>
    </div>

    <slot/>
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

  .layout-right {
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

  .layout-left {
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
