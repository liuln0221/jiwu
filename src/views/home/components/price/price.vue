<template>
  <div class="price">
    <el-row :gutter="40">
      <el-col :span="6">
        <el-link class="price__title" :underline="false">{{ location.name }}房价</el-link>
        <div class="price__trend">
          <line-chart :option="option"></line-chart>
        </div>
      </el-col>
      <el-col :span="16 / prices.length" v-for="price in prices" :key="price.name">
        <router-link class="price__title" target="_blank" :to="{ name: price.name }">找{{ price.title }}</router-link>
        <el-row class="price__content" :gutter="10" v-for="link in price.links" :key="link.name">
          <el-col :span="2" class="price__content__label">{{ link.label }}</el-col>
          <el-col :span="22">
            <router-link
              v-for="option in link.options"
              :key="option.name"
              target="_blank"
              :to="{ name: price.name, params: { filter: link.name === 'region'? `region${option.name}` : link.name === 'priceInterval' ? `priceInterval${option.name}` : undefined,
                price: link.name === 'price' ? option.name : undefined } }"
            >
              <el-button type="text">{{ option.label }}</el-button>
            </router-link>
            <span class="price__content__nodata" v-if="link.options.length === 0">暂无</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./price"></script>

<style lang="scss" scoped src="./price.scss"></style>
