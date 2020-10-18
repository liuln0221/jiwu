<template>
  <div class="rightlib">
    <el-link :underline="false" class="rightlib__advertisement">
      <el-image src="http://images.yanxuanhaofang.com/images/v4.0/newsright4.jpg"></el-image>
    </el-link>
    <!-- 大咖专栏 -->
    <!-- <el-card class="rightlib__bigGuyColumn" shadow="never">
      <div slot="header">
        <span>大咖专栏</span>
        <el-button icon="el-icon-refresh" @click="refresh()">换一换</el-button>
      </div>
      <el-link :underline="false" v-for="item in bigGuys" :key="item.id">
        <el-image :src="item.img"></el-image>
        <div class="rightlib__bigGuyColumn__content">
          <div class="name">{{ item.name }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </el-link>
    </el-card> -->
    <!-- 热文榜 -->
    <el-card header="7×24小时热文榜"  shadow="never">
      <el-link :underline="false" class="rightlib__hot" v-for="item in data" :key="item.id">
        <el-image :src="item.coverImgUrl"></el-image>
        <div class="content line-clamp">{{ item.title }}</div>
      </el-link>
    </el-card>
  </div>
</template>

<script src="./rightlib"></script>

<style lang="scss" scoped src="./rightlib.scss"></style>
