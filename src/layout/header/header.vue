<template>
  <div class="header">
    <el-row>
      <el-col :span="4" class="header__logo">
        <!-- logo -->
        <!-- <img src="@/assets/logo.png" /> -->
        <img src="http://images.jiwu.com/images/v5.0/logo.png" />
        <!-- 当前地址 -->
        <el-button type="text">
          {{ location }}
          <i class="el-icon-caret-right"></i>
        </el-button>
      </el-col>
      <el-col :span="14">
        <!-- 导航 -->
        <el-menu ref="menu" :default-active="activeIndex" mode="horizontal">
          <el-menu-item
            v-for="menu in menus"
            :key="menu.name"
            :index="menu.name"
            :style="menu.children && menu.children.length > 0 ? 'padding: 0' : ''"
          >
            <el-submenu v-if="menu.children && menu.children.length > 0" :index="menu.name" popper-class="header__popper">
              <template slot="title"><router-link :to="{ name: menu.name }">{{ menu.label }}</router-link></template>
              <el-menu-item v-for="submenu in menu.children" :key="submenu.name" :index="submenu.name">
                <router-link :to="{ name: submenu.name }">{{ submenu.label }}</router-link>
              </el-menu-item>
            </el-submenu>
            <!-- <span v-else>{{ menu.label }}</span> -->
            <router-link :to="{ name: menu.name }" v-else>{{ menu.label }}</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6">
        <!-- 搜索 -->
        <el-input
          suffix-icon="el-icon-search"
          v-model="search.value"
          :placeholder="search.select.placeholder"
        >
          <el-select v-model="search.select" value-key="name" slot="prepend">
            <el-option
              v-for="option in search.options"
              :key="option.name"
              :label="option.label"
              :value="option"></el-option>
          </el-select>
        </el-input>
        <!-- 登录 -->
        <el-button type="text" class="header__login">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./header"></script>

<style lang="scss" scoped src="./header.scss"></style>