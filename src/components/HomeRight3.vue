<template>
  <div class="home-side ">
    <div class="home-title pt-10px pl-30px w-1876px h-228px">
      <img src="@/assets/images/home-right-box3-title.png">
    </div>
    <div class="home-content flex-1" />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.home-side {
  height: 100%;
  background: rgba(14, 44, 94, 0.4);
  display: flex;
  flex-direction: column;
  .home-title {
    img {
      height: 100%;
      width: 100%;
    }
  }
  .home-content {
    background-image: url(@/assets/images/home-right-box3-main.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top;
    margin: 74px 250px 0 250px;
  }
}
</style>
