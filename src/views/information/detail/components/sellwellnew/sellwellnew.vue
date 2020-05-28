<template>
  <div class="sell-well-new">
    <el-card shadow="never">
      <div slot="header">
        <span>热销新盘</span>
        <el-button type="text">
          <router-link :to="{ name: 'newHouse' }">更多</router-link>
        </el-button>
      </div>
      <div class="sell-well-new__item" v-for="item in data" :key="item.id">
        <el-link :underline="false">
          <el-image :src="item.src"></el-image>
          <el-button type="text" class="name">[{{ item.address }}]{{ item.name }}</el-button>
        </el-link>
        <div class="adviser">
          <el-image :src="item.adviser.img"></el-image>
          <el-button icon="el-icon-plus">向TA咨询</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script src="./sellwellnew"></script>

<style lang="scss" scoped src="./sellwellnew.scss"></style>
