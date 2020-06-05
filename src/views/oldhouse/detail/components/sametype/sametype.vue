<template>
  <div class="same-type">
    <el-card shadow="never">
      <div slot="header">
        <router-link :to="{}">同类型房源</router-link>
        <div>
          <el-button icon="el-icon-arrow-left" @click="$refs.carousel.prev()"></el-button>
          <el-button icon="el-icon-arrow-right" @click="$refs.carousel.next()"></el-button>
        </div>
      </div>
      <el-carousel ref="carousel" height="220px" :autoplay="false" indicator-position="none" arrow="never">
        <el-carousel-item v-for="(item, index) in data" :key="index">
          <house-resources :data="item"></house-resources>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script src="./sametype"></script>

<style lang="scss" scoped src="./sametype.scss"></style>
