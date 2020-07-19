<template>
  <div class="house-type">
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <span class="header">
          <el-link :underline="false">户型图</el-link>
          <span>以首付三成，供30年计算，详情请咨询置业顾问。</span>
        </span>
        <router-link :to="{ name: 'newHouseDetailHouseType' }">
          <el-button type="text">{{ data.name }}户型<i class="el-icon-arrow-right"></i></el-button>
        </router-link>
      </div>
      <el-carousel height="160px" indicator-position="outside">
        <el-carousel-item v-for="(types, index) in houseTypes" :key="index">
          <el-row :gutter="20" v-for="(type, typeIndex) in types" :key="typeIndex">
            <el-col :span="10">
              <el-image :src="type.layoutImgUrl"></el-image>
            </el-col>
            <el-col :span="14">
              <el-link :underline="false">{{ type.houseType }}</el-link>
              <p>建筑面积：约{{ type.grossArea }}平米</p>
              <p>参考首付：{{ type.downPayment }}万</p>
              <p>参考月供：约{{ type.monthlyPayment }}元</p>
              <p v-if="type.characteristic">户型描述：{{ type.characteristic }}</p>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script src="./housetype"></script>

<style lang="scss" scoped src="./housetype.scss"></style>