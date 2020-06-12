<template>
  <div class="disclaimer">
    <el-card shadow="never" header="免责声明">
      <p v-for="(item, index) in data" :key="index">{{ item }}</p>
    </el-card>
  </div>
</template>

<script src="./disclaimer"></script>

<style lang="scss" scoped src="./disclaimer.scss"></style>
