<template>
  <div class="price">
    <el-row :gutter="40">
      <el-col :span="6">
        <el-link class="price__title" :underline="false">北京房价</el-link>
        <div class="price__trend">
          <line-chart :option="option"></line-chart>
        </div>
      </el-col>
      <el-col :span="8" v-for="price in prices" :key="price.name">
        <el-link class="price__title" :underline="false">找{{ price.title }}</el-link>
        <el-row class="price__content" :gutter="10" v-for="link in price.links" :key="link.name">
          <el-col :span="4" class="price__content__label">{{ link.label }}</el-col>
          <el-col :span="20">
            <el-button type="text" v-for="option in link.options" :key="option.name">{{ option.label }}</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./price"></script>

<style lang="scss" scoped src="./price.scss"></style>
