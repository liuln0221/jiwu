<template>
  <div class="hot-list">
    <el-card header="7×24小时热文榜" shadow="never">
      <router-link
        v-for="item in data"
        :key="item.id"
        :to="{}"
        class="hot-list__content line-clamp"
      >{{ item.content }}</router-link>
    </el-card>
  </div>
</template>

<script src="./hotlist"></script>

<style lang="scss" scoped src="./hotlist.scss"></style>
