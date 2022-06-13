<template>
  <div>
    <div class="box1">
      <div class="title mt-15px pl-50px text-48px">
        <span class="text-gradient">为“扩大非化石能源装机规模”举措提供数据支撑</span>
      </div>
      <div class="sub-title mt-40px pl-50px text-48px">
        <span>非化石能源发电装机容量占全省发电装机容量</span>
      </div>
      <div class="progress-list flex flex-wrap mt-25px ml-50px pr-20px h-380px">
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
            :width="105"
            :stroke-width="9"
            :percentage="item.progressNum"
            :show-text="false"
          />
          <div class="progress-label ml-15px">
            <div class="font-bold text-40px">
              {{ item.nums }}
            </div>
            <div class="text-24px mt-10px">
              {{ item.year }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box2 h-480px ml-40px mr-60px mt-40px">
      <VueEcharts :option="echartsOption" />
    </div>
  </div>
</template>
<script setup lang="ts">
const progressList = reactive([
  {
    year: '2020年',
    nums: '31.6%',
    progressNum: 31.6,
    color: '#F9D820',
  },
  {
    year: '2021年',
    nums: '32.8%',
    progressNum: 32.8,
    isCurrent: true,
    color: '#24FCFF',
  },
  {
    year: '2022年',
    nums: '- -',
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
  legend: {
    top: 0,
    right: 0,
    itemWidth: 40,
    itemHeight: 40,
    itemGap: 10,
    textStyle: {
      color: '#ffffff',
      fontSize: 34,
      width: 70,
      padding: [0, 10, 0, 10],
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    data: ['风电', '光电', '水电', '生物'],
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
    name: '单位：万千瓦',
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
      name: '生物',
      type: 'bar',
      stack: 'bar',
      data: [null, null, null, null, null, null] as any[],
      barWidth: 70,
    },
    {
      name: '水电',
      type: 'bar',
      stack: 'bar',
      data: [null, null, null, null, null, null] as any[],
      barWidth: 70,
    },
    {
      name: '光电',
      type: 'bar',
      stack: 'bar',
      data: [null, null, null, null, null, null] as any[],
      barWidth: 70,
    },
    {
      name: '风电',
      type: 'bar',
      stack: 'bar',
      data: [null, null, null, null, null, null] as any[],
      barWidth: 70,
    },
    {
      name: '风电2',
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
      itemStyle: {
        normal: {
          color: '#FFDC1C',
          label: {
            show: true,
            color: '#ffffff',
            formatter(params: any) {
              return params.data.name
            },
            textStyle: {
              fontSize: 26,
              color: 'rgba(255, 255, 255, 0.7)',
            },
          },
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
    echartsOption.series[0].data = [64, 150]
    echartsOption.series[1].data = [223, 800]
    echartsOption.series[2].data = [1309, 1400]
    echartsOption.series[3].data = [1974, 1600]
    echartsOption.series[4].data = [null, null, 4300, 5000]
    echartsOption.series[5].data = [{ value: 160, name: '8%' }, { value: 180, name: '16.21%' }]
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
.progress-list {
  ::v-deep {
    .el-progress__text {
      color: #ffffff80;
    }
    .el-progress {
      svg .el-progress-circle__track {
        stroke: #1e4ea1;
      }
    }
    .progress-yellow.el-progress {
      /* transform: rotate(90deg); */
      &:hover {
        svg .el-progress-circle__path {
          stroke: #FFF330;
        }
      }
      svg .el-progress-circle__track {
        stroke: #1e4ea1;
      }
      svg .el-progress-circle__path {
        /* stroke: rgb(255, 243, 48, 0.29); */
        stroke: #FFF330;
      }
    }
  }
}
</style>
