<template>
  <div class="album">
    <el-card shadow="never" header="房源相册">
      <el-row :gutter="10">
        <el-col :span="8" v-for="item in data" :key="item.id">
          <el-image :src="item.img"></el-image>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./album"></script>

<style lang="scss" scoped src="./album.scss"></style>
