<template>
  <div class="house-type">
    <!-- 筛选 -->
    <div class="newHouse-detail__filter">
      <div>
        <span class="label">户型：</span>
        <el-radio-group v-model="filter">
          <el-radio
            v-for="(item, index) in store"
            :key="index"
            :label="item"
          >{{ item.houseType }}({{ item.num }})</el-radio>
        </el-radio-group>
      </div>
      <!-- <el-button icon="el-icon-upload">上传图片</el-button> -->
    </div>
    <!-- 户型 -->
    <el-row :gutter="20">
      <el-col :span="8" v-for="(item, index) in filter.store" :key="index">
        <image-info :data="item"></image-info>
      </el-col>
    </el-row>
    <!-- 热门户型 -->
    <!-- <el-card :header="`${location.name}热门户型`" shadow="never">
      <el-row :gutter="20">
        <el-col :span="8" v-for="(item, index) in filter.store" :key="index">
          <image-info :data="item"></image-info>
        </el-col>
      </el-row>
    </el-card> -->
    <!-- 免责声明 -->
    <disclaimer></disclaimer>
    <!-- 扩展 -->
    <!-- <expand :data="data"></expand> -->
  </div>
</template>

<script src="./housetype"></script>

<style lang="scss" scoped src="./housetype.scss"></style>
