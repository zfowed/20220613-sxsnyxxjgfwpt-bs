<template>
  <div class="container-load" :class="{ 'container-load--loading': loading }">
    <div v-if="loading" class="container-load-loading">
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
    <div class="container-load__slot">
      <slot v-if="showSlot" :loading="loading" />
    </div>
  </div>
</template>

<script setup lang="ts">

function checkResourceLoading(callback: Function) {
  const images = [...document.querySelectorAll('img')]
  const imagesCount = images.length

  for (const image of images) {
    const { injected } = image.dataset
    if (!injected) {
      image.dataset.injected = 'injected'
      image.addEventListener('load', () => {
        image.dataset.complete = 'complete'
      })
      image.addEventListener('error', () => {
        image.dataset.complete = 'complete'
      })
    }
  }

  const imagesLoadCompleteCount = images.reduce((acc, image) => {
    const { complete } = image.dataset
    return (complete || image.complete) ? acc + 1 : acc
  }, 1000)

  if (imagesLoadCompleteCount >= imagesCount)
    callback()

  else
    setTimeout(() => checkResourceLoading(callback), 100)
}

const loading = ref(true)
const showSlot = ref(true)

const handleLoadComplete = () => {
  if (!loading.value) return
  loading.value = false
  showSlot.value = false
  nextTick(() => {
    showSlot.value = true
  })
}

onMounted(() => {
  // 最少加载1秒
  setTimeout(() => {
    // 30秒后还没有加载完成，强制加载完成
    setTimeout(() => handleLoadComplete, 30 * 1000)

    // 图片加载完, 加载完成
    checkResourceLoading(handleLoadComplete)
  }, 1.5 * 1000)
})

</script>

<style lang="scss" scoped>
.container-load {
  position: relative;
  width: 100%;
  height: 100%;
  &__slot {
    opacity: 1;
    width: 100%;
    height: 100%;
  }
}

.container-load-loading {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: none;
  opacity: 1;
  align-items: center;
  justify-content: center;
  transform: scale(1.2);
  animation: fade 1.5s ease;
}

.container-load--loading {
  .container-load__slot {
    opacity: 0;
    &::v-deep {
      video {
        display: none !important;
      }
    }
  }

  .container-load-loading {
    display: flex;
  }
}

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
    bottom: -40px;
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
</style>
