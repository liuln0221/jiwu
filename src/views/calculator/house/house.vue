<template>
  <div class="house">
    <calculator name="购房能力评估" :custom="true">
      <template slot="custom">
        <el-form :model="data" label-width="140px">
          <el-form-item label="可用于购房的资金" prop="fund">
            <el-input v-model="data.fund">
              <span slot="suffix">万元</span>
            </el-input>
          </el-form-item>
          <el-form-item label="现家庭月收入" prop="monthlyHouseholdIncome">
            <el-input v-model="data.monthlyHouseholdIncome">
              <span slot="suffix">元</span>
            </el-input>
          </el-form-item>
          <el-form-item label="每月可用于购房支出" prop="monthlyPurchaseExpenses">
            <el-input v-model="data.monthlyPurchaseExpenses">
              <span slot="suffix">元</span>
            </el-input>
          </el-form-item>
          <el-form-item label="期望偿还贷款的年限" prop="time">
            <el-select v-model="data.time">
              <el-option
                v-for="(item, index) in times"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="计划购买房屋的面积" prop="area">
            <el-input v-model="data.area">
              <span slot="suffix">平方米</span>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="submit">开始计算</el-button>
            <el-button class="reset">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
    </calculator>
    <result :custom="true">
      <template slot="custom">
        <custom-table :info="info" :store="store"></custom-table>
      </template>
    </result>
  </div>
</template>

<script src="./house"></script>

<style lang="scss" scoped src="./house.scss"></style>
