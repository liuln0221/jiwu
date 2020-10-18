<template>
  <div class="disclaimer">
    <el-card shadow="never" header="免责声明">
      <p v-for="(item, index) in data" :key="index">{{ item }}</p>
      <div class="footer">
        <p>廊坊市创源网络科技有限公司</p>
        <p>2020年05月01日</p>
      </div>
    </el-card>
  </div>
</template>

<script src="./disclaimer"></script>

<style lang="scss" scoped src="./disclaimer.scss"></style>
