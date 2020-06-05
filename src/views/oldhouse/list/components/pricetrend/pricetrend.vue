<template>
  <div class="price-trend">
    <el-card shadow="never">
      <div slot="header">
        <span>燕郊二手房房价走势</span>
        <el-button type="text">更多<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <line-chart :option="option"></line-chart>
    </el-card>
  </div>
</template>

<script src="./pricetrend"></script>

<style lang="scss" scoped src="./pricetrend.scss"></style>
