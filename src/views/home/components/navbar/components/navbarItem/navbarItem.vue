<template>
  <div class="submenu-item">
    <slot name="title"></slot>
    <el-row
      :gutter="10"
      v-for="link in links"
      :key="link.name"
    >
      <el-col :span="2" class="submenu-item__link__title">{{ link.title }}</el-col>
      <el-col :span="22">
        <el-button
          type=text
          v-for="option in link.options"
          :key="option.name"
        >{{ option.label }}</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./navbarItem"></script>

<style lang="scss" scoped src="./navbarItem.scss"></style>
