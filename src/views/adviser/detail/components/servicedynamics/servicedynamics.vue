<template>
  <div class="service-dynamics">
    <el-card shadow="never" :header="`服务动态（${data.length}）`">
      <el-scrollbar>
        <el-timeline>
          <el-timeline-item
            icon="el-icon-time"
            v-for="item in data"
            :key="item.id"
            :timestamp="item.time | dateStrToFormat('MM-DD')"
            placement="top">
            <span v-for="(content, index) in item.contents" :key="index">{{ content }}</span>
          </el-timeline-item>
        </el-timeline>
      </el-scrollbar>
    </el-card>
  </div>
</template>

<script src="./servicedynamics"></script>

<style lang="scss" scoped src="./servicedynamics.scss"></style>
