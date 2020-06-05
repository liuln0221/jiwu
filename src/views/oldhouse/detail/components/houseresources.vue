<template>
  <div class="house-resources">
    <el-row :gutter="30">
      <el-col :span="6" v-for="item in data" :key="item.id">
        <router-link :to="{}">
          <el-image :src="item.img"></el-image>
          <div class="same-community__price">{{ item.price }}万</div>
        </router-link>
        <div class="same-community__info">
          <span class="local">{{ item.local }}</span>
          <span class="house-type">{{ item.houseType }}</span>
          <span class="split">|</span>
          <span class="area">{{ item.area }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'houseResources',
  props: [ 'data' ]
}
</script>

<style lang="scss" scoped>
.house-resources {
  .el-row {
    .el-col {
      a {
        display: block;
        width: 100%;
        height: 184px;

        .el-image {
          width: 100%;
          height: 100%;
        }

        .same-community__price {
          background-color: rgba(0,0,0,0.8);
          color: #fff;
          padding: 6px 12px;
          font-size: 16px;
          font-weight: bold;
          position: relative;
          bottom: 53px;
          width: max-content;
        }
      }

      .same-community__info {
        margin-top: 15px;

        .local {
          font-size: 16px;
          font-weight: bold;
        }

        .house-type {
          color: #666;
          margin-left: 10px;
        }

        .split {
          color: #ddd;
          margin: 0 5px;
        }

        .area {
          color: #666;
        }
      }
    }
  }
}
</style>
