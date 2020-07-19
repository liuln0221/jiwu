<template>
  <div class="newHouse-detail">
    <div class="newHouse-detail__local">
      <span>您的位置：</span>
      <router-link :to="{ name: 'home' }" target="_blank">{{ location.name }}房产网</router-link>
      <router-link :to="{ name: 'newHouse' }" target="_blank">{{ location.name }}楼盘</router-link>
    </div>
    <div class="newHouse-detail__title">
      <div>
        <div class="newHouse-detail__title__name">{{ data.name }}</div>
        <div class="newHouse-detail__title__tag">
          <el-tag
            size="small"
            v-for="(label, index) in data.labels"
            :key="index"
          >{{ label }}</el-tag>
          <span class="newHouse-detail__title__otherName">别名：{{ data.otherName }}</span>
          <span class="newHouse-detail__title__update">
            <span>{{ new Date(data.openDate).getFullYear() }}年</span>
            <span>{{ new Date(data.openDate).getMonth() + 1 }}月</span>
            <span>{{ new Date(data.openDate).getDate() }}日</span>更新
          </span>
        </div>
      </div>
      <div class="newHouse-detail__title__tel">
        <i class="icon-tel"></i>
        <div>
          <div class="newHouse-detail__title__tel__info">致电了解现场详情</div>
          <div class="newHouse-detail__title__tel__number">{{ data.sellPhone }}
            <!-- <span class="newHouse-detail__title__tel__number">{{ data.tel.number }}</span> -->
            <!-- <span class="newHouse-detail__title__tel__relay">转</span>{{ data.tel.relay }} -->
          </div>
        </div>
      </div>
    </div>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item
        v-for="menu in menus"
        :key="menu.name"
        :index="menu.name"
      >
        <span v-if="menu.name === 'phone'"></span>
        <router-link v-else :to="{ name: menu.name }">{{ menu.label }}</router-link>
      </el-menu-item>
    </el-menu>
    <div class="newHouse-detail__contet">
      <router-view />
    </div>
  </div>
</template>

<script src="./detail"></script>

<style lang="scss" scoped src="./detail.scss"></style>
