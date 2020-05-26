<template>
  <div class="other">
    <el-card>
      <div slot="header" class="clearfix">
        <el-link :underline="false">商家其他楼盘</el-link>
        <el-button type="text">查看所有商家楼盘<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <div class="body" v-for="(item, index) in store" :key="index">
        <el-image :src="item.img"></el-image>
        <el-link :underline="false">[{{ item.local }}]{{ item.name }}</el-link>
        <p class="price">{{ item.price }}元/平米</p>
        <el-tag size="mini" v-for="(tag, tagIndex) in item.tags" :key="tagIndex">{{ tag.label }}</el-tag>
      </div>
    </el-card>
  </div>
</template>

<script src="./other"></script>

<style lang="scss" scoped src="./other.scss"></style>
