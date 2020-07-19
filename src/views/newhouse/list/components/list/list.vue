<template>
  <div class="list">
    <div class="list__item" v-for="item in data" :key="item.id">
      <div class="list__item__content">
        <div class="list__item__image">
          <router-link
              tag="a"
              target="_blank"
              :to="{ name: 'newHouseDetail', params: {id: item.id} }"
            >
            <el-image :src="item.imgUrl"></el-image>
          </router-link>
        </div>
        <div class="list__item__info">
          <div class="list__item__info__name-price">
            <router-link
              tag="a"
              target="_blank"
              :to="{ name: 'newHouseDetail', params: {id: item.id} }"
            >
              <span class="list__item__info__name">{{ item.name }}</span>
              <!-- <span class="list__item__info__preferential">
                <i>惠</i><span>24小时线上咨询 立享优惠</span>
              </span> -->
            </router-link>
            <span class="list__item__info__price">{{ item.price }}元/平米</span>
          </div>
          <div class="list__item__info__local">
            <span>{{ item.site }}</span>
            <el-button type="text" icon="icon-heart" @click="concernProject(item)">关注楼盘</el-button>
          </div>
          <div class="list__item__info__tel">
            <span><i class="el-icon-phone"></i>{{ item.sellPhone }}</span>
          </div>
          <div class="list__item__info__tag">
            <el-tag size="small" v-for="(label, index) in item.labels" :key="index">{{ label }}</el-tag>
          </div>
        </div>
      </div>
      <div class="list__item__sales" v-if="item.recommendedSales">
        <router-link :to="{ name: 'adviserDetail', param: { id: item.recommendedSales.id } }">
          <el-image :src="item.recommendedSales.headImgUrl"></el-image>
        </router-link>
        <div class="info">
          <div class="num">已为{{ item.recommendedSales.num }}人</div>
          <div class="num">提供过购房服务</div>
          <el-button icon="icon-message2">向TA咨询</el-button>
        </div>
      </div>
      <div class="list__item__reason" v-if="item.recommendedReason">
        <div class="title">推荐理由：</div>
        <div class="content">{{ item.recommendedReason }}</div>
      </div>
    </div>
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page.sync="page.current"
      :page-size="page.size"
      layout="prev, pager, next"
      :total="page.total">
    </el-pagination>
  </div>
</template>

<script src="./list"></script>

<style lang="scss" scoped src="./list.scss"></style>
