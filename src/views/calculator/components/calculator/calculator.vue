<template>
  <div class="calculator">
    <el-card shadow="never" :header="name">
      <div class="desc">2015年10月24日最新商贷利率4.90%，公积金利率3.25%</div>
      <el-row :gutter="20">
        <el-col :span="14">
          <slot v-if="custom" name="custom"></slot>
          <el-form
            v-else
            ref="form"
            :model="data"
            :rules="type === 'quota' ? quotaRules : areaRules"
            label-width="140px"
          >
            <el-form-item label="计算方式">
              <el-radio-group v-model="type" @change="radioChange">
                <el-radio-button label="quota">按贷款额度算</el-radio-button>
                <el-radio-button label="area">按面积算</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <!-- 按贷款额度算 -->
            <div v-if="type === 'quota'">
              <el-form-item label="贷款金额" prop="money">
                <el-input v-model="quota.money">
                  <span slot="suffix">万元</span>
                </el-input>
              </el-form-item>
              <el-form-item label="贷款年限" prop="time">
                <el-select v-model="quota.time">
                  <el-option
                    v-for="(item, index) in times"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="贷款利率" prop="rate">
                <el-select v-model="quota.rate">
                  <el-option
                    v-for="(item, index) in rates"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
            <!-- 按面积算 -->
            <div v-else-if="type === 'area'">
              <el-form-item label="单价" prop="price">
                <el-input v-model="area.price">
                  <span slot="suffix">元/平米</span>
                </el-input>
              </el-form-item>
              <el-form-item label="面积" prop="area">
                <el-input v-model="area.area">
                  <span slot="suffix">平米</span>
                </el-input>
              </el-form-item>
              <el-form-item label="首付" prop="downPayments">
                <el-select v-model="area.downPayments">
                  <el-option
                    v-for="(item, index) in downPayments"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="贷款年限" prop="time">
                <el-select v-model="area.time">
                  <el-option
                    v-for="(item, index) in times"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="贷款利率" prop="rate">
                <el-select v-model="area.rate">
                  <el-option
                    v-for="(item, index) in rates"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
            <el-form-item>
              <el-button class="submit" @click="submit">开始计算</el-button>
              <el-button class="reset" @click="reset">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="10">
          <adviser></adviser>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./calculator"></script>

<style lang="scss" scoped src="./calculator.scss"></style>
