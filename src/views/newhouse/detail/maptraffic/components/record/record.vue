<template>
  <div class="record">
    <p>搜索到{{ option[data] ? option[data].length : 0 }}条记录</p>
    <div class="record__list" v-for="(item, index) in option[data]" :key="index">
      <div class="name"><i class="el-icon-plus"></i><span>{{ item.name }}</span></div>
      <div class="distance">{{ item.distance }}米</div>
    </div>
  </div>
</template>

<script src="./record"></script>

<style lang="scss" scoped src="./record.scss"></style>
