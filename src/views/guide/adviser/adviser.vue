<template>
  <div class="adviser">
    <el-image :src="data.headImgUrl"></el-image>
    <div class="adviser__name">{{ data.name }}</div>
    <el-button class="adviser__consult" icon="icon-message2" @click="consultRegister">向TA咨询</el-button>
    <div class="adviser__info">
      <div>
        <div class="number">
          <span v-if="data.serviceNum">{{ data.serviceNum }}</span>
          <span v-else>-</span>
        </div>
        <div>服务人数</div>
      </div>
      <div>
        <div class="number">
          <span v-if="data.replySpeed">{{ data.replySpeed }}分钟+</span>
          <span v-else>-</span>
        </div>
        <div>响应时间</div>
      </div>
      <div>
        <div class="number">
          <span v-if="data.replyRate">{{ (data.replyRate * 100).toFixed(0) }}%</span>
          <span v-else>-</span>
        </div>
        <div>回复率</div>
      </div>
    </div>
    <div class="adviser__familiar">
      <div>
        <div class="label">熟悉区域</div>
        <div v-if="data.familiarRegionsName" :title="data.familiarRegionsName.join('，')">{{ data.familiarRegionsName.join('，') }}</div>
      </div>
      <div>
        <div class="label">服务专长</div>
        <div>{{ data.serviceAdept }}</div>
      </div>
      <div>
        <div class="label">熟悉楼盘</div>
        <div v-if="data.familiarProjectIds">
          <router-link
            target="_blank"
            :to="{ name: 'newHouseDetail', params: { id: i.id } }"
            v-for="i in data.familiarProjectIds"
            :key="i.id"
          >{{ i.name }}</router-link>
        </div>
        <div v-else>-</div>
      </div>
    </div>
  </div>
</template>

<script src="./adviser"></script>

<style lang="scss" scoped src="./adviser.scss"></style>
