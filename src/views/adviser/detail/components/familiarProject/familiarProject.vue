<template>
  <div class="familiar-project">
    <el-card shadow="never" header="我熟悉的楼盘">
      <div v-for="item in data" :key="item.id">
        <div class="familiar-project__content">
          <div class="familiar-project__image">
            <router-link
                tag="a"
                target="_blank"
                :to="{ name: 'newHouseDetail', params: {id: item.id} }"
              >
              <el-image :src="item.showImgPath"></el-image>
            </router-link>
          </div>
          <div class="familiar-project__info">
            <div class="familiar-project__info__name-price">
              <router-link
                tag="a"
                target="_blank"
                :to="{ name: 'newHouseDetail', params: {id: item.id} }"
              >
                <span class="familiar-project__info__name">{{ item.name }}</span>
                <!-- <span class="familiar-project__info__preferential">
                  <i>惠</i><span>买房要趁早，点击领取专属优惠</span>
                </span> -->
              </router-link>
              <span class="familiar-project__info__price">{{ item.price }}元/平米</span>
            </div>
            <div class="familiar-project__info__local">
              <span>{{ item.site }}</span>
              <!-- <span class="followed">{{ item.followedNum }}人已关注</span> -->
            </div>
            <div class="familiar-project__info__tel">
              <span><i class="el-icon-phone"></i>{{ item.sellPhone }}</span>
            </div>
            <div class="familiar-project__info__tag">
              <el-tag size="small" v-for="(label, index) in item.labels" :key="index">{{ label }}</el-tag>
            </div>
          </div>
        </div>
        <div class="familiar-project__reason" v-if="item.reason">
          <div class="label">推荐理由</div>
          <div class="content">{{ item.reason }}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script src="./familiarProject"></script>

<style lang="scss" scoped src="./familiarProject.scss"></style>
