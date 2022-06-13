<template>
  <div>
    <div class="box1">
      <div class="title mt-15px pl-50px">
        <span class="text-gradient">为“推进非常规天然气增储上产”举措提供数据支撑</span>
      </div>
      <div class="sub-title mt-15px pl-50px">
        <span />
      </div>
      <div class="flex flex-wrap mt-15px ml-50px pr-20px h-335px">
        <VueEcharts :option="echartsOption" />
      </div>
    </div>
    <div class="box2 h-350px ml-40px mr-60px">
      <!-- <VueEcharts :option="echartsOption" /> -->
    </div>
  </div>
</template>
<script setup lang="ts">
const echartsOption = reactive({
  title: {
    text: '储量',
    left: 'center',
    textStyle: {
      color: '#fff',
      fontSize: 22,
    },
  },
  grid: {
    top: 40,
    right: 20,
    left: 80,
    bottom: 30,
  },
  yAxis: [{
    type: 'value',
    alignTicks: true,
    name: '单位：亿立方米 ',
    nameTextStyle: {
      padding: [0, 0, 5, 0],
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 18,
    },
    splitNumber: 5,
    axisLabel: {
      textStyle: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)',
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#0A63B4',
      },
    },
    splitLine: { show: false },
    axisTick: { show: false },
  },
  {
    type: 'value',
    alignTicks: true,
    show: false,
  }],
  xAxis: {
    type: 'category',
    nameLocation: 'middle',
    axisLabel: {
      interval: 0,
      rotate: 0,
      formatter(value: string) {
        return value.split(' ').join('\n')
      },
      textStyle: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)',
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#0A63B4',
      },
    },
    splitLine: { show: false },
    axisTick: { show: false },
    data: ['2020', '2021', '2022', '2023', '2024', '2025'],
  },
  color: ['#dab21d', '#9f32f3', '#39cb97', '#0394e8'],
  series: [
    {
      name: '1',
      type: 'bar',
      stack: 'bar',
      data: [null, null, null, null, null, null] as any[],
      barWidth: 70,
      itemStyle: {
        normal: {
          barBorderRadius: [50, 50, 0, 0],
          label: {
            show: true,
            position: 'top',
            formatter(params: any) {
              return `${params.value}`
            },
            textStyle: {
              fontSize: 20,
              color: 'rgba(255, 255, 255, 0.7)',
            },
          },
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              { offset: 0, color: 'rgb(73, 18, 149)' },
              { offset: 0.5, color: 'rgb(255, 130, 254)' },
              { offset: 1, color: 'rgb(255, 130, 254)' },
            ],
            global: false, // 缺省为 false
          },
        },
      },
    },
    {
      name: '2',
      type: 'bar',
      stack: 'bar',
      data: [null, null, null, null, null, null] as any[],
      barWidth: 70,
      itemStyle: {
        normal: {
          barBorderRadius: [50, 50, 0, 0],
          label: {
            show: true,
            position: 'top',
            formatter(params: any) {
              return `${params.value}`
            },
            textStyle: {
              fontSize: 20,
              color: 'rgba(255, 255, 255, 0.7)',
            },
          },
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              { offset: 0, color: 'rgb(73, 18, 149)' },
              { offset: 0.5, color: 'rgb(255, 130, 254)' },
              { offset: 1, color: 'rgb(255, 130, 254)' },
            ],
            global: false, // 缺省为 false
          },
        },
      },
    },
    {
      name: '3',
      type: 'bar',
      stack: 'bar',
      data: [null, null, null, null, null, null] as any[],
      barWidth: 70,
      itemStyle: {
        normal: {
          barBorderRadius: [50, 50, 0, 0],
          label: {
            show: true,
            position: 'top',
            formatter(params: any) {
              return `${params.value}`
            },
            textStyle: {
              fontSize: 20,
              color: 'rgba(255, 255, 255, 0.7)',
            },
          },
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              { offset: 0, color: 'rgba(13, 134, 101, 1)' },
              { offset: 0.5, color: 'rgba(13, 134, 101, 1)' },
              { offset: 1, color: 'rgba(54, 255, 182, 1)' },
            ],
            global: false, // 缺省为 false
          },
        },
      },
    },
    {
      name: '4',
      type: 'bar',
      stack: 'bar',
      data: [null, null, null, null, null, null] as any[],
      barWidth: 70,
      itemStyle: {
        normal: {
          barBorderRadius: [50, 50, 0, 0],
          label: {
            show: true,
            position: 'top',
            formatter(params: any) {
              return `${params.value}`
            },
            textStyle: {
              fontSize: 20,
              color: 'rgba(255, 255, 255, 0.7)',
            },
          },
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              { offset: 0, color: 'rgba(13, 134, 101, 1)' },
              { offset: 0.5, color: 'rgba(13, 134, 101, 1)' },
              { offset: 1, color: 'rgba(54, 255, 182, 1)' },
            ],
            global: false, // 缺省为 false
          },
        },
      },
    },
    {
      type: 'line',
      yAxisIndex: 1,
      data: [null, null, null, null, null, null] as any[],
      label: {
        show: true,
        position: 'top',
        offset: [0, -25],
        formatter(params: any) {
          return `${params.value}`
        },
        textStyle: {
          fontSize: 20,
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
})
onMounted(() => {
  setTimeout(() => {
    echartsOption.xAxis.data = ['2020', '2021', '2022', '2023', '2024', '2025']
    echartsOption.series[0].data = [6675]
    echartsOption.series[1].data = [null, 7000]
    echartsOption.series[2].data = [null, null, 8000]
    echartsOption.series[3].data = [null, null, null, 8000]
    echartsOption.series[4].data = [{ value: 160, name: '8%' }, { value: 180, name: '16.21%' }]
  }, 0)
})
</script>

<style lang="scss" scoped>
.text-gradient {
  color: #FFCE2B;
  @supports (-webkit-background-clip: text) {
    color: transparent;
    background: linear-gradient(to bottom, #FFFEB2, #FFCE2B);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
