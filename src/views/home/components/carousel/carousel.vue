<template>
  <div class="carousel">
    <el-carousel height="360px">
      <el-carousel-item v-for="item in images" :key="item.id">
        <router-link :to="{ name: 'newHouseDetail', params: {id: item.id} }" target="_blank">
          <el-image :src="item.src"></el-image>
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script src="./carousel"></script>

<style lang="scss" scoped src="./carousel.scss"></style>
