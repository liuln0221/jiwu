<template>
  <div class="local">
    <div v-for="item in data" :key="item.id">
      <tab-content :data="item"></tab-content>
    </div>
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page.sync="page.current"
      :page-size="page.size"
      layout="prev, pager, next"
      :total="page.total">
    </el-pagination>
  </div>
</template>

<script src="./local"></script>

<style lang="scss" scoped src="./local.scss"></style>
