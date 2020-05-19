<template>
  <div class="image-info">
    <el-row :gutter="20">
      <el-col :span="10">
        <el-image :src="data.img"></el-image>
      </el-col>
      <el-col :span="14">
        <el-link :underline="false">{{ data.houseType }}</el-link>
        <p v-if="data.area">建筑面积：约{{ data.area }}平米</p>
        <p v-if="data.downPayments">参考首付：{{ data.downPayments }}万</p>
        <p v-if="data.monthlySupply">参考月供：约{{ data.monthlySupply }}元</p>
        <p v-if="data.desc">户型描述：{{ data.desc }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'imageInfo',
  props: [ 'data' ]
}
</script>

<style lang="scss" scoped>
.image-info {
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
      .el-image {
        height: 100%;
      }

      .el-link {
        font-size: 16px;
        font-weight: bold;
      }

      p {
        margin: 10px 0;
      }
    }
  }
}
</style>
