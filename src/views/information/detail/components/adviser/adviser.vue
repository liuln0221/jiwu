<template>
  <div class="adviser">
    <el-card shadow="never">
      <div slot="header">
        <div>置业管家<span>向TA咨询：政策解读、房价行情、楼盘推荐…</span></div>
      </div>
      <el-row :gutter="20">
        <el-col :span="12" v-for="adviser in advisers" :key="adviser.id">
          <div class="adviser__item">
            <div class="adviser__item__info">
              <el-image :src="adviser.img"></el-image>
              <div>
                <div class="name">{{ adviser.name }}</div>
                <div class="num">已服务{{ adviser.servicePersonNum }}人</div>
              </div>
            </div>
            <el-button icon="el-icon-plus">向TA咨询</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./adviser"></script>

<style lang="scss" scoped src="./adviser.scss"></style>
