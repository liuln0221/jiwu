<template>
  <div class="carousel">
    <el-carousel height="250px" arrow="never" indicator-position="none">
      <el-carousel-item v-for="(item, index) in data" :key="index">
        <!-- <router-link :to="{ name: 'newHouseDetail', params: {id: item.refId} }" target="_blank"> -->
          <el-image :src="item.imgUrl"></el-image>
        <!-- </router-link> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script src="./carousel"></script>

<style lang="scss" scoped src="./carousel.scss"></style>
