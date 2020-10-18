<template>
  <div class="newhouse" v-if="data.length > 0 || houses.length > 0">
    <el-card shadow="never">
      <div slot="header">
        <div class="newhouse__header">
          <span>新房</span>
          <!-- 区域 -->
          <div class="newhouse__tab">
            <el-link
              :underline="false"
              v-for="(item, index) in data"
              :key="index"
              :class="item.active ? 'active' : ''"
              @mouseover.native="mouseover(item)"
            >{{ item.name }}<i></i></el-link>
          </div>
        </div>
        <router-link :to="{ name: 'newHouse' }">
          <el-button type="text">更多楼盘<i class="el-icon-arrow-right"></i></el-button>
        </router-link>
      </div>
      <!-- body -->
      <el-carousel :height="carouselHeight" @change="getCarouselHeight">
        <el-carousel-item v-for="house in houses" :key="house.id">
          <div ref="newhouse__content">
            <el-row :gutter="20">
              <el-col :span="12" class="img__first" v-if="house[0]">
                <router-link target="_blank" :to="{ name: 'newHouseDetail', params: { id: house[0].id } }">
                  <el-image :src="house[0].showImgPath"></el-image>
                </router-link>
                <div class="img__first__name">{{ house[0].name }}</div>
                <div class="img__first__detail">
                  <div class="img__first__detail__text">{{ house[0].site }}</div>
                  <div class="img__first__detail__price">{{ house[0].price }}元/平米</div>
                </div>
              </el-col>
              <el-col :span="12" class="img__more">
                <el-col :span="12" v-for="item in house.slice(1, 5)" :key="item.id">
                  <router-link target="_blank" :to="{ name: 'newHouseDetail', params: { id: item.id } }">
                    <el-image :src="item.showImgPath"></el-image>
                  </router-link>
                  <div class="img__more__detail">
                    <div class="img__more__detail__name">{{ item.name }}</div>
                    <div class="img__more__detail__price">{{ item.price }}元/平米</div>
                  </div>
                </el-col>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="img__more">
              <el-col :span="6" v-for="item in house.slice(5)" :key="item.name">
                <router-link target="_blank" :to="{ name: 'newHouseDetail', params: { id: item.id } }">
                  <el-image :src="item.src"></el-image>
                </router-link>
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
