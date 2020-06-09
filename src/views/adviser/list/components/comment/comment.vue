<template>
  <div class="comment">
    <el-card shadow="never" header="最新楼盘点评">
      <div class="comment__item" v-for="item in data" :key="item.id">
        <div class="comment__item__info">
          <el-image :src="item.img"></el-image>
          <div class="info">
            <div class="name">{{ item.name }}</div>
            <div>
              <span class="label">点评楼盘</span>
              <span>{{ item.commentFloor }}</span>
            </div>
            <div>
              <span class="label">点评时间</span>
              <span>{{ item.commentTime | dateStrToFormat('YYYY-MM-DD') }}</span>
            </div>
          </div>
        </div>
        <div class="comment__item__article">
          <span v-if="!item.showAll">{{ item.commentArticle.substring(0, 110) }}</span>
          <span v-else>{{ item.commentArticle }}</span>
          <span v-if="item.commentArticle.length > 110 && !item.showAll">...</span>
          <el-button v-if="item.commentArticle.length > 110" type="text" @click="item.showAll = !item.showAll">
            <span v-if="!item.showAll">阅读全文</span>
            <span v-else>收起</span>
            <i class="el-icon-arrow-right"></i>
          </el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script src="./comment"></script>

<style lang="scss" scoped src="./comment.scss"></style>
