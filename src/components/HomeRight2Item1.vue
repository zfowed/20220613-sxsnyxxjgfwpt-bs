<template>
  <div>
    <div class="box1">
      <div class="title mt-15px pl-50px">
        <span class="text-gradient">为“扩大非化石能源消费比重”举措提供数据支撑</span>
      </div>
      <div class="sub-title mt-15px pl-50px">
        <span>非化石能源占一次能源消费比重</span>
      </div>
      <div class="echarts-content flex flex-wrap mt-15px pl-50px pr-20px">
        <div
          v-for="(item, index) in progressList"
          :key="index"
          class="progress-item w-1/3 flex mb-40px mt-15px"
          style="align-items: center "
        >
          <ElProgress
            class="progress-default"
            type="circle"
            :color="item.color ? item.color : 'rgba(36, 252, 255, 0.3)'"
            :width="53"
            :percentage="item.progressNum"
            :show-text="false"
          />
          <div class="progress-label ml-15px">
            <div class="font-bold">
              {{ item.nums }}
            </div>
            <div class="text-16px">
              {{ item.year }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box2 h-241px" style="width: 75%;">
      <VueEcharts :option="echartsOption" />
    </div>
  </div>
</template>
<script setup lang="ts">
const progressList = reactive([
  {
    year: '2020年',
    nums: '6.54%',
    progressNum: 31.6,
    color: '#F9D820',
  },
  {
    year: '2021年',
    nums: '7.76%',
    progressNum: 32.8,
    isCurrent: true,
    color: '#24FCFF',
  },
  {
    year: '2022年',
    nums: '0.0%',
    progressNum: 31.6,
  },
  {
    year: '2023年',
    nums: '- -',
    progressNum: 31.6,
  },
  {
    year: '2024年',
    nums: '- -',
    progressNum: 31.6,
  },
  {
    year: '2025年',
    nums: '- -',
    progressNum: 31.6,
  },
])

const echartsOption = reactive({
  title: {
    text: '消费比重',
    subtext: '',
    x: 'center',
    textStyle: {
      fontSize: 12,
      fontWeight: 'normal',
      color: '#ffffff',
    },
  },
  grid: {
    top: 30,
    left: 60,
    right: 10,
    bottom: 30,
  },
  xAxis: {
    type: 'category',
    axisTick: { show: false },
    data: ['2020', '2021', '2022', '2023', '2024', '2025'],
    axisLabel: {
      color: '#B5CEE3',
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#0A63B4',
      },
    },
  },
  yAxis: [{
    name: '单位：%',
    nameTextStyle: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 12,
    },
    type: 'value',
    axisLine: {
      show: true,
      lineStyle: {
        color: '#0A63B4',
      },
    },
    axisLabel: {
      color: '#B5CEE3',
    },
    splitLine: {
      show: false,
    },
    splitNumber: 3,
    min: 0,
    max: 10,
  },
  {
    type: 'value',
    alignTicks: true,
    show: false,
    splitNumber: 3,
    min: 0,
    max: 25,
  }],
  tooltip: {
    trigger: 'axis',
    padding: 20,
    textStyle: {
      fontSize: 26,
    },
  },
  series: [
    {
      type: 'bar',
      stack: 'bar',
      yAxisIndex: 0,
      data: [null, null, null, null, null, null] as any[],
      barWidth: 35,
      colorBy: 'data',
      itemStyle: {
        normal: {
          barBorderRadius: [20, 20, 0, 0],
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
      type: 'line',
      yAxisIndex: 1,
      data: [null, null, null, null, null, null] as any[],
      itemStyle: {
        normal: {
          color: '#FFDC1C',
          label: {
            show: true,
            color: '#ffffff',
            formatter(params: any) {
              return params.data.name
            },
            offset: [0, -10],
          },
        },
      },
    },
  ],
})
onMounted(() => {
  setTimeout(() => {
    echartsOption.xAxis.data = ['2020', '2021', '2022', '2023', '2024', '2025']
    echartsOption.series[0].data = [6, 8]
    echartsOption.series[1].data = [{ value: 14.0, name: '6.54%' }, { value: 18.0, name: '7.76%' }]
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
