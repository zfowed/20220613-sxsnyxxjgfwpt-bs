<template>
  <div>
    <div class="box1">
      <div class="title mt-15px pl-50px">
        <span class="text-gradient">为“扩大电能占终端能源消费比重”举措提供数据支撑</span>
      </div>
      <div class="sub-title mt-15px pl-50px">
        <span>电能占终端能源消费比重</span>
      </div>
      <div class="h-226px mt-15px">
        <VueEcharts :option="echartsOption" />
      </div>
    </div>
    <div class="box2 h-241px">
      <VueEcharts :option="echarts2Option" />
    </div>
  </div>
</template>
<script setup lang="ts">

const echartsOption = reactive({
  title: [
    {
      text: '',
      left: 'left',
      padding: [10, 50, 0, 20],
      textStyle: {
        fontSize: 12,
        fontWeight: 'normal',
        color: '#ffffff',
      },
    },
    {
      text: '',
      bottom: 5,
      left: '15%',
      textStyle: {
        fontSize: 12,
        fontWeight: 'normal',
        color: '#ffffff',
      },
    },
    {
      text: '',
      bottom: 5,
      left: '65%',
      textStyle: {
        fontSize: 12,
        fontWeight: 'normal',
        color: '#ffffff',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    padding: 20,
    textStyle: {
      fontSize: 26,
    },
  },
  series: [
    {
      type: 'pie',
      radius: '50%',
      center: ['20%', '50%'],
      data: [
        {
          value: 39.23,
          index: 1,
          itemStyle: {
            color: '#35BAFF',
          },
        },
        {
          value: 60.68,
          index: 2,
          labelLine: {
            normal: {
              show: false,
            },
          },
          itemStyle: {
            color: '#2A4E89',
          },
        },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
        labelLine: {
          show: false,
        },
      },
      labelLine: {
        normal: {
          // 统一设置指示线长度
          length: 10,
          length2: 20,
        },
      },
      label: {
        show: true,
        color: '#ffffff',
        formatter(params: any) {
          if (params.data.index === 1)
            return params.data.value
        },
      },
    }, {
      type: 'pie',
      radius: '50%',
      center: ['70%', '50%'],
      data: [
        {
          value: 39.23,
          index: 1,
          itemStyle: {
            color: '#35BAFF',
          },
        },
        {
          value: 60.68,
          index: 2,
          labelLine: {
            normal: {
              show: false,
            },
          },
          itemStyle: {
            color: '#2A4E89',
          },
        },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
        labelLine: {
          show: false,
        },
      },
      labelLine: {
        normal: {
          // 统一设置指示线长度
          length: 10,
          length2: 20,
        },
      },
      label: {
        show: true,
        color: '#ffffff',
        formatter(params: any) {
          if (params.data.index === 1)
            return params.data.value
        },
      },
    },
  ],
})
onMounted(() => {
  setTimeout(() => {
    echartsOption.title[0].text = '电能占终端能源消费比重'
    echartsOption.title[1].text = '2020'
    echartsOption.title[2].text = '2021'
    echartsOption.series[0].data = [
      {
        value: 39.23,
        index: 1,
        itemStyle: {
          color: '#F1D243',
        },
      },
      {
        value: 60.68,
        index: 2,
        labelLine: {
          normal: {
            show: false,
          },
        },
        itemStyle: {
          color: '#2A4E89',
        },
      },
    ]
  }, 0)
})

const echarts2Option = reactive({
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
    max: 100,
  },
  {
    type: 'value',
    alignTicks: true,
    show: false,
    splitNumber: 3,
    min: 0,
    max: 100,
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
    echarts2Option.xAxis.data = ['2020', '2021', '2022', '2023', '2024', '2025']
    echarts2Option.series[0].data = [39.32, 42.38]
    echarts2Option.series[1].data = [{ value: 39.32, name: '39.32%' }, { value: 48.38, name: '42.38%' }]
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
