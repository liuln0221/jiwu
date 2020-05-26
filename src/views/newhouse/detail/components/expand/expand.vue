<template>
  <div class="expand">
    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane name="nearbyProperty" label="附近楼盘">
        <el-button type="text" v-for="(item, index) in option.nearbyProperty" :key="index">{{ item.label }}</el-button>
      </el-tab-pane>
      <el-tab-pane name="randomRecommendation" label="随机推荐">
        <el-button type="text" v-for="(item, index) in option.randomRecommendation" :key="index">{{ item.label }}</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script src="./expand"></script>

<style lang="scss" scoped src="./expand.scss"></style>
