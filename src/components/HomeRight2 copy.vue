<template>
  <div class="home-side">
    <div class="home-title pt-10px pl-30px">
      <img src="@/assets/images/home-right-box-title.png">
    </div>
    <div class="h-1/2 flex">
      <div class="w-1/2">
        <HomeRight2Item1 />
      </div>
      <div class="w-1/2">
        <HomeRight2Item2 />
      </div>
    </div>
    <div class="h-1/2 flex">
      <div class="w-1/2">
        <HomeRight2Item1 />
      </div>
      <div class="w-1/2">
        <HomeRight2Item2 />
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
</style>
