<template>
  <div class="newHouse-detail">
    <div class="newHouse-detail__local">
      <span>您的位置：</span>
      <el-link :underline="false" v-for="local in locals" :key="local.id">{{ local.label }}</el-link>
    </div>
    <div class="newHouse-detail__title">
      <div>
        <div class="newHouse-detail__title__name">{{ data.name }}</div>
        <div class="newHouse-detail__title__tag">
          <el-tag
            size="small"
            v-for="tag in data.label"
            :key="tag.name"
            :class="tag.name === 'specialCar' ? 'specialCar' : ''"
          >{{ tag.label }}</el-tag>
          <span class="newHouse-detail__title__alias">别名：{{ data.alias }}</span>
          <span class="newHouse-detail__title__update">
            <span>{{ new Date(data.updateTime).getFullYear() }}年</span>
            <span>{{ new Date(data.updateTime).getMonth() + 1 }}月</span>
            <span>{{ new Date(data.updateTime).getDate() }}日</span>更新
          </span>
        </div>
      </div>
      <div class="newHouse-detail__title__tel">
        <i class="icon-tel"></i>
        <div>
          <div class="newHouse-detail__title__tel__info">致电了解现场详情：</div>
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
