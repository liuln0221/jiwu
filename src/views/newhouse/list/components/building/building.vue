<template>
  <div class="building">
    <el-row :gutter="10" type="flex">
      <el-col class="list__label"><span>区域</span></el-col>
      <el-col>
        <el-button
          type=text
          v-for="region in regions"
          :key="region.name"
          :class="region.active ? 'active' : ''"
          @click="selectBtn(region, regions, 'region')"
        >
        {{ region.label }}<span v-if="region.num">({{ region.num }})</span>
      </el-button>
      </el-col>
    </el-row>
    <el-row :gutter="10" type="flex">
      <el-col class="list__label"><span>均价</span></el-col>
      <el-col>
        <el-button
          type=text
          v-for="avgPrice in avgPrices"
          :key="avgPrice.name"
          :class="avgPrice.active ? 'active' : ''"
          @click="selectBtn(avgPrice, avgPrices, 'avgPrice')"
        >{{ avgPrice.label }}</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="10" type="flex">
      <el-col class="list__label"><span>筛选</span></el-col>
      <el-col>
        <div class="building__filter__checkbox">专车看房<el-checkbox v-model="data.specialCar" @change="getSelected"></el-checkbox></div>
        <el-select
          v-for="select in selectOptions"
          :key="select.name"
          size="mini"
          popper-class="building__popper"
          v-model="data[select.name]"
          value-key="name"
          :placeholder="select.label"
          @change="getSelected"
        >
          <el-option :value="undefined">全部</el-option>
          <el-option v-for="option in select.options" :key="option.name" :label="option.label" :value="option"></el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./building"></script>

<style lang="scss" scoped src="./building.scss"></style>
