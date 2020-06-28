<template>
  <div class="adviser">
    <el-image :src="data.img"></el-image>
    <div class="adviser__name">{{ data.name }}</div>
    <el-button class="adviser__consult" icon="icon-message2">向TA咨询</el-button>
    <div class="adviser__info">
      <div>
        <div class="number">{{ data.servicePersonNum }}</div>
        <div>服务人数</div>
      </div>
      <div>
        <div class="number">{{ data.resSpeed }}分钟+</div>
        <div>响应时间</div>
      </div>
      <div>
        <div class="number">{{ (data.resRate * 100).toFixed(0) }}%</div>
        <div>回复率</div>
      </div>
    </div>
    <div class="adviser__familiar">
      <div>
        <div class="label">熟悉区域</div>
        <div>{{ data.familiarArea.join('，') }}</div>
      </div>
      <div>
        <div class="label">服务专长</div>
        <div>{{ data.serviceExpertise.join('|') }}</div>
      </div>
      <div>
        <div class="label">熟悉楼盘</div>
        <div>{{ data.familiarProperties.map(item => item.name).join('，') }}</div>
      </div>
    </div>
  </div>
</template>

<script src="./adviser"></script>

<style lang="scss" scoped src="./adviser.scss"></style>
