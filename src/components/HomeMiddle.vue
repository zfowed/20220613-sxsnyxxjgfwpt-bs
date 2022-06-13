<template>
  <div class="home-main">
    <div class="home-main-top">
      <div class="text-list">
        <div class="text-item text-item-box1 w-354px h-64px">
          煤炭产、运、储、销数据； 安全生产数据；车辆运输数据
        </div>
        <div class="text-item text-item-box2 w-136px h-64px">
          能源信息 数据及服务
        </div>
        <div class="text-item text-item-box3 w-300px h-64px">
          汇聚存储本市企业数据, 基础计算及统计分析数据
        </div>
        <div class="text-item text-item-box4 w-300px h-28px">
          生产、能耗、安全等数据
        </div>
      </div>
      <div class="map-info relative w-666px h-367px">
        <div v-for="(item, index) in barList" :key="index" :style="{ 'z-index': 100 - index, ...item.style }" :alt="item.id+1" class="map-item absolute flex flex-col items-center">
          <div class="text text-gradient">
            <TweenNumber :value="item.num" /> TB
          </div>
          <div class="map-char">
            <div class="top" />
            <div class="content" :style="{ height: `${item.num / 25}px` }" />
            <div class="bottom" />
          </div>
        </div>
      </div>
      <div class="desc-info flex flex-col">
        <div class="desc-info-list">
          <div v-for="(item, index) in box4List" :key="index" :style="{ backgroundImage: `url(${item.icon})`}" class="desc-info-item w-101px">
            <div class="value">
              <TweenNumber :value="item.value" />PB
            </div>
            <div class="label">
              {{ item.label }}
            </div>
          </div>
        </div>
        <div class="desc-info-explain pt-28px flex flex-row justify-around">
          <div class="explain-item text-gradient">
            数据采集方式
          </div>
          <div class="explain-item text-gradient">
            能源类型
          </div>
          <div class="explain-item text-gradient">
            采集设备
          </div>
        </div>
      </div>
    </div>
    <div class="home-main-bottom">
      1
    </div>
  </div>
</template>

<script setup lang="ts">
const getDescBox = (index: string) =>
  new URL(`../assets/images/middle-desc-info--${index}.png`, import.meta.url).href
const barList = reactive([
  {
    num: 0,
    id: 0,
    style: {
      bottom: '102px',
      left: '32px',
    },
  },
  {
    num: 0,
    id: 1,
    style: {
      bottom: '63px',
      left: '168px',
    },
  },
  {
    num: 0,
    id: 2,
    style: {
      bottom: '179px',
      left: '132px',
    },
  },
  {
    num: 0,
    id: 3,
    style: {
      bottom: '157px',
      left: '266px',
    },
  },
  {
    num: 0,
    id: 4,
    style: {
      bottom: '249px',
      left: '255px',
    },
  },
  {
    num: 0,
    id: 5,
    style: {
      bottom: '266px',
      left: '338px',
    },
  },
  {
    num: 0,
    id: 6,
    style: {
      bottom: '140px',
      left: '392px',
    },
  },
  {
    num: 0,
    id: 7,
    style: {
      bottom: '227px',
      left: '410px',
    },
  },
  {
    num: 0,
    id: 8,
    style: {
      bottom: '324px',
      left: '397px',
    },
  },
  {
    num: 0,
    id: 9,
    style: {
      bottom: '310px',
      right: '135px',
    },
  },
  {
    num: 0,
    id: 10,
    style: {
      bottom: '320px',
      right: '48px',
    },
  },
])
const box4List = reactive([
  {
    label: '上传数据',
    value: 10,
    icon: getDescBox('1'),
  },
  {
    label: '系统接入',
    value: 20,
    icon: getDescBox('2'),
  },
  {
    label: '传感器',
    value: 70,
    icon: getDescBox('3'),
  },
  {
    label: '煤',
    value: 60,
    icon: getDescBox('4'),
  },
  {
    label: '电',
    value: 20,
    icon: getDescBox('5'),
  },
  {
    label: '油',
    value: 10,
    icon: getDescBox('6'),
  },
  {
    label: '气',
    value: 5,
    icon: getDescBox('7'),
  },
  {
    label: '热',
    value: 3,
    icon: getDescBox('8'),
  },
  {
    label: '新能源',
    value: 0.5,
    icon: getDescBox('9'),
  },
  {
    label: '皮带秤数据',
    value: 5,
    icon: getDescBox('10'),
  },
  {
    label: '磅房数据',
    value: 3,
    icon: getDescBox('11'),
  },
])

