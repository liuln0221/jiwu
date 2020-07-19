<template>
  <div class="information">
    <el-card shadow="never">
      <div slot="header">
        <span>房产资讯</span>
        <router-link target="_blank" :to="{ name: 'informationInformate' }">
          <el-button type="text">更多<i class="el-icon-arrow-right"></i></el-button>
        </router-link>
      </div>
      <el-row :gutter="20">
        <el-col :span="12" class="information__headline">
          <el-carousel height="500px">
            <el-carousel-item v-for="headline in headlines" :key="headline.name">
              <router-link target="_blank" :to="{ name: 'informationDetail', params: { id: headline.id } }">
                <el-image :src="headline.coverImgUrl"></el-image>
              </router-link>
              <div class="information__headline__name">{{ headline.title }}</div>
              <div class="information__headline__detail" :title="headline.description">{{ headline.description }}</div>
              <el-button>头条</el-button>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="12">
          <div class="information__info" v-for="information in informations" :key="information.id">
            <router-link target="_blank" :to="{ name: 'informationDetail', params: { id: information.id } }">
              <el-image :src="information.coverImgUrl"></el-image>
            </router-link>
            <div class="info">
              <div class="title"><router-link :to="{}">{{ information.title }}</router-link></div>
              <div class="desc line-clamp">{{ information.description }}</div>
              <div class="issueTime">发布时间：{{ information.issueTime }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./information"></script>

<style lang="scss" scoped src="./information.scss"></style>
