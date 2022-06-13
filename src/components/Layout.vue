<template>
  <div v-if="loading" class="container-load">
    <div class="loading">
      <div class="hex" />
      <div class="hex" />
      <div class="hex" />
      <div class="hex" />
      <div class="hex" />
      <div class="hex" />
      <div class="hex" />
      <span>LOADING</span>
    </div>
  </div>

  <div v-else class="layout">
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

const loading = ref(true)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2400)
})
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  display: block;
  width: 7440px;
  height: 2976px;
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



.container-load {
  position: relative;
  display: flex;
  width: 7440px;
  height: 2976px;
  align-items: center;
  justify-content: center;
  transform: scale(2);
  animation: fade 1.5s ease;

  .loading {
    display: block;
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    animation: loading-fadeIn 2s 1 ;
    animation-fill-mode: forwards;
    span {
      display: block;
      position: absolute;
      bottom: -80px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      color: #fff;
      font-size: 1.2em;
      text-align: center;
      letter-spacing: 0.3em;
    }

    .hex {
      position: absolute;
      width: 30px;
      height: 20px;
      background-color: #03c1c2;
      animation: hex-fade 1.5s infinite ease;
      box-shadow: 0 0 20px #03c1c2, 0 0 20px #03c1c2;
      opacity: 0.1;

      &:nth-child(1) { top: 10px; left: 17px; animation-delay: 0.1s }
      &:nth-child(2) { top: 10px; left: 51px; animation-delay: 0.2s }
      &:nth-child(3) { top: 40px; left: 70px; animation-delay:0.3s }
      &:nth-child(4) { top: 70px; left: 51px; animation-delay:0.4s }
      &:nth-child(5) { top: 70px; left: 17px; animation-delay:0.5s }
      &:nth-child(6) { top: 40px; left: 0; animation-delay:0.6s }
      &:nth-child(7) { top: 40px; left: 35px; animation-delay:0.7s }
      &:nth-child(8) { top: 10px; left: 17px; animation-delay: 0.1s }

      &:before,
      &:after {
        position: absolute;
        content: "";
        width: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
      }

      &:before { border-bottom: 8px solid #03c1c2; bottom: 100%; }
      &:after { width: 0; top: 100%; border-top: 8px solid #03c1c2; }

    }

    @keyframes hex-fade {
      0% { opacity: 1; transform:scale(1); }
      7% { opacity: 0; transform:scale(0.2); }
      42% { opacity: 0; transform:scale(0.2); }
      49% { opacity: 1; transform:scale(1); }
      100% { opacity: 1; transform:scale(1); }
    }

    @keyframes loading-fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  }

  @keyframes fade {
    0% { opacity: 1; }
    7% { opacity: 0; }
    42% { opacity: 0; }
    49% { opacity: 1; }
    100% { opacity: 1 }
  }
}

</style>
