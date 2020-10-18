<template>
  <div class="index">
    <!-- <el-card shadow="never" header="关于我们" class="index__menu">
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
    <div class="index__main"><router-view /></div> -->
    <el-card shadow="never" header="严选好房">
      <p v-for="(item, index) in data" :key="index">{{ item }}</p>
    </el-card>
  </div>
</template>

<script src="./index"></script>

<style lang="scss" scoped src="./index.scss"></style>
