<template>
  <div class="dynamic">
    <div v-for="item in data" :key="item.id">
      <tab-content :data="item"></tab-content>
    </div>
  </div>
</template>

<script src="./dynamic"></script>

<style lang="scss" scoped src="./dynamic.scss"></style>
