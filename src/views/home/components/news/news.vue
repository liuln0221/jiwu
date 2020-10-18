<template>
  <div class="news" v-if="headlines.length > 0 || news.length > 0">
    <el-card shadow="never">
      <div slot="header">
        <span>房产资讯</span>
        <router-link target="_blank" :to="{ name: 'newsInformate' }">
          <el-button type="text">更多<i class="el-icon-arrow-right"></i></el-button>
        </router-link>
      </div>
      <el-row :gutter="20">
        <el-col :span="12" class="news__headline" v-if="headlines.length > 0">
          <el-carousel height="500px">
            <el-carousel-item v-for="headline in headlines" :key="headline.name">
              <router-link target="_blank" :to="{ name: 'newsDetail', params: { id: headline.id } }">
                <el-image :src="headline.coverImgUrl"></el-image>
              </router-link>
              <div class="news__headline__name">{{ headline.title }}</div>
              <div class="news__headline__detail" :title="headline.description">{{ headline.description }}</div>
              <el-button>头条</el-button>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="12">
          <div class="news__info" v-for="news in news" :key="news.id">
            <router-link target="_blank" :to="{ name: 'newsDetail', params: { id: news.id } }">
              <el-image :src="news.coverImgUrl"></el-image>
            </router-link>
            <div class="info">
              <div class="title"><router-link :to="{}">{{ news.title }}</router-link></div>
              <div class="desc line-clamp">{{ news.description }}</div>
              <div class="issueTime">发布时间：{{ news.issueTime }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./news"></script>

<style lang="scss" scoped src="./news.scss"></style>
