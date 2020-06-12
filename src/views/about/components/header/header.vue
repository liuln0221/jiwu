<template>
  <div class="header">
    <!-- logo -->
    <el-image src="http://images.jiwu.com/images/v5.0/ico.png"></el-image>
    <!-- 导航 -->
    <el-menu ref="menu" :default-active="activeIndex" mode="horizontal">
      <el-menu-item
        v-for="menu in menus"
        :key="menu.name"
        :index="menu.name"
      >
        <router-link :to="{ name: menu.name }">{{ menu.label }}</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script src="./header"></script>

<style lang="scss" scoped src="./header.scss"></style>
