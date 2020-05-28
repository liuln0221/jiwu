<template>
  <div class="hot-qa">
    <el-card header="热门问答" shadow="never">
      <router-link
        v-for="item in data"
        :key="item.id"
        :to="{}"
        class="hot-qa__content"
      ><i class="el-icon-caret-right"></i>{{ item.q }}</router-link>
    </el-card>
  </div>
</template>

<script src="./hotqa"></script>

<style lang="scss" scoped src="./hotqa.scss"></style>
