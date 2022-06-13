<template>
  <div>
    <div class="box1">
      <div class="title mt-15px pl-50px text-48px">
        <span class="text-gradient">为“推进非常规天然气增储上产”举措提供数据支撑</span>
      </div>
      <div class="sub-title mt-45px pl-50px">
        <span />
      </div>
      <div class="flex flex-wrap mt-15px ml-50px pr-20px h-455px">
        <VueEcharts :option="echartsOption" />
      </div>
    </div>
    <div class="box2 h-470px ml-40px mr-60px mt-65px">
      <VueEcharts :option="echarts1Option" />
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
      fontSize: 26,
    },
  },
  grid: {
    top: 65,
    right: 20,
    left: 100,
    bottom: 30,
  },
  yAxis: [{
    type: 'value',
    alignTicks: true,
    name: '单位：亿立方米 ',
    nameTextStyle: {
      padding: [0, 0, 5, 0],
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 26,
    },
    splitNumber: 5,
    axisLabel: {
      textStyle: {
        fontSize: 26,
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
        fontSize: 26,
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
              fontSize: 26,
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
              fontSize: 26,
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
          return `${params.name}`
        },
        textStyle: {
          fontSize: 26,
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
    echartsOption.series[3].data = [null, null, null, 9000]
    echartsOption.series[4].data = [{ value: 160, name: '' }, { value: 180, name: '4.86%' }]
  }, 0)
})
const echarts1Option = reactive({
  title: {
    text: '产量',
    left: 'center',
    textStyle: {
      color: '#fff',
      fontSize: 26,
    },
  },
  grid: {
    top: 65,
    right: 20,
    left: 100,
    bottom: 30,
  },
  yAxis: [{
    type: 'value',
    alignTicks: true,
    name: '单位：亿立方米 ',
    nameTextStyle: {
      padding: [0, 0, 5, 0],
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 26,
    },
    splitNumber: 5,
    axisLabel: {
      textStyle: {
        fontSize: 26,
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
        fontSize: 26,
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
              fontSize: 26,
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
              { offset: 0, color: 'rgba(22, 62, 176, 1)' },
              { offset: 0.5, color: 'rgba(70, 240, 255, 1)' },
              { offset: 1, color: 'rgba(70, 240, 255, 1)' },
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
              fontSize: 26,
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
              { offset: 0, color: 'rgba(22, 62, 176, 1)' },
              { offset: 0.5, color: 'rgba(70, 240, 255, 1)' },
              { offset: 1, color: 'rgba(70, 240, 255, 1)' },
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
              fontSize: 26,
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
              fontSize: 26,
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
        offset: [0, -5],
        formatter(params: any) {
          return `${params.name}`
        },
        textStyle: {
          fontSize: 26,
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
    echarts1Option.xAxis.data = ['2020', '2021', '2022', '2023', '2024', '2025']
    echarts1Option.series[0].data = [81.46]
    echarts1Option.series[1].data = [null, 120]
    echarts1Option.series[2].data = [null, null, 200]
    echarts1Option.series[3].data = [null, null, null, 300]
    echarts1Option.series[4].data = [{ value: 140, name: '' }, { value: 160, name: '47.31%' }]
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
