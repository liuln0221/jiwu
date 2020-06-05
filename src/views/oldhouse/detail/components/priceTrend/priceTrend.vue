<template>
  <div class="price-trend">
    <el-card shadow="never">
      <div slot="header">
        <div slot="header">
          <router-link :to="{}">房价走势</router-link>
        </div>
        <el-button type="text">{{ data.local }}<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <div class="legend">
        <div>
          <el-link :underline="false" v-for="(option, index) in optionData" :key="index">
            <i class="el-icon-plus" :style="`color: ${option.color}`"></i>{{ option.name }}
          </el-link>
        </div>
      </div>
      <div class="chart">
        <line-chart :option="option"></line-chart>
      </div>
    </el-card>
  </div>
</template>

<script src="./priceTrend"></script>

<style lang="scss" scoped src="./priceTrend.scss"></style>
