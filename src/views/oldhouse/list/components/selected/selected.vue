<template>
  <div class="selected">
    <el-card shadow="never">
      <div slot="header">
        <span>精选房源</span>
        <el-button type="text">申请推荐位<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <div class="selected__item" v-for="item in data" :key="item.id">
        <el-image :src="item.src"></el-image>
        <div class="selected__item__info">
          <div class="local">{{ item.local }}</div>
          <div class="size">
            <span>{{ item.houseType }}</span>
            <span>{{ item.area }}平米</span>
          </div>
          <div class="price">{{ item.price }}万</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script src="./selected"></script>

<style lang="scss" scoped src="./selected.scss"></style>
