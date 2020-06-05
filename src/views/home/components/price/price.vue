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
        <router-link class="price__title" target="_blank" :to="{ name: price.name }">找{{ price.title }}</router-link>
        <el-row class="price__content" :gutter="10" v-for="link in price.links" :key="link.name">
          <el-col :span="4" class="price__content__label">{{ link.label }}</el-col>
          <el-col :span="20">
            <router-link
              v-for="option in link.options"
              :key="option.name"
              target="_blank"
              :to="{ name: price.name, query: { region: link.name === 'region'? option.name : undefined,
                avgPrice: link.name === 'avgPrice' ? option.name : undefined,
                price: link.name === 'price' ? option.name : undefined } }"
            >
              <el-button type="text">{{ option.label }}</el-button>
            </router-link>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./price"></script>

<style lang="scss" scoped src="./price.scss"></style>
