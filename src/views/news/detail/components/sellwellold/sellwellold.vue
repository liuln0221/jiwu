<template>
  <div class="sell-well-old">
    <el-card shadow="never">
      <div slot="header">
        <span>热门二手房</span>
        <el-button type="text">
          <router-link target="_blank" :to="{ name: 'oldHouse' }">更多<i class="el-icon-arrow-right"></i></router-link>
        </el-button>
      </div>
      <div class="sell-well-old__item" v-for="item in data" :key="item.id">
        <router-link class="info__name" :to={}>
          <el-image :src="item.src"></el-image>
        </router-link>
        <div class="info">
          <router-link class="info__name" :to={}>{{ item.label }}</router-link>
          <div>
            <span class="info__door">{{ item.door }}</span>
            <span>{{ item.area }}平米</span>
          </div>
          <div class="info__price">{{ item.price }}万</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script src="./sellwellold"></script>

<style lang="scss" scoped src="./sellwellold.scss"></style>
