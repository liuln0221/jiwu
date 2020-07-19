<template>
  <div class="find-room">
    <el-form
      :model="form"
      :rules="rules"
      ref="form"
      label-suffix="："
      label-width="82px"
      hide-required-asterisk
    >
      <div class="title">
        输入您的找房需求，<span class="prom">10秒</span>找到<span class="prom">理想房源</span>
      </div>
      <el-row :gutter="60">
        <el-col :span="9">
          <el-form-item label="期望城市" prop="province" class="city">
            <el-select v-model="form.province" size="mini" value-key="name">
              <el-option
                v-for="item in provinces"
                :key="item.name"
                :label="item.label"
                :value="item">
              </el-option>
            </el-select>
            <el-select v-model="form.city" size="mini" value-key="name">
              <el-option
                v-for="item in citys"
                :key="item.name"
                :label="item.label"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="期望户型" prop="houseType">
            <el-select v-model="form.houseType" size="mini" value-key="name">
              <el-option
                v-for="item in houseTypes"
                :key="item.name"
                :label="item.label"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="期望预算" prop="budget">
            <el-select v-model="form.budget" size="mini" value-key="name">
              <el-option
                v-for="item in budgets"
                :key="item.name"
                :label="item.label"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="期望区域" prop="region">
            <el-select v-model="form.region" size="mini" value-key="name">
              <el-option
                v-for="item in regions"
                :key="item.name"
                :label="item.label"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="购房目的" prop="objective">
            <el-select v-model="form.objective" size="mini" value-key="name">
              <el-option
                v-for="item in objectives"
                :key="item.name"
                :label="item.label"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机号码" prop="tel">
            <el-input v-model="form.tel" size="mini" placeholder="输入手机号码，接收房源信息"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" class="submit">
          <el-button @click="submit()">立即找房</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script src="./findroom"></script>

<style lang="scss" scoped src="./findroom.scss"></style>
