<template>
  <div class="help">
    <div class="help__form">
      <el-form :model="data">
        <el-form-item>
          <el-select v-model="data.province">
            <el-option></el-option>
          </el-select>
          <el-select v-model="data.city"></el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="data.region">
            <el-option value="" label="期望区域：不限"></el-option>
            <el-option
              v-for="item in regions"
              :key="item.id"
            >期望区域：{{ item.name }}</el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="help__expand"></div>
  </div>
</template>

<script src="./help"></script>

<style lang="scss" scoped src="./help.scss"></style>
