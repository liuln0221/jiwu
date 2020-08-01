<template>
  <div class="result">
    <el-divider></el-divider>
    <el-card shadow="never" header="查看结果：">
      <slot v-if="custom" name="custom"></slot>
      <el-row v-else>
        <el-col :span="12">
          <div class="title">等额本息</div>
          <custom-table :info="principalInterest" :store="principalInterestStore"></custom-table>
        </el-col>
        <el-col :span="12">
          <div class="title">等额本金</div>
          <custom-table :info="principal" :store="principalStore"></custom-table>
        </el-col>
      </el-row>
    </el-card>
    <div class="result__operate">接下来您可以：<el-button type="text" @click="reset">重新计算</el-button></div>
    <div class="result__desc"><i class="el-icon-info"></i>此结果仅供参考，实际应缴费以当地为准</div>
  </div>
</template>

<script src="./result"></script>

<style lang="scss" scoped src="./result.scss"></style>
