<template>
  <div class="base-info">
    <el-card shadow="never" :header="data.name">
      <el-row :gutter="50">
        <el-col :span="16">
          <el-image :src="data.src"></el-image>
          <div class="base-info__image">
            <el-button icon="el-icon-arrow-left" @click="leftClick"></el-button>
            <ul ref="ul">
              <li
                v-for="(image, index) in data.images"
                :key="index"
                :style="index === 0 ? 'display: none;' : ''"
              >
                <el-image :src="image"></el-image>
              </li>
            </ul>
            <el-button icon="el-icon-arrow-right" @click="rightClick"></el-button>
          </div>
        </el-col>
        <el-col :span="8">
          <el-card
            shadow="never"
            :header="`${data.local} ${data.houseType} ${data.area}平米`"
            class="base-info__info"
          >
            <el-tag v-for="tag in data.tags" :key="tag.name">{{ tag.label }}</el-tag>
            <div class="price">
              <div>
                <div class="label">挂牌总价</div>
                <div class="total"><span>{{ data.price }}</span>万</div>
              </div>
              <div>
                <div class="label">参考首付</div>
                <div><span>{{ data.downPayments }}</span>万</div>
              </div>
              <div>
                <div class="label">参考月供</div>
                <div><span>{{ data.monthlySupply }}</span>万</div>
              </div>
            </div>
            <el-row class="info" :gutter="10">
              <el-col :span="12" v-for="item in store" :key="item.label">
                <span class="label">{{ item.label }}</span>
                <span>{{ item.value }}</span>
              </el-col>
              <el-col :span="24">
                <span class="label">地址</span>
                <span>{{ data.address }} 查看周边地图</span>
                <el-button type="text" icon="el-icon-mobile-phone">发地址到手机</el-button>
              </el-col>
            </el-row>
            <div class="adviser">
              <el-image :src="data.adviser.img"></el-image>
              <div class="adviser__info">
                <div class="adviser__name">
                  <router-link class="name" :to="{}">{{ data.adviser.name }}</router-link>
                  <span class="desc">联系我请说在严选好房看到的房源信息</span>
                </div>
                <div class="adviser__operate">
                  <el-button class="tel">{{ data.adviser.tel.number }}转{{ data.adviser.tel.relay }}</el-button>
                  <el-button class="appointmentSee">预约看房</el-button>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./baseinfo"></script>

<style lang="scss" scoped src="./baseinfo.scss"></style>
