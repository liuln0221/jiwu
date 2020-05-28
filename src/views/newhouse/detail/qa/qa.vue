<template>
  <div class="qa">
    <el-card shadow="never">
      <div slot="header">
        <div class="header">
          <span>有问必答</span>
          <span class="qa__desc">3分钟内，百万热心网友为您解答！</span>
        </div>
      </div>
      <!-- body -->
      <div v-for="(qa, index) in qas" :key="index">
        <div class="q">
          <div class="label">问</div>
          <div class="info">{{ qa.q }}</div>
        </div>
        <div class="a">
          <div class="label">答</div>
          <div class="info">{{ qa.a }}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script src="./qa"></script>

<style lang="scss" scoped src="./qa.scss"></style>
