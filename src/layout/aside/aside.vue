<template>
  <div class="aside">
    <div class="aside__menu">
      <el-popover
        v-for="(aside, index) in asides"
        :key="index"
        placement="left"
        width="127"
        trigger="hover"
        popper-class="aside__popper"
        :close-delay="0">
        <div slot>
          <router-link v-if="aside.routerTo" :to="aside.routerTo" target="_blank">{{ aside.content }}</router-link>
          <span v-else>{{ aside.content }}</span>
        </div>
        <div slot="reference">
          <router-link v-if="aside.routerTo" :to="aside.routerTo" target="_blank">
            <i :class="aside.icon"></i>
          </router-link>
          <i v-else :class="aside.icon"></i>
        </div>
      </el-popover>
    </div>
    <div class="aside__top">
      <el-backtop :bottom="10" :right="0" :visibility-height="-1">
        <el-popover
          placement="left"
          width="127"
          trigger="hover"
          popper-class="aside__popper"
          :close-delay="0"
          content="返回顶部">
          <div slot="reference"><i class="aside__top__icon"></i></div>
        </el-popover>
      </el-backtop>
    </div>
  </div>
</template>

<script src="./aside"></script>

<style lang="scss" scoped src="./aside.scss"></style>