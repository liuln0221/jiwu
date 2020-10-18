<template>
  <div class="album-detail">
    <el-container>
      <el-header>
        <e-header></e-header>
      </el-header>
      <el-main v-if="location.name">
        <div class="album-detail__img">
          <div class="current-local">
            <span>您的位置：</span>
            <router-link :to="{ name: local.name }" v-for="local in locals" :key="local.id">{{ local.label }}</router-link>
          </div>
          <el-radio-group v-model="filter" style="margin-bottom: 30px;">
            <el-radio-button
              v-for="(item, index) in filters"
              :key="index"
              :label="item"
            >{{ item.name }}（{{ item.size }}）</el-radio-button>
          </el-radio-group>
          <el-carousel
            ref="carousel"
            :height="`${height}px`"
            :autoplay="false"
            indicator-position="none"
            class="album-detail__img"
            @change="getImgAvtive"
          >
            <el-carousel-item v-for="(item, index) in filter.imgList" :key="index">
              <el-image :src="item.imgUrl"></el-image>
            </el-carousel-item>
          </el-carousel>
          <div class="disclaimer">
            <span>免责声明：</span>
            <span>严选好房网所有户型图片及户型面积等相关资料均由开发商、经纪人、用户自行提供或上传分享，严选好房网旨在为广大用户免费传递更多信息， 本站所有内容仅供参考，请自行核对实际情况，严选好房网将不对任何内容负法律责任，如对内容有任何疑议，请及时发邮件联系我们（yanxuanhaofang.com）,我们将尽快处理。</span>
          </div>
          <div class="album-detail__type">
            <div
              v-for="(i, iIndex) in filter.imgList"
              :key="iIndex"
              @click="clickImg(iIndex, filter.imgList)"
            >
            <el-image
              :src="i.imgUrl"
              :class="i.active ? 'active' : ''"
              ></el-image>
            </div>
          </div>
        </div>
        <div class="album-detail__info">
          <div class="house">
            <div class="name"><router-link :to="{ name: 'newHouseDetail', params: { id: data.id } }">{{ data.name }}</router-link></div>
            <div class="price">
              <span>{{ data.price }}元/平米</span>
              <el-button type="text" @click="priceNotify(1)">[降价通知我]</el-button>
            </div>
            <div class="tel"><i class="icon-tel"></i>{{ data.sellPhone }}</div>
          </div>
          <el-card shadow="none" :header="filter.name" class="album">
            <div class="site">
              <span class="label">地址</span>
              <span v-if="data.site">{{ data.site }}</span>
              <span v-else>暂无</span>
            </div>
            <div class="openDate">
              <span class="label">开盘时间</span>
              <span v-if="data.openDate">{{ data.openDate }}</span>
              <span v-else>暂无</span>
              <el-button type="text" @click="priceNotify(2)">[开盘通知我]</el-button>
            </div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script src="./detail"></script>

<style lang="scss" scoped src="./detail.scss"></style>
