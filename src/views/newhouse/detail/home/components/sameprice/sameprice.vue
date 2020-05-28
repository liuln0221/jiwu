<template>
  <div class="sameprice">
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <el-link :underline="false">同价位新盘</el-link>
        <el-button type="text">{{ location }}同价位新盘<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <div class="body" v-for="(item, index) in store" :key="index">
        <el-image :src="item.img"></el-image>
        <el-link :underline="false">[{{ item.local }}]{{ item.name }}</el-link>
        <p class="price">{{ item.price }}元/平米</p>
      </div>
    </el-card>
  </div>
</template>

<script src="./sameprice"></script>

<style lang="scss" scoped src="./sameprice.scss"></style>
