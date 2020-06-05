<template>
  <div class="same-community">
    <el-card shadow="never">
      <div slot="header">
        <router-link :to="{}">同小区房源</router-link>
      </div>
      <house-resources :data="data"></house-resources>
    </el-card>
  </div>
</template>

<script src="./samecommunity"></script>

<style lang="scss" scoped src="./samecommunity.scss"></style>
