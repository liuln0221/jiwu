<template>
  <div class="price">
    <el-card shadow="never">
      <div slot="header">
        <el-link :underline="false">{{ data.name }}房价</el-link>
      </div>
      <div class="legend">
        <el-link :underline="false" v-for="(option, index) in optionData" :key="index">
          <i class="icon-line" :style="`color: ${option.color}`"></i>{{ option.name }}
        </el-link>
      </div>
      <div class="chart">
        <line-chart :option="option"></line-chart>
      </div>
    </el-card>
  </div>
</template>

<script src="./price"></script>

<style lang="scss" scoped src="./price.scss"></style>
