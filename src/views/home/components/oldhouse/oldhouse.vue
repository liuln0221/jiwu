<template>
  <div class="oldhouse" v-if="data.length > 0">
    <el-card shadow="never">
      <div slot="header">
        <span>精选二手房</span>
        <router-link target='_blank' :to="{ name: 'oldHouse' }">
          <el-button type="text">更多<i class="el-icon-arrow-right"></i></el-button>
        </router-link>
      </div>
      <el-carousel height="260px" indicator-position="outside">
        <el-carousel-item v-for="house in houses" :key="house.name">
          <el-row :gutter="20">
            <el-col :span="6" v-for="item in house" :key="item.name">
              <router-link target="_blank" :to="{ name: 'oldHouseDetail', params: { id: item.id } }">
                <el-image :src="item.src"></el-image>
              </router-link>
              <div class="oldhouse__detail">{{ item.label }}-{{item.door}}-{{item.area}}㎡</div>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script src="./oldhouse"></script>

<style lang="scss" scoped src="./oldhouse.scss"></style>
