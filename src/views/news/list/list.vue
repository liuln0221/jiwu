<template>
  <div class="list">
    <div class="current-local">
      <span>您的位置：</span>
      <router-link :to="{ name: 'home' }">吉屋</router-link>
      <router-link :to="{ name: 'newsList' }">{{ location.name }}资讯</router-link>
    </div>
    <el-row :gutter="60">
      <el-col :span="17">
        <el-carousel height="360px" indicator-position="none">
          <el-carousel-item v-for="(item, index) in data" :key="index">
            <router-link :to="item.redirectPath" target="_blank">
              <el-image :src="item.imgUrl" :alt="item.title"></el-image>
              <div class="desc">{{ item.title }}</div>
            </router-link>
          </el-carousel-item>
        </el-carousel>
        <!-- tab -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane name="newsLocal" label="本地">
            <router-view v-if="activeName === 'newsLocal'" />
          </el-tab-pane>
          <el-tab-pane name="newsDynamic" label="动态">
            <router-view v-if="activeName === 'newsDynamic'" />
          </el-tab-pane>
          <el-tab-pane name="newsInformate" label="资讯">
            <router-view v-if="activeName === 'newsInformate'" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="7">
        <right-lib></right-lib>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./list"></script>

<style lang="scss" scoped src="./list.scss"></style>
