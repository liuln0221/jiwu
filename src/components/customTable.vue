<template>
  <div class="custom-table">
    <el-row v-for="(info, index) in infos" :key="index">
      <el-col :span="8" v-for="(item, itemIndex) in info" :key="itemIndex">
        <div class="label">
          <el-link :underline="false" v-if="item.href">{{ item.label }}</el-link>
          <span v-else>{{ item.label }}</span>
        </div>
        <div class="value">
          <span v-if="item.getValue || store[item.value]"> {{ item.getValue ? item.getValue(store[item.value]) : store[item.value] }}</span>
          <span v-else>暂无数据</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'cuntomTable',
  props: [ 'infos', 'store' ]
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
      height: 40px;
      line-height: 40px;

      .label {
        width: 110px;
        text-align: center;
        background: #f8f8f8;
        color: #869099;
        vertical-align: middle;
      }

      .value {
        padding-left: 20px;
      }
    }
  }
}
</style>
