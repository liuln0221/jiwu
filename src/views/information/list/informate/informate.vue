<template>
  <div class="informate">
    <tab-content :data="headLine" :image="true"></tab-content>
    <el-card shadow="never">
      <div slot="header">
        <span>今日大咖说</span>
        <el-button icon="el-icon-refresh" @click="refresh">换一换</el-button>
      </div>
      <el-row :gutter="12">
        <el-col :span="6" v-for="say in says" :key="say.id">
          <el-link :underline="false">
            <el-image :src="say.img"></el-image>
            <div class="desc line-clamp">{{ say.description }}</div>
          </el-link>
        </el-col>
      </el-row>
    </el-card>
    <div v-for="item in data" :key="item.id">
      <tab-content :data="item"></tab-content>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="data.length">
    </el-pagination>
  </div>
</template>

<script src="./informate"></script>

<style lang="scss" scoped src="./informate.scss"></style>
