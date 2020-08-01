<template>
  <div class="avg-price">
    <div class="avg-price__info">
      <div class="avg-price__title">{{ location.name }}新房均价</div>
      <div class="avg-price__price">
        <span class="price">{{ data.averagePrice || '-' }}</span>
        <span class="unit">元/㎡</span>
        <span>环比上月</span>
        <span class="mom">
          <i :class="data.mom > 0 ? 'el-icon-top upper' : data.mom < 0 ? 'el-icon-bottom lower' : ''">{{ data.mom ? (Math.abs(data.mom) * 100).toFixed(2) : '-' }}%</i>
        </span>
      </div>
      <!-- <div class="avg-price__project">
        <router-link :to="{ name: 'newHouse' }">在售楼盘：{{}}个<i class="el-icon-arrow-right"></i></router-link>
        <router-link :to="{ name: 'newHouseListFilter', params: { filter: 'openStatus5' } }">近三个月新开盘：{{}}个<i class="el-icon-arrow-right"></i></router-link>
      </div> -->
    </div>
    <div class="avg-price__notify">
      <el-button type="text">价格变动通知我<i class="icon-line-chart"></i></el-button>
    </div>
  </div>
</template>

<script src="./avgprice"></script>

<style lang="scss" scoped src="./avgprice.scss"></style>
