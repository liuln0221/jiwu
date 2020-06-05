<template>
  <div class="cell-info">
    <el-card shadow="never" header="小区信息">
      <el-row :gutter="10">
        <el-col :span="12" v-for="item in store" :key="item.label">
          <span class="label">{{ item.label }}</span>
          <span>{{ item.value ? item.value : '暂无资料' }}</span>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./cellinfo"></script>

<style lang="scss" scoped src="./cellinfo.scss"></style>
