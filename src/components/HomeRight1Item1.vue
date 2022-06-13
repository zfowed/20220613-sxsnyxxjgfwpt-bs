<template>
  <HomeRight1Item1>
    <div class="home-title pt-10px pl-30px">
      <img src="@/assets/images/home-right-box-title.png">
    </div>
    <div class="box1">
      <div class="title">
        <span class="text-gradient">为“扩大非化石能源消费比重”举措提供数据支撑</span>
      </div>
      <div class="sub-title">
        <span>非化石能源占一次能源消费比重</span>
      </div>
      <div class="echarts-content h-145px">
        <div
          v-for="(item, index) in progressList"
          :key="index"
          class="progress-item"
        >
          <ElProgress
            class="progress-default"
            style="width: 100%"
            type="circle"
            :color="item.isCurrent ? '#fff330' : '#24FCFF'"
            :width="53"
            :percentage="item.progressNum"
            :show-text="false"
          />
          <div class="progress-label">
            <div class="font-bold">
              {{ item.nums }}
            </div>
            <div>{{ item.year }}</div>
          </div>
        </div>
      </div>
    </div>
  </HomeRight1Item1>
</template>
<script setup lang="ts">
const progressList = reactive([
  {
    year: '2020年',
    nums: '6.54%',
    progressNum: 31.6,
    isCurrent: false,
  },
  {
    year: '2021年',
    nums: '7.76%',
    progressNum: 32.8,
    isCurrent: true,
  },
  {
    year: '2022年',
    nums: '0.0%',
    progressNum: 31.6,
    isCurrent: false,
  },
  {
    year: '2023年',
    nums: '- -',
    progressNum: 31.6,
    isCurrent: false,
  },
  {
    year: '2024年',
    nums: '- -',
    progressNum: 31.6,
    isCurrent: false,
  },
  {
    year: '2025年',
    nums: '- -',
    progressNum: 31.6,
    isCurrent: false,
  },
])
</script>
<style lang="scss" scoped>

.home-side {
  height: 100%;
  background: rgba(14, 44, 94, 0.4);
}
.text-gradient {
  color: #FFCE2B;
  @supports (-webkit-background-clip: text) {
    color: transparent;
    background: linear-gradient(to bottom, #FFFEB2, #FFCE2B);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}</style>
