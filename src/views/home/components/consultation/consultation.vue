<template>
  <div class="consultation">
    <el-card shadow="never">
      <div slot="header">
        <span>房产资讯</span>
        <el-button type="text">更多<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <el-row :gutter="20">
        <el-col :span="16" class="consultation__headline">
          <el-carousel height="400px">
            <el-carousel-item v-for="headline in headlines" :key="headline.name">
              <el-image :src="headline.src"></el-image>
              <div class="consultation__headline__name">{{ headline.title }}</div>
              <div class="consultation__headline__detail" :title="headline.detail">{{ headline.detail }}</div>
              <el-button>头条</el-button>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="8" class="consultation__info">
          <el-link
            :underline="false"
            v-for="consultation in consultations"
            :key="consultation.id"
            @mouseover.native="mouseover(consultation)"
          >
            <div v-if="consultation.active">
              <el-image :src="consultation.src"></el-image>
              <el-button>楼市</el-button>
            </div>
            <div class="consultation__info__text" v-else>{{ consultation.title }}</div>
          </el-link>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./consultation"></script>

<style lang="scss" scoped src="./consultation.scss"></style>
