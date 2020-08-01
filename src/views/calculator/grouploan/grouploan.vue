<template>
  <div class="group-loan">
    <calculator name="组合贷款计算器" :custom="true">
      <template slot="custom">
        <el-form ref="form" :model="data" :rules="rules" label-width="140px">
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
          <el-form-item label="公积金贷款金额" prop="fundMoney">
            <el-input v-model="data.fundMoney">
              <span slot="suffix">万元</span>
            </el-input>
          </el-form-item>        
          <el-form-item label="公积金贷款利率" prop="fundRate">
            <el-select v-model="data.fundRate">
              <el-option
                v-for="(item, index) in fundRates"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商业贷款金额" prop="propertyMoney">
            <el-input v-model="data.propertyMoney">
              <span slot="suffix">万元</span>
            </el-input>
          </el-form-item>        
          <el-form-item label="商业贷款利率" prop="propertyRate">
            <el-select v-model="data.propertyRate">
              <el-option
                v-for="(item, index) in propertyRates"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button class="submit" @click="submit">开始计算</el-button>
            <el-button class="reset" @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
    </calculator>
    <result ref="result" @reset="reset"></result>
  </div>
</template>

<script src="./grouploan"></script>
