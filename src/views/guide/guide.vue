<template>
  <div class="guide">
    <el-row :gutter="20">
      <el-col :span="3">
        <navbar :height="height"></navbar>
      </el-col>
      <el-col :span="15">
        <e-content ref="content"></e-content>
      </el-col>
      <el-col :span="6">
        <adviser></adviser>
        <hot-project></hot-project>
      </el-col>
    </el-row>
    <surround-city></surround-city>
  </div>
</template>

<script src="./guide"></script>

<style lang="scss" scoped src="./guide.scss"></style>
