<template>
  <div class="property">
    <el-card shadow="never" header="商业贷款计算器">
      <div class="desc">2015年10月24日最新商贷利率4.90%，公积金利率3.25%</div>
      <el-row :gutter="20">
        <el-col :span="14">
          <el-form :model="data" label-width="140px">
            <el-form-item label="计算方式" prop="type">
              <el-radio-group v-model="data.type">
                <el-radio-button label="quota">按贷款额度算</el-radio-button>
                <el-radio-button label="area">按面积算</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="贷款金额" prop="money">
              <el-input v-model="data.money">
                <span slot="suffix">万元</span>
              </el-input>
            </el-form-item>
            <el-form-item label="贷款年限" prop="time">
              <el-select v-model="data.time">
                <el-option
                  v-for="(item, index) in times"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="贷款利率" prop="rate">
              <el-select v-model="data.rate">
                <el-option
                  v-for="(item, index) in rates"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button class="submit">开始计算</el-button>
              <el-button class="reset">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="10">
          <div class="adviser">
            <div class="title">找置业管家，房贷测算更省事</div>
            <div
              class="item"
              v-for="item in advisers"
              :key="item.id"
            >
              <el-image :src="item.headImgUrl"></el-image>
              <div>
                <div>已为{{ item.num }}人</div>
                <div>提供过购房服务</div>
                <el-button>找TA测算房贷</el-button>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-divider></el-divider>
    <el-card class="result" shadow="never" header="查看结果："></el-card>
  </div>
</template>

<script src="./property"></script>

<style lang="scss" scoped src="./property.scss"></style>
