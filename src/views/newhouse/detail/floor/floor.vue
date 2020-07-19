<template>
  <div class="floor">
    <!-- 项目参数 -->
    <plan-info :data="data"></plan-info>
    <!-- 项目介绍 -->
    <introduce :description="description"></introduce>
    <!-- 景观特色 -->
    <landscape :description="description"></landscape>
    <!-- 区位介绍 -->
    <location :description="description"></location>
    <!-- 规划设计 -->
    <planning :description="description"></planning>
    <!-- 建筑风格 -->
    <e-style :description="description"></e-style>
    <!-- 周边设施 -->
    <surrounding :description="description"></surrounding>
    <!-- 免责声明 -->
    <disclaimer></disclaimer>
    <!-- 扩展 -->
    <!-- <expand :data="data"></expand> -->
  </div>
</template>

<script src="./floor"></script>

<style lang="scss" scoped src="./floor.scss"></style>
