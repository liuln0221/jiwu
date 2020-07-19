<template>
  <div class="local">
    <div v-for="item in data" :key="item.id">
      <tab-content :data="item" :image="true"></tab-content>
    </div>
  </div>
</template>

<script src="./local"></script>

<style lang="scss" scoped src="./local.scss"></style>
