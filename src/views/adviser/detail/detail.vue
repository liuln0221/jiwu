<template>
  <div class="detail">
    <div class="current-local">
      <span>您的位置：</span>
      <router-link :to="{ name: 'home' }">严选好房</router-link>
      <router-link :to="{ name: 'adviser' }">置业顾问</router-link>
      <router-link :to="{ name: '' }">顾问详情</router-link>
    </div>
    <el-row :gutter="30">
      <el-col :span="18">
        <!-- 基本信息 -->
        <base-info :data="data"></base-info>
        <!-- 服务动态 -->
        <!-- <service-dynamics></service-dynamics> -->
        <!-- 熟悉的楼盘 -->
        <familiar-project></familiar-project>
      </el-col>
      <el-col :span="6">
        <explain></explain>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./detail"></script>

<style lang="scss" scoped src="./detail.scss"></style>
