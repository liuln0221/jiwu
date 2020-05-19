<template>
  <div class="sellwell">
    <el-card shadow="never">
      <div slot="header">
        <span>热销新盘</span>
        <el-button type="text">更多推荐<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <el-row :gutter="20">
        <el-col :span="12" class="img__first">
          <img :src="data[0].src" />
          <div class="img__first__name">{{ data[0].title }}</div>
          <div class="img__first__detail">
            <div class="img__first__detail__text" :title="data[0].detail">{{ data[0].detail }}</div>
            <div class="img__first__detail__price">{{ data[0].price }}元/平米</div>
          </div>
        </el-col>
        <el-col :span="12" class="img__more">
          <el-col :span="12" v-for="item in data.slice(1)" :key="item.name">
            <img :src="item.src" />
            <div class="img__more__name">{{ item.title }}</div>
            <div class="img__more__detail">
              <!-- <div class="img__more__detail__name">{{ item.title }}</div> -->
              <div class="img__more__detail__text" :title="item.detail">{{ item.detail }}</div>
              <div class="img__more__detail__price">{{ item.price }}元/平米</div>
            </div>
          </el-col>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./sellwell"></script>

<style lang="scss" scoped src="./sellwell.scss"></style>
