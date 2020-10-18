<template>
  <div class="property-info">
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <router-link :to="{ name: 'newHouseDetailFloor' }">楼盘信息</router-link>
        <router-link :to="{ name: 'newHouseDetailFloor' }">
          <el-button type="text">{{ data.name }}楼盘信息 <i class="el-icon-arrow-right"></i></el-button>
        </router-link>
      </div>
      <custom-table :info="info" :split="3" :store="store"></custom-table>
    </el-card>
  </div>
</template>

<script src="./propertyinfo"></script>

<style lang="scss" scoped src="./propertyinfo.scss"></style>
