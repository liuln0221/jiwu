<template>
  <div class="price">
    <div class="current-local">
      <span>您的位置：</span>
      <router-link :to="{ name: 'price' }" target="_blank">{{ location.name }}房价</router-link>
    </div>
    <div class="price__region">
      <span class="label">区域</span>
      <router-link
        v-for="item in data"
        :key="item.code"
        :to="{ name: 'price', query: item.code === 'all' ? undefined : { region: item.code } }"
        :class="item.active ? 'active' : ''"
      ><span @click="getCurrentRegion">{{ item.name }}</span></router-link>
    </div>
    <el-row :gutter="20">
      <el-col :span="18">
        <!-- 均价 -->
        <avg-price></avg-price>
        <!-- 房价走势 -->
        <trend></trend>
        <!-- 置业顾问 -->
        <adviser></adviser>
        <!-- 区域房价排行 -->
        <region-price-rank></region-price-rank>
        <!-- 价格分布 -->
        <!-- <distribution></distribution> -->
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>

<script src="./price"></script>

<style lang="scss" scoped src="./price.scss"></style>
