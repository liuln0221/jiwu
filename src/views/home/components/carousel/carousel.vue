<template>
  <div class="carousel">
    <el-carousel height="360px">
      <el-carousel-item v-for="item in images" :key="item.name">
        <img :src="item.src" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script src="./carousel"></script>

<style lang="scss" scoped src="./carousel.scss"></style>
