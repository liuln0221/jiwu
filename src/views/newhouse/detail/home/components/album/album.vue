<template>
  <div class="album">
    <el-card header="楼盘相册" shadow="never">
      <div slot="header">
        <div class="header">
          <el-link :underline="false" class="title">楼盘相册</el-link>
          <el-link :underline="false" class="fliter" v-for="(filter, index) in filters" :key="index">{{ filter.label }}({{ filter.num }})</el-link>
        </div>
        <el-button type="text">{{ data.name }}相册<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <el-carousel height="160px" indicator-position="outside">
        <el-carousel-item v-for="(image, imageIndex) in images" :key="imageIndex">
          <el-image :src="item" v-for="(item, index) in image" :key="index"></el-image>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script src="./album"></script>

<style lang="scss" scoped src="./album.scss"></style>
