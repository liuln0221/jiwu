<template>
  <div class="detail">
    <div class="current-local">
      <span>您的位置：</span>
      <router-link :to="{ name: 'home' }">{{ location.name }}房产网</router-link>
      <router-link :to="{ name: 'oldHouse' }">{{ location.name }}二手房</router-link>
      <router-link :to="{ name: '' }">{{ data.local }}</router-link>
    </div>
    <!-- 基本信息 -->
    <base-info :data="data"></base-info>
    <!-- 小区信息 -->
    <cell-info></cell-info>
    <!-- 房源描述 -->
    <description></description>
    <!-- 房源相册 -->
    <album></album>
    <!-- 房价走势 -->
    <price-trend :data="data"></price-trend>
    <!-- 周边配套 -->
    <matching></matching>
    <!-- 同小区房源 -->
    <same-community></same-community>
    <!-- 同类型房源 -->
    <same-type></same-type>
    <!-- 免责声明 -->
    <disclaimer></disclaimer>
  </div>
</template>

<script src="./detail"></script>

<style lang="scss" scoped src="./detail.scss"></style>
