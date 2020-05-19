<template>
  <div class="home">
    <!-- 基本信息 -->
    <base-info :data="data"></base-info>
    <!-- 最新动态 -->
    <dynamic :data="data"></dynamic>
    <!-- 户型图 -->
    <house-type :data="data"></house-type>
    <!-- 楼盘信息 -->
    <property-info :data="data"></property-info>
    <!-- 周边配套 -->
    <periphery :data="data"></periphery>
    <!-- 楼盘相册 -->
    <album :data="data"></album>
    <!-- 房价 -->
    <price :data="data"></price>
    <!-- 商家其他楼盘 -->
    <other :data="data"></other>
    <!-- 同价位新盘 -->
    <same-price :data="data"></same-price>
    <!-- 片区楼盘 -->
    <district :data="data"></district>
    <!-- 扩展 -->
    <expand :data="data"></expand>
  </div>
</template>

<script src="./home"></script>

<style lang="scss" scoped src="./home.scss"></style>
