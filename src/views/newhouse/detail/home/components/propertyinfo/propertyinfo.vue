<template>
  <div class="property-info">
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <el-link :underline="false">楼盘信息</el-link>
        <el-button type="text">{{ data.name }}楼盘信息 <i class="el-icon-arrow-right"></i></el-button>
      </div>
      <custom-table :infos="infos" :store="store"></custom-table>
    </el-card>
  </div>
</template>

<script src="./propertyinfo"></script>

<style lang="scss" scoped src="./propertyinfo.scss"></style>
