<template>
  <div class="navbar" :style="`height: ${height}px`">
    <el-menu :default-active="activeIndex" id="navbar">
      <el-menu-item
        v-for="menu in menus"
        :key="menu.name"
        :index="menu.name"
        @click="changeHash(menu.name)"
      >
        {{ menu.label }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script src="./navbar"></script>

<style lang="scss" scoped src="./navbar.scss"></style>
