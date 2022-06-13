
<template>
  <div class="highcharts-pie-3d">
    <div ref="$pieEl" class="highcharts-pie-3d__inner" />
    <div class="tulibox">
      <div v-for="(item, index) in list" :key="item.name" class="tulibox-item">
        <span class="symbol" :style="{ background: colors[index] }" />
        <span class="name">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import highcharts from 'highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
import exporting from 'highcharts/modules/exporting'
</script>

<script setup lang="ts">
import ResizeObserver from 'resize-observer-polyfill'

highcharts3d(highcharts)
exporting(highcharts)

highcharts.wrap((highcharts as any).seriesTypes.pie.prototype, 'translate', function(this: any, proceed, ...args: any[]) {
  proceed.apply(this, args)
  if (!this.chart.is3d()) return

  const chart = this.chart
  const options = chart.options
  const seriesOptions = this.options
  const depth = seriesOptions.depth || 0
  const options3d = options.chart.options3d
  const alpha = options3d.alpha
  const beta = options3d.beta

  let z = seriesOptions.stacking ? (seriesOptions.stack || 0) * depth : this._i * depth
  z += depth / 2
  if (seriesOptions.grouping !== false) z = 0

  highcharts.each(this.data, (point: any) => {
    point.shapeType = 'arc3d'

    const ran = point.options.height

    const shapeArgs = point.shapeArgs
    shapeArgs.z = z
    shapeArgs.depth = depth * 0.75 + ran
    shapeArgs.alpha = alpha
    shapeArgs.beta = beta
    shapeArgs.center = this.center
    shapeArgs.ran = ran

    const angle = (shapeArgs.end + shapeArgs.start) / 2

    point.slicedTranslation = {
      translateX: Math.round(Math.cos(angle) * seriesOptions.slicedOffset * Math.cos(alpha * 0)),
      translateY: Math.round(Math.sin(angle) * seriesOptions.slicedOffset * Math.cos(alpha * 0)),
    }
  })
})

highcharts.wrap(highcharts.SVGRenderer.prototype, 'arc3dPath', function(this: any, proceed, ...args: any[]) {
  const ret = proceed.apply(this, args)
  ret.zTop = (ret.zOut + 0.5) / 100
  return ret
})
// import highcharts from 'highcharts'

function fontChart(number: number) {
  return number
}

const colors = reactive(['#0088ff', '#89d5f7', '#ff760a', '#ffb124', '#00deff'])

const list = reactive([
  { name: '文件', y: 100, z: 100, label: '', height: 0 },
  { name: '视频', y: 100, z: 500, label: '', height: 0 },
  { name: '传感器数据', y: 100, z: 1000, label: '', height: 0 },
  { name: '音频', y: 100, z: 1500, label: '', height: 0 },
  { name: '图片', y: 100, z: 2000, label: '', height: 0 },
])

const $pieEl: any = ref(null)

const initOption = () => {
  const maxZ = list.reduce((acc, cur) => acc + cur.z, 0)

  list.forEach((item) => {
    const bfb = (item.z / maxZ)
    item.height = 300 * bfb
    item.label = `${(bfb * 100).toFixed(0)}%`
  })

  highcharts.chart($pieEl.value, {
    chart: {
      type: 'pie',
      animation: false,
      backgroundColor: 'rgba(0,0,0,0)',

      events: {
        load() {
          const each = highcharts.each
          const points = this.series[0].points
          each(points, (p: any) => {
            p.graphic.attr({
              translateY: -p.shapeArgs.ran,
            })
            p.graphic.side1.attr({
              translateY: -p.shapeArgs.ran,
            })
            p.graphic.side2.attr({
              translateY: -p.shapeArgs.ran,
            })
          })
        },
      },
      options3d: {
        enabled: true,
        alpha: 65,
      },
    },
    legend: {
      enabled: false, // 关闭图例
    },
    exporting: {
      enabled: false,
    },
    title: {
      // enabled: false,
      text: '',
    },
    subtitle: {
      text: '',
    },
    plotOptions: {
      pie: {
        allowPointSelect: false, // 禁用点击
        cursor: 'pointer',
        depth: 10,
        showInLegend: true,
        size: '100%', // 外圈直径大小
        innerSize: '60%', // 内圈直径大小
        center: ['32%', '60%'],
        colors,
        dataLabels: {
          enabled: true, // 是否显示饼图的线形tip
          distance: 30,
          // softConnector: false,
          // position: 'center',
          format: '{point.label}',
          style: {
            fontSize: 30,
            color: '#fff',
          },
        },
      },
    },
    credits: {
      enabled: false, // 禁用版权信息
    },
    series: [
      {
        type: 'pie',
        name: '占比',
        data: list,
      },
    ],
  }, () => {})
}

onMounted(() => {
  initOption()
})

const robserver = new ResizeObserver(() => initOption())
onMounted(() => $pieEl.value && robserver.observe($pieEl.value))
onUnmounted(() => robserver.disconnect())
</script>

<style lang="scss" scoped>
.highcharts-pie-3d {
  position: relative;
  width: 100%;
  height: 100%;
  &__inner {
    width: 100%;
    height: 100%;
  }
}
.tulibox {
  position: absolute;
  top: 60px;
  right: 160px;
  width: 240px;
  .tulibox-item {
    width: 280px;
    display: inline-block;
    vertical-align: top;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 40px;
    .symbol {
      content: "";
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 8px;
      background-color: #fff600;
      vertical-align: top;
      margin-right: 20px;
    }
    .name {
      vertical-align: top;
    }
  }
}
</style>
