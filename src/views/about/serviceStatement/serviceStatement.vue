<template>
  <div class="serviceStatement">
    <el-card shadow="never" header="服务声明" class="index__menu">
      <el-menu ref="menu" :default-active="activeIndex">
        <el-menu-item
          v-for="menu in menus"
          :key="menu.name"
          :index="menu.name"
        >
          <router-link :to="{ name: menu.name }">- {{ menu.label }}</router-link>
        </el-menu-item>
      </el-menu>
    </el-card>
    <div class="index__main"><router-view /></div>
  </div>
</template>

<script src="./serviceStatement"></script>

<style lang="scss" scoped src="./serviceStatement.scss"></style>
