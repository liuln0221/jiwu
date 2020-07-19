<template>
  <div class="tool">
    <el-row :gutter="20">
      <el-col :span="4">
        <navbar></navbar>
      </el-col>
      <el-col :span="14">
        <!-- <e-content></e-content> -->
        <router-view />
      </el-col>
      <el-col :span="6">
        <hot-project></hot-project>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./tool"></script>

<style lang="scss" scoped src="./tool.scss"></style>
