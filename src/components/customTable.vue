<template>
  <div class="custom-table">
    <el-row v-for="(info, index) in infos" :key="index">
      <el-col :span="24 / (split ? split : 1)" v-for="(item, itemIndex) in info" :key="itemIndex">
        <div class="label">
          <el-link :underline="false" v-if="item.href">{{ item.label }}</el-link>
          <span v-else>{{ item.label }}</span>
        </div>
        <div class="value">
          <span v-if="item.getValue || store[item.value]">
            <span v-html="item.getValue ? item.getValue(store) : store[item.value]"></span>
            <span class="unit" v-if="item.unit">{{ item.unit }}</span>
          </span>
          <div v-else>暂无数据</div>
        </div>
        <div class="desc" v-if="descShow">
          <span v-if="store.desc" v-html="store.desc"></span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Common } from '@/utils/common';

export default {
  name: 'cuntomTable',
  props: [ 'info', 'split', 'store', 'descShow' ],
  computed: {
    infos() {
      return Common.arrTwoDimensional(this.info, this.split);
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-table {
  border-bottom: 1px solid #eee;
  .el-row {
    border: 1px solid #eee;
    border-bottom: none;
    .el-col {
      display: flex;
      min-height: 40px;
      line-height: 40px;

      .label {
        width: 110px;
        min-width: 110px;
        text-align: center;
        background: #f8f8f8;
        color: #869099;
        vertical-align: middle;
      }

      /deep/.value {
        width: 100%;
        padding-left: 20px;

        .rows {
          line-height: 20px;
        }

        .unit {
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
