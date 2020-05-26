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
            :label="item.name"
          >{{ item.label }}({{ item.num }})</el-radio>
        </el-radio-group>
      </div>
      <el-button icon="el-icon-upload">上传图片</el-button>
    </div>
    <!-- 效果图 -->
    <el-card>
      <div slot="header">
        <el-link :underline="false">效果图</el-link>
        <el-button type="text">更多效果图<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <el-image v-for="(item, index) in store" :key="index" :src="item"></el-image>
    </el-card>
    <!-- 实景图 -->
    <el-card>
      <div slot="header">
        <el-link :underline="false">实景图</el-link>
        <el-button type="text">更多实景图<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <el-image v-for="(item, index) in store" :key="index" :src="item"></el-image>
    </el-card>
    <!-- 配套图 -->
    <el-card>
      <div slot="header">
        <el-link :underline="false">配套图</el-link>
        <el-button type="text">更多配套图<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <el-image v-for="(item, index) in store" :key="index" :src="item"></el-image>
    </el-card>
    <!-- 楼盘证照 -->
    <el-card>
      <div slot="header">
        <el-link :underline="false">楼盘证照</el-link>
        <el-button type="text">更多楼盘证照<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <el-image v-for="(item, index) in store" :key="index" :src="item"></el-image>
    </el-card>
    <!-- 位置交通图 -->
    <el-card>
      <div slot="header">
        <el-link :underline="false">位置交通图</el-link>
        <el-button type="text">更多位置交通图<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <el-image v-for="(item, index) in store" :key="index" :src="item"></el-image>
    </el-card>
    <!-- 描述 -->
    <p class="album__desc">北京梵悦108相册图集，收集了全部梵悦108效果图、实景图、配套图、规划图、沙盘图、售楼处、位置交通图。同时也包含丰富的梵悦108样板房图片、装修效果图、家装设计图、精装样板间图片。让业主们通过这些梵悦108相关图片集，能更好，更快捷的了解北京梵悦108的详细信息。</p>
    <!-- 免责声明 -->
    <disclaimer></disclaimer>
    <!-- 扩展 -->
    <expand :data="data"></expand>
  </div>
</template>

<script src="./album"></script>

<style lang="scss" scoped src="./album.scss"></style>
