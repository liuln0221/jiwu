<template>
  <div class="about">
    <el-container v-if="$route.name !== 'privacy'">
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
    <router-view v-else />
  </div>
</template>

<script src="./about"></script>

<style lang="scss" scoped src="./about.scss"></style>
