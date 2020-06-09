<template>
  <div class="title">
    <el-container>
      <el-header>买房，您需要一位置业管家</el-header>
      <el-main>
        <div v-for="(item, index) in data" :key="index">
          <i :class="item.icon"></i>
          <div class="title__name">{{ item.name }}</div>
          <div class="title__desc">{{ item.description }}</div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script src="./title"></script>

<style lang="scss" scoped src="./title.scss"></style>
