<template>
  <div class="list">
    <div class="current-local">
      <span>您的位置：</span>
      <router-link :to="{ name: 'home' }">吉屋</router-link>
      <router-link :to="{ name: 'oldHouse' }">{{ location.name }}二手房</router-link>
    </div>
    <!-- 筛选 -->
    <div class="list__filter">
      <!-- 选项 -->
      <div class="list__filter__onselect">
        <div
          class="list__filter__item"
          v-for="item in filters"
          :key="item.id"
          :style="`display: ${item.hide ? 'none' : ''}`"
        >
          <div class="label">{{ item.label }}</div>
          <div>
            <el-button
              type=text
              v-for="option in item.options"
              :key="option.name"
              :class="option.active ? 'active' : ''"
              @click="selectBtn(option, item.options, item.name)"
            >{{ option.label }}</el-button>
          </div>
        </div>
        <div class="list__filter__expand">
          <el-button type="text" @click="filterExpand">
            <span v-if="filtersExpand">收起选项<i class="el-icon-arrow-up"></i></span>
            <span v-else>展开选项<i class="el-icon-arrow-down"></i></span>
          </el-button>
        </div>
      </div>
      <!-- 已选 -->
      <div class="list__filter__selected" v-if="selected.length > 0">
        <div class="label">已选</div>
        <div>
          <el-button
            plain
            v-for="select in selected"
            :key="select.name"
            @click="resetBtn(select)"
          >
            <span>{{ select.value.label }}</span>
            <span v-if="select.value.child"> - {{select.value.child.label}}</span>
            <i class="el-icon-close"></i>
          </el-button>
          <el-button type="text" class="clear" icon="el-icon-delete" @click="clear">清空</el-button>
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <el-row :gutter="20" type="flex">
      <el-col :span="18">
        <div class="list__all">
          <el-button @click="clear">全部房源</el-button>
        </div>
        <div class="list__sort">
          <div class="list__sort__total">共有<span>{{ store.length }}</span>套房源满足条件</div>
          <div class="list__sort__operate">
            <el-button type="text" @click="defaultSort">默认排序</el-button>
            <el-button type="text" @click="releaseSort">发布
              <i class="el-icon-sort-up" v-if="sort.release === 'desc'"></i>
              <i class="el-icon-sort-down" v-else-if="sort.release === 'asc'"></i>
              <i class="el-icon-sort" v-else></i>
            </el-button>
            <el-button type="text" @click="priceSort">总价
              <i class="el-icon-sort-up" v-if="sort.price === 'desc'"></i>
              <i class="el-icon-sort-down" v-else-if="sort.price === 'asc'"></i>
              <i class="el-icon-sort" v-else></i>
            </el-button>
            <el-button type="text" @click="areaSort">面积
              <i class="el-icon-sort-up" v-if="sort.area === 'desc'"></i>
              <i class="el-icon-sort-down" v-else-if="sort.area === 'asc'"></i>
              <i class="el-icon-sort" v-else></i>
            </el-button>
          </div>
        </div>
        <div class="list__content">
          <list :data="store"></list>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="store.length">
          </el-pagination>
        </div>
      </el-col>
      <el-col :span="6">
        <!-- 精选房源 -->
        <selected :data="store"></selected>
        <!-- 房价走势 -->
        <price-trend></price-trend>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./list"></script>

<style lang="scss" scoped src="./list.scss"></style>
