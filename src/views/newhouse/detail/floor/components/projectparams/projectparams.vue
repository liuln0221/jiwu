<template>
  <div class="project-params">
    <el-card shadow="never">
      <div slot="header">
        <span>项目参数</span>
        <el-button type="text" class="el-icon-plus">公积金查询<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <custom-table :infos="infos" :store="store"></custom-table>
    </el-card>
  </div>
</template>

<script src="./projectparams"></script>

<style lang="scss" scoped src="./projectparams.scss"></style>
