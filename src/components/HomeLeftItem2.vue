<template>
  <div class="p-80px">
    <div class="senior-text text-48px font-medium mb-30px">企业数据采集</div>
    <div class="flex">
      <div class="flex-1 h-564px">
        <VueEcharts :option="echarts1Option" />
      </div>
      <div class="flex-1 h-564px">
        <div class="w-1394px m-auto">
          <img class="w-452px h-126px ml-940px" src="@/assets/images/left-ltem2-img1.png" alt="">
          <div class="h-438px">
            <VueEcharts :option="echarts2Option" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const echarts1Option = reactive({
  title: {
    text: '企业数目',
    subtext: '',
    x: 'center',
    textStyle: {
      fontSize: 38,
      fontWeight: 'normal',
      color: '#ffffff',
    },
  },
  grid: {
    top: 100,
    right: 40,
    left: 140,
    bottom: 60,
  },
  yAxis: {
    type: 'value',
    alignTicks: true,
    name: '(单位：个）',
    nameTextStyle: {
      padding: [0, 0, 38, 0],
      color: '#FFFFFF',
      fontSize: 38,
    },
    splitNumber: 5,
    axisLabel: {
      margin: 20,
      textStyle: {
        fontSize: 26,
        color: '#B5CEE3',
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#0A63B4',
        width: 2,
      },
    },
    splitLine: { show: false },
    axisTick: { show: false },
  },
  xAxis: {
    type: 'category',
    nameLocation: 'middle',
    axisLabel: {
      interval: 0,
      rotate: 0,
      margin: 20,
      formatter(value: string) {
        return value.split(' ').join('\n')
      },
      textStyle: {
        fontSize: 26,
        color: '#B5CEE3',
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#0A63B4',
        width: 2,
      },
    },
    splitLine: { show: false },
    axisTick: { show: false },
    data: ['煤', '电', '气', '热', '新能源', '其它'],
  },
  color: ['#31DDDE', '#D4A1F9', '#FCE84E', '#A0CC4B', '#EE7172', '#36FFCA', '#CDCDCD'],
  series: [
    {
      name: '企业数目',
      type: 'bar',
      yAxisIndex: 0,
      data: [] as any[],
      barWidth: 33,
      colorBy: 'data',
      itemStyle: {
        normal: {
          barBorderRadius: [20, 20, 0, 0],
          label: {
            show: true,
            position: 'top',
            formatter(params: any) {
              return `${params.value}`
            },
            textStyle: {
              fontSize: 26,
              color: '#FFFFFF',
            },
          },
        },
      },
    },
  ],
  tooltip: {
    trigger: 'item',
    padding: 20,
    textStyle: {
      fontSize: 26,
    }
  },
})
onMounted(() => {
  setTimeout(() => {
    echarts1Option.xAxis.data = ['煤', '电', '气', '热', '新能源', '其它']
    echarts1Option.series[0].data = [5000, 2000, 1000, 500, 250, 150, 50]
  }, 1000)
})
const echarts2Option = reactive({
  title: {
    text: '企业 占比'.split(' ').join('\n'),
    subtext: '',
    x: '31.4%',
    y: 'center',
    textStyle: {
      fontSize: 44,
      fontWeight: 'normal',
      color: '#ffffff',
    },
  },
  legend: {
    top: 106,
    bottom: 40,
    right: 0,
    orient: 'vertical',
    itemWidth: 40,
    itemHeight: 40,
    itemGap: 40,
    textStyle: {
      color: '#ffffff',
      fontSize: 40,
      width: 100,
      padding: [0, 0, 0, 20],
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
  },
  color: ['#31DDDE', '#D4A1F9', '#FCE84E', '#A0CC4B', '#EE7172', '#36FFCA', '#CDCDCD'],
  series: [
    {
      type: 'pie',
      center: ['35%', '50%'],
      radius: ['50%', '80%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderWidth: 2,
        label: { show: true, formatter: '{b}' },
        labelLine: { show: true },
      },
      minShowLabelAngle: 0,
      minAngle: 1,
      stillShowZeroSum: true,
      label: {
        show: true,
        fontSize: 40,
        formatter: '{d}%',
        color: '#42F8FF',
      },
      labelLine: {
        show: true,
        length: 20,
        length2: 60,
      },
      data: [
        { name: '煤', value: 0 },
        { name: '电', value: 0 },
        { name: '油', value: 0 },
        { name: '气', value: 0 },
        { name: '热', value: 0 },
        { name: '新能源', value: 0 },
        { name: '其它', value: 0 },
      ] as { name: string; value: number | null }[],
    },
  ],
  tooltip: {
    trigger: 'item',
    padding: 20,
    textStyle: {
      fontSize: 28,
    },
  },
})
onMounted(() => {
  setTimeout(() => {
    echarts2Option.series[0].data = [
      { name: '煤', value: 5000 },
      { name: '电', value: 2000 },
      { name: '油', value: 1000 },
      { name: '气', value: 500 },
      { name: '热', value: 250 },
      { name: '新能源', value: 150 },
      { name: '其它', value: 50 },
    ]
  }, 1000)
})
</script>

<style lang="scss" scoped>
.item {
  padding: 80px;
}
.senior-text {
  color: #FFCE2B;
  @supports (-webkit-background-clip: text) {
    font-weight: normal;
    color: transparent;
    background: linear-gradient(to bottom, #FFFEB2, #FFCE2B);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
