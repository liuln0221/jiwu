<template>
  <div class="detail">
    <div class="current-local">
      <span>您的位置：</span>
      <router-link :to="{ name: 'newsList' }">楼市资讯</router-link>
      <router-link :to="{}">{{ data.title }}</router-link>
    </div>
    <el-row :gutter="20">
      <el-col :span="18">
        <!-- 找房 -->
        <find-room></find-room>
        <!-- 内容 -->
        <my-article :data="data"></my-article>
        <!-- 置业管家 -->
        <adviser></adviser>
      </el-col>
      <el-col :span="6">
        <!-- 热销新盘 -->
        <hot-project></hot-project>
        <!-- 热门二手房 -->
        <!-- <sell-well-old></sell-well-old> -->
        <!-- 二手小区推荐 -->
        <!-- <recommend-old></recommend-old> -->
        <!-- 7×24小时热文榜 -->
        <hot-list></hot-list>
        <!-- 热门问答 -->
        <hot-q-a></hot-q-a>
      </el-col>
    </el-row>
    <!-- 免责声明 -->
    <disclaimer></disclaimer>
  </div>
</template>

<script src="./detail"></script>

<style lang="scss" scoped src="./detail.scss"></style>
