<template>
  <div class="floor">
    <!-- 项目参数 -->
    <project-params :data="data"></project-params>
    <!-- 项目介绍 -->
    <project-introduction :data="data"></project-introduction>
    <!-- 周边设施 -->
    <peripheral-park :data="data"></peripheral-park>
    <!-- 免责声明 -->
    <disclaimer></disclaimer>
    <!-- 扩展 -->
    <expand :data="data"></expand>
  </div>
</template>

<script src="./floor"></script>

<style lang="scss" scoped src="./floor.scss"></style>
