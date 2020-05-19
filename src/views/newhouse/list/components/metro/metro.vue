<template>
  <div class="metro">
    <el-row :gutter="10" type="flex">
      <el-col class="list__label"><span>地铁</span></el-col>
      <el-col>
        <el-button
          type=text
          v-for="metro in metros"
          :key="metro.name"
          :class="metro.active ? 'active' : ''"
          @click="selectBtn(metro, metros, 'metro')"
        >{{ metro.label }}</el-button>
        <div class="metro__station" v-if="data.metro && data.metro.children && data.metro.children.length > 0">
          <el-button
            type=text
            v-for="clild in data.metro.children"
            :key="clild.name"
            :class="clild.active ? 'active' : ''"
            @click="selectBtn(clild, data.metro.children, 'metro', true)"
          >{{ clild.label }}</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./metro"></script>

<style lang="scss" scoped src="./metro.scss"></style>
