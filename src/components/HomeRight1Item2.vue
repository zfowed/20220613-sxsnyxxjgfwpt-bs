<template>
  <div>
    <div class="box1">
      <div class="title mt-15px pl-50px">
        <span class="text-gradient">为“扩大非化石能源发电量占比”举措提供数据支撑</span>
      </div>
      <div class="sub-title mt-15px pl-50px">
        <span>非化石能源发电量比重 </span>
      </div>
      <div style="padding: 25px 55px">
        <div class="flex">
          <div class="item1 w-1/2 flex">
            <div class="item1-aside year-btn flex justify-center">
              <span>2020</span>
            </div>
            <div class="item1-section flex">
              <div class="w-1/2 text-center">
                <div class="tips-color">
                  89.87%
                </div><div>火力</div>
              </div>
              <div class="w-1/2 text-center">
                <div class="tips-color">
                  6.37%
                </div><div>风力</div>
              </div>
              <div class="w-1/2 text-center">
                <div class="tips-color">
                  2.65%
                </div><div>太阳能</div>
              </div>
              <div class="w-1/2 text-center">
                <div class="tips-color">
                  1.31%
                </div><div>水利</div>
              </div>
            </div>
          </div>
          <div class="item1 w-1/2 flex">
            <div class="item1-aside year-btn flex justify-center">
              <span>2021</span>
            </div>
            <div class="item1-section flex">
              <div class="w-1/2 text-center">
                <div class="tips-color">
                  88.17%
                </div><div>火力</div>
              </div>
              <div class="w-1/2 text-center">
                <div class="tips-color">
                  11.83%
                </div><div>风力</div>
              </div>
              <div class="w-1/2 text-center">
                <div class="tips-color">
                  7.17%
                </div><div>太阳能</div>
              </div>
              <div class="w-1/2 text-center">
                <div class="tips-color">
                  1.51%
                </div><div>水利</div>
              </div>
            </div>
          </div>
        </div>
        <div class="item2 flex mt-20px mb-20px">
          <div class="year-btn fotter-btn">
            2022
          </div>
          <div class="year-btn fotter-btn">
            2023
          </div>
          <div class="year-btn fotter-btn">
            2024
          </div>
          <div class="year-btn fotter-btn">
            2025
          </div>
        </div>
      </div>
      <div class="box2 h-350px ml-40px mr-60px">
        <VueEcharts :option="echartsOption" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const echartsOption = reactive({
  legend: {
    top: 0,
    right: 0,
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: '#ffffff',
      fontSize: 20,
    },
    data: ['化石能源', '非化石能源'],
  },
  color: ['#0495ED', '#30D196'],
  grid: {
    top: 40,
    right: 20,
    left: 80,
    bottom: 30,
  },
  yAxis: [{
    type: 'value',
    alignTicks: true,
    name: '单位：%',
    nameTextStyle: {
      padding: [0, 0, 5, 0],
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 20,
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
  series: [
    {
      name: '化石能源',
      type: 'bar',
      stack: 'bar',
      data: [null, null, null, null, null, null] as any[],
      barWidth: 70,
    },
    {
      name: '非化石能源',
      type: 'bar',
      stack: 'bar',
      data: [null, null, null, null, null, null] as any[],
      barWidth: 70,
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
    echartsOption.series[0].data = [89.67, 88.17, 15, 20]
    echartsOption.series[1].data = [10.33, 11.83, 85, 80]
    echartsOption.series[2].data = [{ value: 160, name: '8%' }, { value: 180, name: '16.21%' }]
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
.item1-aside {
  width: 120px;
  height: 200px;
  align-items: center
}
.item1-section {
  height: 200px;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: center;
}
.tips-color {
  color: #5AFFE4;
}
.fotter-btn {
  height: 60px;
  line-height: 60px;
  text-align: center;
  width: 25%;
}
.year-btn {
  background: linear-gradient(180deg, rgba(0, 204, 255, 0.5), rgba(4, 23, 50, 0));
  border: 1px solid;
  border-image: linear-gradient(180deg, rgba(136, 239, 253, 0.65), rgba(16, 247, 255, 0.65)) 1 1;
  opacity: 0.5;
  border-radius: 2px;
}
</style>
