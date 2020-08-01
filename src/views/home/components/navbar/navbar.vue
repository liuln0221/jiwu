<template>
  <div class="navbar">
    <el-menu default-active="1-4-1" :collapse="true">
      <el-menu-item
        v-for="menu in menus"
        :key="menu.name"
        :index="menu.name"
        default-active="newHouse"
      >
        <el-submenu v-if="menu.links && menu.links.length > 0" :index="menu.name" popper-class="navbar__popper">
          <template slot="title">
            <i class="navbar__icon" :class="menu.icon"></i>
            <router-link
              v-if="menu.routerTo"
              class="navbar__title"
              :to="menu.routerTo"
              target="_blank"
            >{{ menu.label }}</router-link>
            <div v-else class="navbar__title">{{ menu.label }}</div>
          </template>
          <navbar-item :links="menu.links">
            <template slot="title">
              <!-- 新房 -->
              <div v-if="menu.name === 'newHouse'" class="navbar__submenu__item__title">
                <!-- <el-button icon="icon-house-map">地图找房</el-button>
                <span>或</span> -->
                <router-link :to="{ name: 'adviser' }">
                  <i class="icon-message"></i>找新房置业管家咨询
                </router-link>
              </div>
              <!-- 二手房 -->
              <div v-else-if="menu.name === 'oldHouse'" class="navbar__submenu__item__title">
                <el-button icon="icon-message">找二手房经纪人咨询</el-button>
              </div>
              <!-- 查房价 -->
              <check-price v-else></check-price>
            </template>
          </navbar-item>
        </el-submenu>
        <div v-else class="navbar__menu__item">
          <i class="navbar__icon" :class="menu.icon"></i>
          <router-link
            v-if="menu.routerTo"
            class="navbar__title"
            :to="menu.routerTo"
            target="_blank"
          >{{ menu.label }}</router-link>
          <div v-else class="navbar__title">{{ menu.label }}</div>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script src="./navbar"></script>

<style lang="scss" scoped src="./navbar.scss"></style>