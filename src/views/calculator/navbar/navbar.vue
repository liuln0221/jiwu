<template>
  <div class="navbar">
    <el-menu :default-active="activeIndex" id="navbar">
      <el-menu-item
        v-for="menu in menus"
        :key="menu.name"
        :index="menu.name"
      >
        <router-link v-if="menu.routerTo" :to="menu.routerTo">{{ menu.label }}</router-link>
        <span v-else>{{ menu.label }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script src="./navbar"></script>

<style lang="scss" scoped src="./navbar.scss"></style>
