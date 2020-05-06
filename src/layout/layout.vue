<template>
  <div class="layout">
    <el-aside width="auto">
      <e-aside></e-aside>
    </el-aside>
    <el-container>
      <el-header>
        <e-header></e-header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <e-footer></e-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script src="./layout"></script>

<style lang="scss" scoped src="./layout.scss"></style>