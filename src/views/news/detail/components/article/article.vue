<template>
  <div class="article">
    <el-card :header="data.title" shadow="never">
      <div class="article__release-time">发布时间：{{ data.issueTime | dateStrToFormat('YYYY-MM-DD') }}</div>
      <el-button class="article__consultate">在线咨询贷款买房政策</el-button>
      <div class="article__content" v-html="data.content"></div>
    </el-card>
  </div>
</template>

<script src="./article"></script>

<style lang="scss" scoped src="./article.scss"></style>
