<template>
  <div class="calculator">
    <el-row :gutter="20">
      <el-col :span="4">
        <navbar></navbar>
      </el-col>
      <el-col :span="14">
        <router-view />
      </el-col>
      <el-col :span="6">
        <hot-project></hot-project>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./calculator"></script>

<style lang="scss" scoped src="./calculator.scss"></style>
