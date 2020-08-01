<template>
  <div class="trend">
    <el-card shadow="never">
      <div slot="header">
        <span>{{ location.name }}房价走势<span class="trend__consult">行情咨询：{{ tel }}</span></span>
        <div>
          <el-radio v-model="time" :label="12" @change="getHistoryRegion">近一年</el-radio>
          <el-radio v-model="time" :label="36" @change="getHistoryRegion">近三年</el-radio>
        </div>
      </div>
      <line-chart :option="option"></line-chart>
    </el-card>
  </div>
</template>

<script src="./trend"></script>

<style lang="scss" scoped src="./trend.scss"></style>
