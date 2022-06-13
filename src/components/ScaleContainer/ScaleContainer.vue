<template>
  <div ref="el" class="contain-container" :class="{ 'original-size': originalSize }">
    <div class="scale-container" :style="containerStyle">
      <div class="scale-container__inner" :style="slotsStyle">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  canvasWidth: number
  canvasHeight: number
  originalSize?: boolean
}>(), {
  originalSize: false,
})

const scaleData = reactive({
  scaleX: 0,
  scaleY: 0,
  minScale: 0,
  maxScale: 0,
})

const isometric = computed(() => {
  // return false
  return true
  return scaleData.maxScale - scaleData.minScale > 0.2
})

const containerStyle = computed(() => {
  const scaleX = isometric.value ? scaleData.minScale : scaleData.scaleX
  const scaleY = isometric.value ? scaleData.minScale : scaleData.scaleY
  return {
    width: `${props.canvasWidth * scaleX}px`,
    height: `${props.canvasHeight * scaleY}px`,
  }
})

const slotsStyle = computed(() => {
  const scaleX = isometric.value ? scaleData.minScale : scaleData.scaleX
  const scaleY = isometric.value ? scaleData.minScale : scaleData.scaleY
  return {
    width: `${props.canvasWidth}px`,
    height: `${props.canvasHeight}px`,
    transform: `scale(${scaleX}, ${scaleY})`,
  }
})

const el = ref<HTMLElement | null>(null)
const updateScale = () => {
  if (!props.originalSize) {
    const $parent = el.value?.parentElement
    if ($parent) {
      scaleData.scaleX = $parent.clientWidth / props.canvasWidth
      scaleData.scaleY = $parent.clientHeight / props.canvasHeight
    }
  }
  else {
    scaleData.scaleX = 1
    scaleData.scaleY = 1
  }
  scaleData.minScale = Math.min(scaleData.scaleX, scaleData.scaleY)
  scaleData.maxScale = Math.max(scaleData.scaleX, scaleData.scaleY)
}

onMounted(() => {
  window.addEventListener('resize', updateScale)
  return updateScale()
})

onUpdated(() => {
  if (!props.originalSize) return updateScale()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScale)
})

</script>

<style lang="css" scoped>
.contain-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.original-size {
  display: block;
  overflow: auto;
}

.scale-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.scale-container__inner {
  transform-origin: 0 0;
}
</style>
