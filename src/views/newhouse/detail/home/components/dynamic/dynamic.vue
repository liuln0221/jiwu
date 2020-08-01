<template>
  <div class="dynamic">
    <el-row :gutter="20" class="home__dynamic">
      <el-col :span="18">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span class="header">
              <router-link :to="{ name: 'newHouseDetailDynamic' }">最新动态</router-link>
              <el-button size="mini" class="icon-notice">新动态通知我</el-button>
            </span>
            <router-link :to="{ name: 'newHouseDetailDynamic' }">
              <el-button type="text">{{ data.name }}动态<i class="el-icon-arrow-right"></i></el-button>
            </router-link>
          </div>
          <div
            class="newHouse-detail__dynamic"
            v-for="item in news"
            :key="item.id"
          >
            <div class="title">
              <router-link :to="{}">{{ item.title }}</router-link>
              <div>{{ item.issueTime | dateStrToFormat('YYYY-MM-DD') }}</div>
            </div>
            <div class="info">
              <el-link :underline="false"><span v-html="item.content"></span><el-button type="text">阅读全文<i class="el-icon-arrow-right"></i></el-button></el-link>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" class="home__news">
        <el-tabs v-model="activeName">
          <el-tab-pane label="咨迅" name="news">
            <div v-for="(local, index) in localNews" :key="index">
              <router-link :to="{ name: 'newsDetail', param: { id: local.id } }"><i class="el-icon-caret-right"></i>{{ local.title }}</router-link>
            </div>
          </el-tab-pane>
          <el-tab-pane label="问答" name="qa">
            <div v-for="(qa, index) in qas" :key="index">
              <router-link :to="{ name: 'qaDetail', param: { id: qa.id } }"><i class="el-icon-caret-right"></i>{{ qa.title }}</router-link>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./dynamic"></script>

<style lang="scss" scoped src="./dynamic.scss"></style>