<template>
  <div class="price">
    <el-card shadow="never">
      <div slot="header">
        <router-link :to="{ name: 'newHouseDetailPriceTrend' }">{{ data.name }}房价</router-link>
      </div>
      <div class="legend">
        <router-link :to="{ name: 'newHouseDetailPriceTrend' }" v-for="(option, index) in optionData" :key="index">
          <i class="icon-line" :style="`color: ${option.color}`"></i>{{ option.name }}
        </router-link>
      </div>
      <div class="chart">
        <line-chart :option="option"></line-chart>
      </div>
    </el-card>
  </div>
</template>

<script src="./price"></script>

<style lang="scss" scoped src="./price.scss"></style>
