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
      <div class="phone">咨询最新优惠：<span class="tel">{{ data.tel.number }}<span class="relay">转</span>{{ data.tel.relay }}</span></div>
    </div>
    <div class="legend">
      <div>
        <el-link :underline="false" v-for="(option, index) in optionData" :key="index">
          <i class="el-icon-plus" :style="`color: ${option.color}`"></i>{{ option.name }}
        </el-link>
      </div>
      <el-dropdown>
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <div class="dropdown-menu__content">1</div>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
    <div class="chart">
      <line-chart :option="option"></line-chart>
    </div>
    <!-- 价格记录 -->
    <div class="table">
      <el-table :data="tableData" border>
        <el-table-column prop="recordTime" label="记录时间" min-width="100px" align="center"></el-table-column>
        <el-table-column prop="ceilingPrice" label="最高价格" min-width="150px" align="center"></el-table-column>
        <el-table-column prop="avgPrice" label="均价" min-width="150px" align="center"></el-table-column>
        <el-table-column prop="floorPrice" label="最低价格" min-width="150px" align="center"></el-table-column>
        <el-table-column prop="description" label="价格描述" min-width="300px"></el-table-column>
      </el-table>
    </div>
    <!-- 动态 -->
    <el-card header="最新动态" shadow="never">
      <div class="newHouse-detail__dynamic">
        <div class="title">
          <el-link :underline="false">梵悦108，国贸CBD精装现房在售，在售均价约10万元/平</el-link>
          <div>{{ data.updateTime | dateStrToFormat('YYYY-MM-DD') }}</div>
        </div>
        <div class="info">
          <el-link :underline="false">梵悦108位于北京市朝阳区建国路乙108号，在售住宅产品，70年产权。梵悦108，目前在售户型建筑面积为94平米-257.12平米，均价约10万元/平，总价1200万元/套起，精装修现房，物业费30元/平方米.月。 梵悦108项目位于国贸桥，国贸CBD最核心的黄金十字角，眼望...</el-link>
        </div>
      </div>
      <div class="newHouse-detail__dynamic">
        <div class="title">
          <el-link :underline="false">梵悦108，国贸CBD精装现房在售，在售均价约10万元/平</el-link>
          <div>{{ data.updateTime | dateStrToFormat('YYYY-MM-DD') }}</div>
        </div>
        <div class="info">
          <el-link :underline="false">梵悦108位于北京市朝阳区建国路乙108号，在售住宅产品，70年产权。梵悦108，目前在售户型建筑面积为94平米-257.12平米，均价约10万元/平，总价1200万元/套起，精装修现房，物业费30元/平方米.月。 梵悦108项目位于国贸桥，国贸CBD最核心的黄金十字角，眼望...</el-link>
        </div>
      </div>
    </el-card>
    <!-- 免责声明 -->
    <disclaimer></disclaimer>
    <!-- 扩展 -->
    <expand :data="data"></expand>
  </div>
</template>

<script src="./pricetrend"></script>

<style lang="scss" scoped src="./pricetrend.scss"></style>
