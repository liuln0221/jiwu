<template>
  <div class="about">
    <el-container>
      <el-header>
        <e-header></e-header>
      </el-header>
      <carousel></carousel>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <e-footer></e-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script src="./about"></script>

<style lang="scss" scoped src="./about.scss"></style>
