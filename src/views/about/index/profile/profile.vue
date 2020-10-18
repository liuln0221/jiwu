<template>
  <div class="profile">
    <el-card shadow="never" header="严选好房简介">
      <p v-for="(item, index) in data" :key="index">{{ item }}</p>
    </el-card>
  </div>
</template>

<script src="./profile"></script>

<style lang="scss" scoped src="./profile.scss"></style>
