<template>
  <div class="home-side">
    <div class="home-title h-136px mb-24px" />
    <div class="flex">
      <div class="w-1/2">
        <HomeRight1Item1 />
      </div>
      <div class="w-1/2">
        <HomeRight1Item2 />
      </div>
    </div>
    <div class="flex mt-40px">
      <div class="w-1/2">
        <HomeRight1Item3 />
      </div>
      <div class="w-1/2">
        <HomeRight1Item4 />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.home-side {
  height: 100%;
  background: rgba(14, 44, 94, 0.4);
}
.home-title {
    background-image: url(@/assets/images/home-right1-title.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 2005px;
}
</style>
