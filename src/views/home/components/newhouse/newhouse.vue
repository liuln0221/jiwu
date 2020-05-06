<template>
  <div class="newhouse">
    <el-card class="box-card" shadow="never">
      <div slot="header">
        <div class="newhouse__header">
        <span>新房</span>
        <!-- 区域 -->
        <div class="newhouse__tab">
          <el-link
            :underline="false"
            v-for="region in regions"
            :key="region.id"
            :class="region.active ? 'active' : ''"
            @mouseover.native="mouseover(region)"
          >{{ region.name }}<i></i></el-link>
        </div>
        </div>
        <el-button type="text">更多推荐<i class="el-icon-arrow-right"></i></el-button>
      </div>
      <!-- body -->
      <el-carousel :height="carouselHeight" @change="getCarouselHeight">
        <el-carousel-item v-for="house in houses" :key="house.name">
          <div ref="newhouse__content">
            <el-row :gutter="20">
              <el-col :span="12" class="img__first">
                <img :src="house[0].src" />
                <div class="img__first__name">{{ house[0].title }}</div>
                <div class="img__first__detail">
                  <div class="img__first__detail__text">{{ house[0].detail }}</div>
                  <div class="img__first__detail__price">{{ house[0].price }}元/平米</div>
                </div>
              </el-col>
              <el-col :span="12" class="img__more">
                <el-col :span="12" v-for="item in house.slice(1, 5)" :key="item.name">
                  <img :src="item.src" />
                  <div class="img__more__detail">
                    <div class="img__more__detail__name">{{ item.title }}</div>
                    <div class="img__more__detail__price">{{ item.price }}元/平米</div>
                  </div>
                </el-col>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="img__more">
              <el-col :span="6" v-for="item in house.slice(5)" :key="item.name">
                <img :src="item.src" />
                <div class="img__more__detail">
                  <div class="img__more__detail__name">{{ item.title }}</div>
                  <div class="img__more__detail__price">{{ item.price }}元/平米</div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script src="./newhouse"></script>

<style lang="scss" scoped src="./newhouse.scss"></style>
