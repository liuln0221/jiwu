<template>
  <div class="checkPrice">
    <el-row>
      <el-col :span="6">
        <div class="checkPrice__location">{{ location.name }}</div>
        <div class="checkPrice__time">{{ newHousePrice.date }}</div>
      </el-col>
      <el-col :span="13">
        <el-row :gutter="100" class="checkPrice__price">
          <el-col :span="24">
            <div class="checkPrice__price__title">新房房价</div>
            <div v-if="newHousePrice.averagePrice">
              <span class="checkPrice__price__number">{{ newHousePrice.averagePrice }}</span>
              <span class="checkPrice__price__unit">元/平米</span>
              <span class="checkPrice__price__trend">
                <i :class="newHousePrice.mom > 0 ? 'el-icon-top upper' : 'el-icon-bottom lower'">{{ (Math.abs(newHousePrice.mom) * 100).toFixed(2) }}%</i>
              </span>
            </div>
            <div v-else>暂无</div>
          </el-col>
          <!-- <el-col :span="12">
            <div class="checkPrice__price__title">二手房房价</div>
            <div>
              <span class="checkPrice__price__number">{{ oldHousePrice.value }}</span>
              <span class="checkPrice__price__unit">元/平米</span>
              <span class="checkPrice__price__trend">
                <i :class="oldHousePrice.trend > 0 ? 'el-icon-top upper' : 'el-icon-bottom lower'">{{ Math.abs(oldHousePrice.trend) / 100 }}%</i>
              </span>
            </div>
          </el-col> -->
        </el-row>
      </el-col>
      <el-col :span="5">
        <router-link class="checkPrice__detail" :to="{ name: 'price' }">详情<i class="el-icon-arrow-right"></i></router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./checkPrice"></script>

<style lang="scss" scoped src="./checkPrice.scss"></style>
