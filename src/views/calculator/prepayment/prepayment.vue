<template>
  <div class="prepayment">
    <calculator name="提前还款计算器" :custom="true">
      <template slot="custom">
        <el-form :model="data" label-width="140px">
          <el-form-item label="还款类型" prop="type">
            <el-select v-model="data.type">
              <el-option
                v-for="(item, index) in types"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="原贷款金额" prop="money">
            <el-input v-model="data.money">
              <span slot="suffix">万元</span>
            </el-input>
          </el-form-item>
          <el-form-item label="原贷款年限" prop="time">
            <el-select v-model="data.time">
              <el-option
                v-for="(item, index) in times"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="原贷款利率" prop="rate">
            <el-select v-model="data.rate">
              <el-option
                v-for="(item, index) in rates"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="第一次还款时间" prop="firstPaymentTime">
            <el-date-picker
              v-model="data.firstPaymentTime"
              type="date"
              placeholder="请选择时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="提前还款时间" prop="prepaymentTime">
            <el-date-picker
              v-model="data.prepaymentTime"
              type="date"
              placeholder="请选择时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="期前还款方式" prop="prepaymentMode" class="prepayment__mode">
            <el-radio v-model="data.prepaymentMode" label="oneTime">一次性还清</el-radio>
            <el-radio v-model="data.prepaymentMode" label="partial">
              <span>部分提前还清</span>
              <el-input v-model="data.prepaymentMoney"></el-input>
              <span>万元</span>
            </el-radio>
          </el-form-item>
          <el-form-item label="处理方式" prop="treatmentMode" class="prepayment__mode">
            <el-radio
              v-model="data.treatmentMode"
              label="shortenPeriod"
              :disabled="data.prepaymentMode !== 'partial'"
            >缩短还款期限，月还款额基本不变</el-radio>
            <el-radio
              v-model="data.treatmentMode"
              label="reduceMonthlyPayment"
              :disabled="data.prepaymentMode !== 'partial'"
            >减少月还款额，还款期限不变</el-radio>
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
        <custom-table :info="info" :store="store" :split="2"></custom-table>
      </template>
    </result>
  </div>
</template>

<script src="./prepayment"></script>

<style lang="scss" scoped src="./prepayment.scss"></style>
