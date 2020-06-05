<template>
  <div class="adviser">
    <el-card shadow="never" header="你的购房服务专家——置业顾问">
      <el-row :gutter="20">
        <el-col
          :span="3"
          v-for="adviser in advisers"
          :key="adviser.id"
        >
          <div class="adviser__item">
            <el-image :src="adviser.img"></el-image>
            <div class="adviser__content">
              <el-link class="adviser__name" :underline="false">{{ adviser.name }}</el-link>
              <div class="adviser__consulte"><i class="el-icon-plus"></i>向TA咨询</div>
              <div class="adviser__text">响应速度：{{ adviser.resSpeed }}分钟+</div>
              <div class="adviser__text">回复速度：{{ (adviser.resRate * 100).toFixed(0) }}%</div>
              <div class="adviser__text">服务人数：{{ adviser.servicePersonNum }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./adviser"></script>

<style lang="scss" scoped src="./adviser.scss"></style>
