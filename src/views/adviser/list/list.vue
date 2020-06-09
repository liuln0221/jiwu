<template>
  <div class="list">
    <e-title></e-title>
    <el-row :gutter="30">
      <el-col :span="18">
        <list></list>
      </el-col>
      <el-col :span="6">
        <comment></comment>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./list"></script>

<style lang="scss" scoped src="./list.scss"></style>
