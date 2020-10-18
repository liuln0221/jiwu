<template>
  <div class="adviser">
    <el-card shadow="never">
      <div slot="header">
        <div>置业顾问<span>向TA咨询：政策解读、房价行情、楼盘推荐…</span></div>
      </div>
      <el-row :gutter="20">
        <el-col :span="12" v-for="item in data" :key="item.id">
          <div class="adviser__item">
            <div class="adviser__item__info">
              <el-image :src="item.headImgUrl"></el-image>
              <div>
                <div class="name">{{ item.name }}</div>
                <div class="num">已服务{{ item.serviceNum }}人</div>
              </div>
            </div>
            <el-button icon="icon-message2" @click="consultRegister(item.id)">向TA咨询</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./adviser"></script>

<style lang="scss" scoped src="./adviser.scss"></style>
