<template>
  <div class="app" :class="`app-${size.width}-${size.height}`">
    <ScaleContainer v-if="size" :canvas-width="size.width" :canvas-height="size.height" :original-size="originalSize">
      <div class="app__view">
        <RouterView :width="size.width" :height="size.height" />
      </div>
    </ScaleContainer>
  </div>
</template>

<script setup lang="ts">
import APP_CONFIG from '@/config'

const originalSize = ref(!!APP_CONFIG.ORIGINAL_SIZE)

const windowSize = reactive({
  width: window.innerWidth,
  height: window.innerHeight,
})

window.addEventListener('resize', () => {
  windowSize.width = window.innerWidth
  windowSize.height = window.innerHeight
})

const size = computed(() => {
  if (APP_CONFIG.SIZE) return APP_CONFIG.SIZE

  const winBy = windowSize.height / windowSize.width
  const size = APP_CONFIG.SIZES.find((item, index) => {
    if (index === APP_CONFIG.SIZES.length - 1) return true
    const by = item.height / item.width
    const by2 = APP_CONFIG.SIZES[index + 1].height / APP_CONFIG.SIZES[index + 1].width
    const limit = by - (by2 / 2)
    return winBy > limit
  })

  return size || APP_CONFIG.SIZES[0]
})

provide('pageSize', size)
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100vh;
  &__view {
    width: 100%;
    height: 100%;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  }
}
</style>

<style lang="css">
html, body {
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  font-family: 'PingFang SC', 'Microsoft YaHei', Arial;
  background-color: #061127;
  color: #ffffff;
  font-size: 28px;
}

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 1px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  background : rgba(#000000, 0.1);
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  background : rgba(#000000, 0.05);
}

img {
  pointer-events: none;
  user-select: none;
  image-rendering: -webkit-optimize-contrast;
}
</style>
