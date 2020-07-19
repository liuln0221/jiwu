<template>
  <div class="submenu-item">
    <slot name="title"></slot>
    <el-row
      :gutter="10"
      v-for="link in links"
      :key="link.name"
    >
      <el-col :span="2" class="submenu-item__link__title">{{ link.label }}</el-col>
      <el-col :span="22">
        <router-link
          v-for="option in link.options"
          :key="option.name"
          :to="{ name: 'newHouseListFilter', params: { filter: link.name === 'region'? `region${option.name}` : link.name === 'priceInterval' ? `priceInterval${option.name}` : undefined} }"
          target="_blank"
        >{{ option.label }}</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./navbarItem"></script>

<style lang="scss" scoped src="./navbarItem.scss"></style>
