<template>
  <div class="album">
    <el-card header="楼盘相册" shadow="never">
      <div slot="header">
        <div class="header">
          <router-link class="title" :to="{ name: 'newHouseDetailAlbum' }">楼盘相册</router-link>
          <router-link
            class="fliter"
            :to="{ name: 'newHouseDetailAlbum' }"
            v-for="filter in filters"
            :key="filter.groupId"
          >{{ filter.name }}({{ filter.size }})</router-link>
        </div>
        <router-link class="title" :to="{ name: 'newHouseDetailAlbum' }">
          <el-button type="text">{{ data.name }}相册<i class="el-icon-arrow-right"></i></el-button>
        </router-link>
      </div>
      <el-carousel height="160px" indicator-position="outside">
        <el-carousel-item v-for="(image, imageIndex) in images" :key="imageIndex">
          <router-link :to="{ name: 'newHouseDetailAlbum' }">
            <el-image :src="item.imgUrl" v-for="(item, index) in image" :key="index"></el-image>
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script src="./album"></script>

<style lang="scss" scoped src="./album.scss"></style>
