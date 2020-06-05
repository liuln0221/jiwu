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
        <el-col :span="16" class="information__headline">
          <el-carousel height="400px">
            <el-carousel-item v-for="headline in headlines" :key="headline.name">
              <router-link target="_blank" :to="{ name: 'informationDetail', params: { id: headline.id } }">
                <el-image :src="headline.src"></el-image>
              </router-link>
              <div class="information__headline__name">{{ headline.title }}</div>
              <div class="information__headline__detail" :title="headline.detail">{{ headline.detail }}</div>
              <el-button>头条</el-button>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="8" class="information__info">
          <el-link
            :underline="false"
            v-for="information in informations"
            :key="information.id"
            @mouseover.native="mouseover(information)"
          >
            <div v-if="information.active">
              <router-link target="_blank" :to="{ name: 'informationDetail', params: { id: information.id } }">
                <el-image :src="information.src"></el-image>
              </router-link>
              <el-button>楼市</el-button>
            </div>
            <div class="information__info__text" v-else>{{ information.title }}</div>
          </el-link>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./information"></script>

<style lang="scss" scoped src="./information.scss"></style>
