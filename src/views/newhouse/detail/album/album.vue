<template>
  <div class="album">
    <!-- 筛选 -->
    <div class="newHouse-detail__filter">
      <div>
        <span class="label">筛选：</span>
        <el-radio-group v-model="filter">
          <el-radio
            v-for="(item, index) in filters"
            :key="index"
            :label="item"
          >{{ item.name }}({{ item.size }})</el-radio>
        </el-radio-group>
      </div>
      <!-- <el-button icon="el-icon-upload">上传图片</el-button> -->
    </div>
    <!-- 全部 -->
    <div v-if="filter.name === '全部'">
      <el-card shadow="never" v-for="item in store" :key="item.groupId">
        <div slot="header">
          <el-link :underline="false">{{ item.name }}</el-link>
          <!-- <el-button type="text">更多{{ item.name }}<i class="el-icon-arrow-right"></i></el-button> -->
        </div>
        <el-image v-for="img in item.imgList" :key="img.imgId" :src="img.imgUrl"></el-image>
      </el-card>
    </div>
    <!-- 分组 -->
    <div v-else class="group">
      <el-image v-for="img in filter.imgList" :key="img.imgId" :src="img.imgUrl"></el-image>
    </div>
    <!-- 描述 -->
    <p class="album__desc">{{ location.name }}{{ data.name }}相册图集，收集了全部{{ data.name }}{{ filters.map(item => item.name).slice(1).join('、') }}。同时也包含丰富的{{ data.name }}样板房图片、装修效果图、家装设计图、精装样板间图片。让业主们通过这些{{ data.name }}相关图片集，能更好，更快捷的了解{{ location.name }}{{ data.name }}的详细信息。</p>
    <!-- 免责声明 -->
    <disclaimer></disclaimer>
    <!-- 扩展 -->
    <!-- <expand :data="data"></expand> -->
  </div>
</template>

<script src="./album"></script>

<style lang="scss" scoped src="./album.scss"></style>
