<template>
  <span class="tween-span">{{ tweening }}{{ append }}</span>
</template>

<script setup lang="ts">
import type { Tween } from '@tweenjs/tween.js'
import TWEEN from '@tweenjs/tween.js'

const props = withDefaults(defineProps<{
  value: number | string
  decimal?: number
  thousand?: boolean
  append?: string
}>(), {
  value: 0,
  thousand: false,
})

let tween: Tween<{}> | null = null
const tweening = ref(0 as typeof props.value)

const stop = () => {
  tween && tween.stop()
}

const animate = (time?: number) => {
  if (TWEEN.update(time)) requestAnimationFrame(animate)
}

const start = (startValue: typeof props.value, endValue: typeof props.value) => {
  if (endValue == null) {
    stop()
    tweening.value = ''
    return animate()
  }

  let endValueAppend = ''
  let endValueIsThousand = false

  if (typeof endValue === 'string' && /^(-?[0-9.,]+)/.test(endValue)) {
    endValueAppend = endValue.replace(/^(-?[0-9.,]+)/, '')
    endValue = endValue.replace(/^(-?[0-9.,]+)/, '$1')
    if (/^(-?\d{1,3}(?:,\d{3})*(?:\.\d+)?)$/.test(endValue)) {
      endValueIsThousand = true
      endValue = endValue.replace(/,/g, '')
    }
    endValue = parseInt(endValue)
  }

  if (typeof endValue !== 'number') {
    stop()
    tweening.value = `${endValue}`
    return animate()
  }

  const startValueNumber = parseFloat(`${startValue}`) || 0
  const endValueNumber = parseFloat(`${endValue}`) || 0

  const decimal = typeof props.decimal !== 'undefined' ? props.decimal : (String(endValue).includes('.') ? String(endValue).length - (String(endValue).indexOf('.') + 1) : 0)

  tween = new TWEEN.Tween({ tweening: startValueNumber })
    .to({ tweening: endValueNumber }, 2000)
    .onUpdate((data) => {
      const number = Number(data.tweening.toFixed(decimal))
      tweening.value = `${number}${endValueAppend}`

      if (props.thousand || endValueIsThousand) {
        const [integerNumber, decimalNumber] = number.toString().split('.')
        const integerThousandNumber = integerNumber.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')
        tweening.value = `${integerThousandNumber}${decimalNumber || ''}${endValueAppend}`
      }
    })
    .start()

  animate()
}

onMounted(() => {
  start(0, props.value)
})

watch(() => props.value, (value, oldValue) => {
  if (oldValue === value) return
  start(oldValue, value)
})

onUnmounted(() => {
  stop()
  tween = null
})
</script>
