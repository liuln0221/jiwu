<template>
  <div class="distribution">
    <el-card shadow="never">
      <div slot="header">
        <span>价格分布</span>
        <div>
          <el-radio v-model="type" :label="1">新房</el-radio>
        </div>
      </div>
      <bar-chart :option="option"></bar-chart>
    </el-card>
  </div>
</template>

<script src="./distribution"></script>

<style lang="scss" scoped src="./distribution.scss"></style>
