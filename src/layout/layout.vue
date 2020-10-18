<template>
  <div class="layout">
    <el-aside width="auto">
      <e-aside></e-aside>
    </el-aside>
    <el-container class="layout__container">
      <el-header>
        <e-header></e-header>
      </el-header>
      <el-main v-if="location.name">
        <router-view v-if="isRouterAlive" />
      </el-main>
      <el-footer class="layout__footer">
        <e-footer></e-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script src="./layout"></script>

<style lang="scss" scoped src="./layout.scss"></style>