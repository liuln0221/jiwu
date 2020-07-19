<template>
  <div class="base-info">
    <el-row :gutter="20">
      <el-col :span="10">
        <el-image :src="data.showImgPath"></el-image>
        <!-- <div class="base-info__image"> -->
          <!-- <el-button icon="el-icon-arrow-left" @click="leftClick"></el-button> -->
          <!-- <ul ref="ul">
            <li
              v-for="(image, index) in data.images"
              :key="index"
              :style="index === 0 ? 'display: none;' : ''"
            >
              <el-image :src="image"></el-image>
            </li>
          </ul> -->
          <!-- <el-carousel ref="carousel" height="75px" arrow="never" :autoplay="false" indicator-position="none">
            <el-carousel-item
              v-for="(image, index) in data.images"
              :key="index"
              :class="index === activeIndex ? 'active' : ''"
              style="transform: translateX(0px) scale(1) !important;"
            >
              <el-image :src="image"></el-image>
              <div class="base-info__image__desc">实景图</div>
            </el-carousel-item>
          </el-carousel> -->
          <!-- <el-button icon="el-icon-arrow-right" @click="rightClick"></el-button> -->
        <!-- </div> -->
      </el-col>
      <el-col :span="10">
        <div class="base-info__price">
          <span>参考价格：</span>
          <span class="price">{{ data.price }}元/平米</span>
          <el-button size="mini" class="icon-line-chart">降价通知我</el-button>
        </div>
        <!-- <div class="base-info__price-desc">
          <span>价格说明：</span>
          <span v-if="data.priceValidity">价格有效期：{{ data.priceValidity.startTime | dateStrToFormat('YYYY.MM.DD') }}-{{ data.priceValidity.endTime | dateStrToFormat('YYYY.MM.DD') }}</span>
          <span v-else>---</span>
        </div> -->
        <div class="base-info__service">
          <div><i class="icon-car2"></i>无需预约，滴滴一键看房</div>
          <el-button>专车看房</el-button>
        </div>
        <div class="base-info__service">
          <div><i class="icon-tag"></i>24小时线上咨询 立享优惠</div>
          <el-button>获取优惠</el-button>
        </div>
        <!-- <div class="base-info__sales">在售楼栋：{{ data.sales }}</div> -->
        <!-- <div class="base-info__onePrice">一房一价：<el-link :underline="false">详情请至住建委网站查询</el-link></div> -->
        <div class="base-info__primary">
          <span>开盘：{{ data.openDate | dateStrToFormat('YYYY-MM-DD') }}</span>
          <el-button type="text">[开盘通知我]</el-button>
        </div>
        <div class="base-info__primary">
          <span>地址：{{ data.site }}</span>
          <el-button type="text">[开盘通知我]</el-button>
        </div>
        <div class="base-info__primary">
          <span>户型：</span>
          <router-link
            type="text"
            v-for="(type, index) in houseType"
            :key="index"
            :to="{ name: 'newHouseDetailHouseType' }"
          >{{ type.label }}({{ type.count }})</router-link>
          <el-button type="text">[余房查询]</el-button>
          <el-button type="text">[成交价查询]</el-button>
        </div>
        <div class="base-info__more">
          <router-link :to="{ name: 'newHouseDetailFloor' }">查看更多信息<i class="el-icon-arrow-right"></i></router-link>
        </div>
        <div class="base-info__tel">
          <div>号码加密拨打，放心了解详情</div>
          <div class="tel">{{ data.sellPhone }}</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="base-info__adviser" v-if="adviser">
          <router-link :to="{ name: 'adviserDetail', params: { id: adviser.id } }" class="image">
            <el-image :src="adviser.headImgUrl"></el-image>
          </router-link>
          <router-link :to="{ name: 'adviserDetail', params: { id: adviser.id } }" class="name">{{ adviser.name }}</router-link>
          <el-button class="consult" icon="icon-message2">向TA咨询</el-button>
          <div>
            <el-tag
              v-for="(tag, index) in adviser.tags"
              :key="index"
              size="mini"
            >{{ tag.label }}</el-tag>
          </div>
          <p class="info">
            <span class="label"><span>响应速度</span></span>
            <span class="content resSpeed">{{ adviser.replySpeed ? adviser.replySpeed : '-' }}分钟+</span>
          </p>
          <p class="info">
            <span class="label"><span>服务人数</span></span>
            <span class="content">{{ adviser.serviceNum ? adviser.serviceNum : '-' }}人</span>
          </p>
          <p class="info">
            <span class="label"><span>回复率</span></span>
            <span class="content">{{ (adviser.replyRate * 100).toFixed(0) }}%</span>
          </p>
          <p class="info">
            <span class="label"><span>服务专长</span></span>
            <span class="content gray">{{ adviser.serviceAdept }}</span>
          </p>
          <p class="info">
            <span class="label"><span>熟悉区域</span></span>
            <span class="content gray">{{ adviser.familiarRegionsName ? adviser.familiarRegionsName.join(',') : '-' }}分钟+</span>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./baseinfo"></script>

<style lang="scss" scoped src="./baseinfo.scss"></style>
