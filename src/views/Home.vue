<template>
  <Layout>
    <template slot="left">
      <HomeLeft></HomeLeft>
    </template>
    <template slot="middle">
      <HomeMiddle></HomeMiddle>
    </template>
    <template slot="right">
      <HomeRight1></HomeRight1>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import APP_CONFIG from '@/config'
</script>

<style lang="scss" scoped>
</style>
