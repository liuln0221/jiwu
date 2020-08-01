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
            <router-link :to="{}" v-for="local in locals" :key="local.id">{{ local.label }}</router-link>
          </div>
          <el-radio-group v-model="tabActive" style="margin-bottom: 30px;">
            <el-radio-button
              v-for="(item, index) in store"
              :key="index"
              :label="item"
            >{{ item.houseType }}</el-radio-button>
          </el-radio-group>
          <el-carousel :height="`${height}px`" :autoplay="false" indicator-position="none" class="house-type-detail__img">
            <el-carousel-item v-for="(item, index) in tabActive.store" :key="index">
              <el-image :src="item.img"></el-image>
            </el-carousel-item>
          </el-carousel>
          <div class="disclaimer">
            <span>免责声明：</span>
            <span>吉屋网所有户型图片及户型面积等相关资料均由开发商、经纪人、用户自行提供或上传分享，吉屋网旨在为广大用户免费传递更多信息， 本站所有内容仅供参考，请自行核对实际情况，吉屋网将不对任何内容负法律责任，如对内容有任何疑议，请及时发邮件联系我们（loupan@jiwu.com）,我们将尽快处理。</span>
          </div>
          <el-carousel height="75px" :autoplay="false" indicator-position="none" arrow="always" class="house-type-detail__type" :initial-index="1">
            <el-carousel-item v-for="(item, index) in store" :key="index">
              {{item.store.length}}
              <el-image
                v-for="(i, iIndex) in item.store"
                :key="iIndex"
                :src="i.img"
                :class="i.active ? 'active' : ''"
                @click="clickImg(item.store[iIndex], item.store)"
              ></el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="house-type-detail__info">
          <div class="house">
            <div class="name"><router-link :to="{ name: 'newHouseDetail', params: { id: data.projectId } }">{{ data.projectName }}</router-link></div>
            <div class="price">
              <span>{{ data.price }}元/平米</span>
              <el-button type="text">[降价通知我]</el-button>
            </div>
            <div class="tel"><i class="icon-tel"></i>{{ data.sellPhone }}</div>
          </div>
          <el-card shadow="none" :header="data.layoutName" class="house-type">
            <div class="type">{{ data.type }}</div>
            <div class="grossArea">
              <span class="label">建筑面积</span>
              <span v-if="data.grossArea">约{{ data.grossArea }}平米</span>
              <span v-else>暂无</span>
            </div>
            <div class="innerArea">
              <span class="label">套内面积</span>
              <span v-if="data.innerArea">约{{ data.innerArea }}平米</span>
              <span v-else>暂无</span>
            </div>
            <div class="sharedArea">
              <span class="label">公摊面积</span>
              <span v-if="data.sharedArea">约{{ data.sharedArea }}平米</span>
              <span v-else>暂无</span>
            </div>
            <div class="downPayment">
              <span class="label">参考首付</span>
              <span v-if="data.downPayment">{{ data.downPayment }}万</span>
              <span v-else>暂无</span>
            </div>
            <div class="monthlyPayment">
              <span class="label">参考月供</span>
              <span v-if="data.monthlyPayment">约{{ data.monthlyPayment }}元</span>
              <span v-else>暂无</span>
            </div>
            <div class="allPayment">
              <span class="label">参考总价</span>
              <span v-if="data.allPayment">{{ data.allPayment }}万元</span>
              <span v-else>暂无</span>
            </div>
            <div class="disclaimer">
              <span class="label">免责声明</span>首付月供金额为估算所得，仅供参考，用户使用前请谨慎核实。
            </div>
          </el-card>
          <el-card shadow="none" header="户型特点" class="characteristic">
            <div class="name">{{ data.characteristic }}</div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script src="./detail"></script>

<style lang="scss" scoped src="./detail.scss"></style>
