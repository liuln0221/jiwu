<template>
  <div class="adviser">
    <div class="title">找置业顾问，房贷测算更省事</div>
    <div
      class="item"
      v-for="item in advisers"
      :key="item.id"
    >
      <el-image :src="item.headImgUrl"></el-image>
      <div>
        <div>已为{{ item.num }}人</div>
        <div>提供过购房服务</div>
        <el-button>找TA测算房贷</el-button>
      </div>
    </div>
  </div>
</template>

<script src="./adviser"></script>

<style lang="scss" scoped src="./adviser.scss"></style>
