<template>
  <div class="left-item-box h-1022px w-1/1">
    <div class="title w-904px h-136px mb-24px" />
    <div class="box-list">
      <div class="box-1 box-item mr-100px">
        <div class="subtitle text-gradient">
          能源信息基础库
        </div>
        <div class="content flex">
          <div class="img-item w-230px h-194px mr-64px" :style="{ backgroundImage: `url(${boxItemImg(1)})` }" />
          <div class="img-item w-230px h-194px mr-64px" :style="{ backgroundImage: `url(${boxItemImg(2)})` }" />
          <div class="img-item w-230px h-194px" :style="{ backgroundImage: `url(${boxItemImg(3)})` }" />
        </div>
      </div>
      <div class="box-2 box-item">
        <div class="subtitle text-gradient" style="visibility: hidden;">
          能源信息基础库
        </div>
        <div class="content">
          <div class="img-item w-1412px h-270px mr-64px" :style="{ backgroundImage: `url(${boxItemImg(4)})` }" />
        </div>
      </div>
    </div>
    <div class="box-list">
      <div class="box-3 box-item mr-100px ">
        <div class="subtitle text-gradient">
          大国家平台数据整合接入
        </div>
        <div class="content relative">
          <div class="img-item w-830px h-190px mb-10px" :style="{ backgroundImage: `url(${boxItemImg(5)})` }">
            <div class="desc absolute flex w-160px top-99px left-81px text-cyan-gradient">
              <div class="value">
                <TweenNumber :value="1500" />
              </div>
              <div class="label">
                TB
              </div>
            </div>
            <div class="text absolute w-208px h-88px top-50px left-357px text-40px text-center">
              中国煤炭 大数据平台
            </div>
            <div class="desc absolute flex w-160px top-65px left-630px text-cyan-gradient">
              <div class="value">
                <TweenNumber :value="1000" />
              </div>
              <div class="label">
                TB
              </div>
            </div>
          </div>
          <div class="img-item flex items-center justify-evenly w-820px h-190px mb-10px ml-10px" :style="{ backgroundImage: `url(${boxItemImg(6)})` }">
            <div class="text-cell">
              <div class="desc flex w-160px text-cyan-gradient">
                <div class="value">
                  <TweenNumber :value="200" />
                </div>
                <div class="label">
                  TB
                </div>
              </div>
              <div class="desc-txt w-260px h-70px">
                全国道路货运车辆 公共监管与服务平台
              </div>
            </div>
            <div class="text-cell">
              <div class="desc flex w-160px text-cyan-gradient">
                <div class="value">
                  <TweenNumber :value="300" />
                </div>
                <div class="label">
                  TB
                </div>
              </div>
              <div class="desc-txt w-260px h-70px">
                矿山领域煤矿安全 生产综合信息系统
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-4 box-item">
        <div class="subtitle text-gradient">
          省级平台数据共享
        </div>
        <div class="content">
          <div class="img-item flex mt-5px mb-10px w-1412px h-228px" :style="{ backgroundImage: `url(${boxItemImg(7)})` }">
            <div class="left w-305px h-1/1">
              <div class="desc mx-auto my-0 pt-123px flex w-160px text-cyan-gradient">
                <div class="value">
                  <TweenNumber :value="1600" />
                </div>
                <div class="label">
                  TB
                </div>
              </div>
            </div>
            <div class="right flex-1 flex items-center justify-evenly">
              <div class="text-cell">
                <div class="desc flex w-160px text-cyan-gradient">
                  <div class="value">
                    <TweenNumber :value="180" />
                  </div>
                  <div class="label">
                    TB
                  </div>
                </div>
                <div class="desc-txt w-180px h-70px">
                  矿用设备监察 管理系统
                </div>
              </div>
              <div class="text-cell">
                <div class="desc flex w-160px text-cyan-gradient">
                  <div class="value">
                    <TweenNumber :value="130" />
                  </div>
                  <div class="label">
                    TB
                  </div>
                </div>
                <div class="desc-txt w-180px h-70px">
                  山西省环评审 批上报系统
                </div>
              </div>
              <div class="text-cell">
                <div class="desc flex w-160px text-cyan-gradient">
                  <div class="value">
                    <TweenNumber :value="220" />
                  </div>
                  <div class="label">
                    TB
                  </div>
                </div>
                <div class="desc-txt w-180px h-70px">
                  煤矿事故风险 分析平台
                </div>
              </div>
              <div class="text-cell">
                <div class="desc flex w-160px text-cyan-gradient">
                  <div class="value">
                    <TweenNumber :value="270" />
                  </div>
                  <div class="label">
                    TB
                  </div>
                </div>
                <div class="desc-txt w-180px h-70px">
                  煤矿安全双重 预防平台
                </div>
              </div>
            </div>
          </div>
          <div class="img-item flex">
            <div class="left-img flex items-center justify-evenly w-694px h-210px mr-24px ml-8px" :style="{ backgroundImage: `url(${boxItemImg(8)}) ` }">
              <div class="text-cell">
                <div class="desc flex w-160px text-cyan-gradient">
                  <div class="value">
                    <TweenNumber :value="170" />
                  </div>
                  <div class="label">
                    TB
                  </div>
                </div>
                <div class="desc-txt w-200px h-70px">
                  山西省矿业权 管理信息系统
                </div>
              </div>
              <div class="text-cell">
                <div class="desc flex w-160px text-cyan-gradient">
                  <div class="value">
                    <TweenNumber :value="200" />
                  </div>
                  <div class="label">
                    TB
                  </div>
                </div>
                <div class="desc-txt w-200px h-70px">
                  山西温室气体 在线观测系统
                </div>
              </div>
            </div>
            <div class="right-img flex items-center justify-evenly h-210px flex-1" :style="{ backgroundImage: `url(${boxItemImg(8)}) ` }">
              <div class="text-cell">
                <div class="desc flex w-160px text-cyan-gradient">
                  <div class="value">
                    <TweenNumber :value="280" />
                  </div>
                  <div class="label">
                    TB
                  </div>
                </div>
                <div class="desc-txt w-260px h-70px">
                  山西省污染源自动 监控信息管理平台
                </div>
              </div>
              <div class="text-cell ">
                <div class="desc flex w-160px text-cyan-gradient">
                  <div class="value">
                    <TweenNumber :value="150" />
                  </div>
                  <div class="label">
                    TB
                  </div>
                </div>
                <div class="desc-txt w-147px h-70px">
                  山西税收 大数据平台
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const boxItemImg = (index: string) =>
  new URL(`../assets/images/home-left-box1-item-${index}.png`, import.meta.url).href
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
.text-cyan-gradient {
  color: #2BFFE9;

  @supports (-webkit-background-clip: text) {
    font-weight: normal;
    color: transparent;
    background: linear-gradient(to bottom, #9EF5FF, #2BFFE9);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.left-item-box {
  .title {
    background-image: url(@/assets/images/home-left-box1-title.png);
    background-size: 100%;
  }
  .box-list {
    display: flex;
    padding: 0 84px 0 60px;
    .box-item {
      display: flex;
      flex-direction: column;
      .subtitle {
        height: 46px;
        line-height: 43px;
        font-size: 48px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        margin-bottom: 20px;
      }
      .content {
        .img-item {
          background-size: 100%;
          background-repeat: no-repeat;
          .left-img,
          .right-img {
            background-size: 100%;
          }
          .text-cell {
            display: flex;
            flex-direction: column;
            align-items: center;
            .desc-txt {
              text-align: center;
              color: rgba(255, 255, 255, 0.66);
              line-height: 35px;
            }
          }
          .desc {
            font-size: 48px;
            display: flex;
            justify-content: center;
            .label {
              font-size: 36px;
              margin-top: 13px;
            }
          }
          .text {
            color: rgba(255, 255, 255, 0.66);
          }
        }
      }
    }
  }
}
</style>