onMounted(() => {
  setTimeout(() => {
    barList.splice(0, barList.length, ...[
      {
        num: 1700,
        id: 0,
        style: {
          bottom: '102px',
          left: '32px',
        },
      },
      {
        num: 1000,
        id: 1,
        style: {
          bottom: '63px',
          left: '168px',
        },
      },
      {
        num: 1700,
        id: 2,
        style: {
          bottom: '179px',
          left: '132px',
        },
      },
      {
        num: 1500,
        id: 3,
        style: {
          bottom: '157px',
          left: '266px',
        },
      },
      {
        num: 1700,
        id: 4,
        style: {
          bottom: '249px',
          left: '255px',
        },
      },
      {
        num: 1000,
        id: 5,
        style: {
          bottom: '266px',
          left: '338px',
        },
      },
      {
        num: 1000,
        id: 6,
        style: {
          bottom: '140px',
          left: '392px',
        },
      },
      {
        num: 1000,
        id: 7,
        style: {
          bottom: '227px',
          left: '410px',
        },
      },
      {
        num: 1600,
        id: 8,
        style: {
          bottom: '324px',
          left: '397px',
        },
      },
      {
        num: 1800,
        id: 9,
        style: {
          bottom: '310px',
          right: '135px',
        },
      },
      {
        num: 1600,
        id: 10,
        style: {
          bottom: '320px',
          right: '48px',
        },
      },
    ])
  }, 1000)
})
</script>

<style lang="scss" scoped>
.text-gradient {
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
.home-main {
  display: flex;
  flex-direction: column;
  width: 2048px;
  height: 2480px;
  &-top {
    flex: 1;
    position: relative;
    top: 0;
    left: 0;
    .text-list {
      .text-item {
        font-size: 27px;
        font-family: PingFang SC;
        font-weight: 400;
        font-style: italic;
        color: white;
        line-height: 37px;
        position: absolute;
      }
      .text-item-box1 {
        top: 126px;
        left: 1202px;
      }
      .text-item-box2 {
        top: 835px;
        left: 1305px;
      }
      .text-item-box3 {
        top: 1373px;
        left: 1379px;
      }
      .text-item-box4 {
        top: 1700px;
        left: 1503px;
      }
    }
    .map-info {
      position: absolute;
      top: 1032px;
      left: 496px;
      background-image: url(@/assets/images/middle-map.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .map-item {
        .text {
          font-weight: 600;
          font-size: 14px;
          font-style: italic;
          width: 65px;
          text-align: center;
        }
        .map-char {
          .top,
          .bottom {
            width: 22px;
            height: 12px;
            background: #38FDFF;
            border-radius: 50%;
          }
          .content {
            background: linear-gradient(180deg, #3FFFEF, #38C4FF);
            width: 22px;
            height: 0;
            margin-top: -5px;
            transition: height 0.3s;
          }
          .bottom {
            margin-top: -5px;
          }
        }
      }
    }
    .desc-info {
      position: absolute;
      top: 1537px;
      left: 278px;
      width: 1115px;
      /* height: 172px; */
      .desc-info-list {
        display: flex;
        justify-content: space-between;
        .desc-info-item {
          font-size: 20px;
          text-align: center;
          background-repeat: no-repeat;
          background-position: center center;
          position: relative;
          top: 0;
          left: 0;
          font-weight: 500;
          .value {
            padding-top: 36px;
          }
          .label {
            padding-top: 80px;
          }
        }
      }
      .desc-info-explain {
        font-size: 20px;
      }
    }
  }
  &-bottom {
    height: 682px;
    border-radius: 20px;
    background: rgba(14, 44, 94, 0.4);
    position: relative;
    top: 0;
    left: 0;
  }
}
</style>
