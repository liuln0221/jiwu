<template>
  <div class="pricetrend">
    <div class="price-info">
      <div>
        <span class="price">{{ data.price }}平米</span>
        <el-button
          type="text"
          v-for="(btn, index) in buttons"
          :key="index"
          :icon="btn.icon"
          :style="`color: ${btn.color}`"
        >{{ btn.text }}</el-button>
      </div>
      <div class="phone">咨询最新优惠：<span class="tel">{{ data.sellPhone }}</span></div>
    </div>
    <div class="legend">
      <div>
        <el-link :underline="false" v-for="(option, index) in optionData" :key="index">
          <i class="icon-line" :style="`color: ${option.color}`"></i>{{ option.name }}
        </el-link>
      </div>
      <el-select v-model="time" value-key="name" @change="getHistory">
        <el-option v-for="item in timeSelect" :key="item.name" :label="item.label" :value="item.name"></el-option>
      </el-select>
    </div>
    <div class="chart">
      <line-chart :option="option"></line-chart>
    </div>
    <!-- 价格记录 -->
    <div class="table">
      <el-table :data="tableData" border>
        <el-table-column prop="date" label="记录时间" min-width="100px" align="center"></el-table-column>
        <el-table-column prop="maxPrice" label="最高价格" min-width="150px" align="center"></el-table-column>
        <el-table-column prop="averagePrice" label="均价" min-width="150px" align="center"></el-table-column>
        <el-table-column prop="minPrice" label="最低价格" min-width="150px" align="center"></el-table-column>
        <el-table-column prop="remark" label="价格描述" min-width="300px"></el-table-column>
      </el-table>
    </div>
    <!-- 动态 -->
    <el-card header="最新动态" shadow="never">
      <div
        class="newHouse-detail__dynamic"
        v-for="item in news"
        :key="item.id"
      >
        <div class="title">
          <router-link :to="{ name: 'newHouseDetailDynamicDetail', params: { newsId: item.id } }">{{ item.title }}</router-link>
          <div>{{ item.issueTime | dateStrToFormat('YYYY-MM-DD') }}</div>
        </div>
        <div class="info">
          <router-link :to="{ name: 'newHouseDetailDynamicDetail', params: { newsId: item.id } }" v-html="item.content"></router-link>
        </div>
      </div>
    </el-card>
    <!-- 免责声明 -->
    <disclaimer></disclaimer>
    <!-- 扩展 -->
    <!-- <expand :data="data"></expand> -->
  </div>
</template>

<script src="./pricetrend"></script>

<style lang="scss" scoped src="./pricetrend.scss"></style>
