<template>
  <div class="px-60px">
    <div class="senior-text text-48px font-medium mb-30px">企业数据采集</div>
    <div class="flex">
      <div class="flex-1 h-564px">
        <VueEcharts :option="echarts1Option" />
      </div>
      <div class="flex-1 h-564px">
        <div class="w-1394px m-auto">
          <img class="w-452px h-126px ml-940px" src="@/assets/images/left-ltem3-img1.png" alt="">
          <div class="h-438px">
            <!-- <VueEcharts :option="echarts2Option" /> -->
            <HomeLeftItem3Highcharts />
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
    data: ['太原', '长治', '运城', '吕梁', '晋中', '临汾', '晋城', '晋城', '忻州', '朔州', '阳泉'],
  },
  color: ['#31DDDE', '#FFCD46', '#FFE59E', '#EC852A', '#84D5FF', '#C974FF', '#1380BF', '#31D592', '#12AFFF', '#6155DA', '#84D5FF'],
  series: [
    {
      name: '测点数目',
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
      fontSize: 28,
    }
  },
})
onMounted(() => {
  setTimeout(() => {
    echarts1Option.xAxis.data = ['太原', '长治', '运城', '吕梁', '晋中', '临汾', '晋城', '晋城', '忻州', '朔州', '阳泉']
    echarts1Option.series[0].data = [32000, 33000, 8700, 94500, 94000, 78000, 92000, 46000, 45000, 55000, 33000]
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
