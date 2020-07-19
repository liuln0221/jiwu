<template>
  <div class="image-info">
    <el-row :gutter="20">
      <el-col :span="10">
        <router-link v-if="data.routerTo" :to="data.routerTo" target="_blank">
          <el-image :src="data.layoutImgUrl"></el-image>
        </router-link>
        <el-image v-else :src="data.layoutImgUrl"></el-image>
      </el-col>
      <el-col :span="14">
        <router-link v-if="data.routerTo" :to="data.routerTo" target="_blank">{{ data.type }}</router-link>
        <span v-else class="name">{{ data.type }}</span>
        <p v-if="data.grossArea">建筑面积：约{{ data.grossArea }}平米</p>
        <p v-if="data.downPayment" class="downPayment">参考首付：<span>{{ data.downPayment }}万</span></p>
        <p v-if="data.monthlyPayment">参考月供：约{{ data.monthlyPayment }}元</p>
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
        width: 100%;
      }

      a,
      .name {
        font-size: 16px;
        font-weight: bold;
      }

      p {
        margin: 10px 0;

        &.downPayment {
          span {
            color: #ff6263;
          }
        }
      }
    }
  }
}
</style>
