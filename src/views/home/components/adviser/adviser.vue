<template>
  <div class="adviser">
    <el-card class="box-card" shadow="never" header="你的购房服务专家——置业顾问">
      <el-row :gutter="20">
        <el-col
          :span="3"
          v-for="adviser in advisers"
          :key="adviser.id"
        >
          <img :src="adviser.img" />
          <div class="adviser__name">{{ adviser.name }}</div>
          <div class="adviser__consulte">向TA咨询</div>
          <div class="adviser__text">响应速度：{{ adviser.resSpeed }}分钟+</div>
          <div class="adviser__text">回复速度：{{ (adviser.resRate * 100).toFixed(0) }}%</div>
          <div class="adviser__text">服务人数：{{ adviser.ServicePersonNum }}</div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./adviser"></script>

<style lang="scss" scoped src="./adviser.scss"></style>
