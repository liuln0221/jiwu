<template>
  <div class="surround-city">
    <el-card shadow="never" header="周边城市购房指南">
      <el-row :gutter="20">
        <el-col :span="4" v-for="item in data" :key="item.domain">
          <router-link :to="{ name: 'guide' }">{{ item.name }}购房指南</router-link>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./surroundcity"></script>

<style lang="scss" scoped src="./surroundcity.scss"></style>
