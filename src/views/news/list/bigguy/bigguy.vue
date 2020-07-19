<template>
  <div class="bigguy">
    <div v-for="item in data" :key="item.id">
      <tab-content :data="item" :image="true" :subscribe="true"></tab-content>
    </div>
  </div>
</template>

<script src="./bigguy"></script>

<style lang="scss" scoped src="./bigguy.scss"></style>
