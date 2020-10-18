<template>
  <div class="house-type-detail">
    <el-container>
      <el-header>
        <e-header></e-header>
      </el-header>
      <el-main v-if="location.name">
        <div class="house-type-detail__img">
          <div class="current-local">
            <span>您的位置：</span>
            <router-link :to="{ name: local.name }" v-for="local in locals" :key="local.id">{{ local.label }}</router-link>
          </div>
          <el-radio-group v-model="tabActive" style="margin-bottom: 30px;">
            <el-radio-button
              v-for="(item, index) in store"
              :key="index"
              :label="item"
            >{{ item.houseType }}</el-radio-button>
          </el-radio-group>
          <el-carousel
            ref="carousel"
            :height="`${height}px`"
            :autoplay="false"
            indicator-position="none"
            class="house-type-detail__img"
            @change="getHouseTypeAvtive"
          >
            <el-carousel-item v-for="(item, index) in tabActive.store" :key="index">
              <el-image :src="item.layoutImgUrl"></el-image>
            </el-carousel-item>
          </el-carousel>
          <div class="disclaimer">
            <span>免责声明：</span>
            <span>严选好房网所有户型图片及户型面积等相关资料均由开发商、经纪人、用户自行提供或上传分享，严选好房网旨在为广大用户免费传递更多信息， 本站所有内容仅供参考，请自行核对实际情况，严选好房网将不对任何内容负法律责任，如对内容有任何疑议，请及时发邮件联系我们（yanxuanhaofang.com）,我们将尽快处理。</span>
          </div>
          <div class="house-type-detail__type">
            <div
              v-for="(i, iIndex) in tabActive.store"
              :key="iIndex"
              @click="clickImg(iIndex, tabActive.store)"
            >
            <el-image
              :src="i.layoutImgUrl"
              :class="i.active ? 'active' : ''"
              ></el-image>
            </div>
          </div>
        </div>
        <div class="house-type-detail__info">
          <div class="house">
            <div class="name"><router-link :to="{ name: 'newHouseDetail', params: { id: data.id } }">{{ data.name }}</router-link></div>
            <div class="price">
              <span>{{ data.price }}元/平米</span>
              <el-button type="text" @click="priceNotify">[降价通知我]</el-button>
            </div>
            <div class="tel"><i class="icon-tel"></i>{{ data.sellPhone }}</div>
          </div>
          <el-card shadow="none" :header="houseTypeActive.layoutName" class="house-type">
            <div class="type">{{ houseTypeActive.type }}</div>
            <div class="grossArea">
              <span class="label">建筑面积</span>
              <span v-if="houseTypeActive.grossArea">约{{ houseTypeActive.grossArea }}平米</span>
              <span v-else>暂无</span>
            </div>
            <div class="innerArea">
              <span class="label">套内面积</span>
              <span v-if="houseTypeActive.innerArea">约{{ houseTypeActive.innerArea }}平米</span>
              <span v-else>暂无</span>
            </div>
            <div class="sharedArea">
              <span class="label">公摊面积</span>
              <span v-if="houseTypeActive.sharedArea">约{{ houseTypeActive.sharedArea }}平米</span>
              <span v-else>暂无</span>
            </div>
            <div class="downPayment">
              <span class="label">参考首付</span>
              <span v-if="houseTypeActive.downPayment">{{ houseTypeActive.downPayment }}万</span>
              <span v-else>暂无</span>
            </div>
            <div class="monthlyPayment">
              <span class="label">参考月供</span>
              <span v-if="houseTypeActive.monthlyPayment">约{{ houseTypeActive.monthlyPayment }}元</span>
              <span v-else>暂无</span>
            </div>
            <div class="allPayment">
              <span class="label">参考总价</span>
              <span v-if="houseTypeActive.allPayment">{{ houseTypeActive.allPayment }}万元</span>
              <span v-else>暂无</span>
            </div>
            <div class="disclaimer">
              <span class="label">免责声明</span>首付月供金额为估算所得，仅供参考，用户使用前请谨慎核实。
            </div>
          </el-card>
          <el-card shadow="none" header="户型特点" class="characteristic">
            <div class="name">{{ houseTypeActive.characteristic }}</div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script src="./detail"></script>

<style lang="scss" scoped src="./detail.scss"></style>
