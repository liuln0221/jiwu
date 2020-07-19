<template>
  <div class="list">
    <div class="list__local">
      <span>您的位置：</span>
      <el-link :underline="false" v-for="local in locals" :key="local.id">{{ local.label }}</el-link>
    </div>
    <el-row :gutter="60">
      <el-col :span="17">
        <el-carousel height="360px" indicator-position="none">
          <el-carousel-item v-for="image in images" :key="image.id">
            <router-link :to="{ name: 'informationDetail', params: {id: image.id} }" target="_blank">
              <el-image :src="image.img" :alt="image.description"></el-image>
              <div class="desc">{{ image.description }}</div>
            </router-link>
          </el-carousel-item>
        </el-carousel>
        <!-- tab -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane
            v-for="tab in tabs"
            :key="tab.name"
            :name="tab.name"
            :label="tab.label"
          >
            <router-view />
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
