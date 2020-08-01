<template>
  <div class="region-price-rank">
    <el-card shadow="never">
      <div slot="header">
        <div>
          <span>区域房价排行</span>
          <span class="common">均价上涨区域1个，均价下跌区域0个</span>
        </div>
        <div>
          <el-radio v-model="type" :label="1" @change="getChildRegionPricesRank">新房</el-radio>
          <!-- <el-radio v-model="type" :label="2" @change="getChildRegionPricesRank">二手房</el-radio> -->
        </div>
      </div>
      <el-table :data="expand ? data : (data.slice(0, 10))">
        <el-table-column label="排行" min-width="100px">
          <template slot-scope="scope">
            <div class="rank" :class="scope.row.rank <= 3 ? 'bk-red' : ''">{{ scope.row.rank }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="region" label="区域" min-width="100px"></el-table-column>
        <el-table-column label="均价" min-width="100px">
          <template slot-scope="scope">
            <div v-if="scope.row.averagePrice">{{ scope.row.averagePrice }}元/㎡</div>
          </template>
        </el-table-column>
        <el-table-column prop="mom" label="环比" min-width="100px">
          <template slot-scope="scope">
            <div v-if="scope.row.mom">
              <span class="mom">
                <i :class="scope.row.mom > 0 ? 'el-icon-top upper' : 'el-icon-bottom lower'">
                  {{ (Math.abs(scope.row.mom) * 100).toFixed(2) }}%
                </i>
              </span>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-button @click="expand = !expand">更多区域房价<i :class="`el-icon-arrow-${ expand ? 'up' : 'down' }`"></i></el-button>
    </el-card>
  </div>
</template>

<script src="./regionpricerank"></script>

<style lang="scss" scoped src="./regionpricerank.scss"></style>
