<template>
  <div class="checkPrice">
    <el-row>
      <el-col :span="3">
        <div class="checkPrice__location">{{ location.name }}</div>
        <div class="checkPrice__time">2020-03月</div>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="60" class="checkPrice__price">
          <el-col :span="12">
            <div class="checkPrice__price__title">新房房价</div>
            <div>
              <span class="checkPrice__price__number">{{ newHousePrice.value }}</span>
              <span class="checkPrice__price__unit">元/平米</span>
              <span class="checkPrice__price__trend">
                <i :class="newHousePrice.trend > 0 ? 'el-icon-top upper' : 'el-icon-bottom lower'">{{ Math.abs(newHousePrice.trend) / 100 }}%</i>
              </span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="checkPrice__price__title">二手房房价</div>
            <div>
              <span class="checkPrice__price__number">{{ oldHousePrice.value }}</span>
              <span class="checkPrice__price__unit">元/平米</span>
              <span class="checkPrice__price__trend">
                <i :class="oldHousePrice.trend > 0 ? 'el-icon-top upper' : 'el-icon-bottom lower'">{{ Math.abs(oldHousePrice.trend) / 100 }}%</i>
              </span>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="5">
        <el-button class="checkPrice__detail" type="text">详情<i class="el-icon-arrow-right"></i></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./checkPrice"></script>

<style lang="scss" scoped src="./checkPrice.scss"></style>
