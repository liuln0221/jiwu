<template>
  <div class="base-info">
    <el-image :src="data.img"></el-image>
    <div class="base-info__content">
      <div class="name">
        <span>{{ data.name }}</span>
        <el-button icon="icon-message2">向TA咨询</el-button>
      </div>
      <div class="tags">
        <el-tag size="mini" v-for="(tag, index) in data.tags" :key="index">{{ tag.label }}</el-tag>
      </div>
      <div class="info">
        <div>
          <span class="label">熟悉区域</span>
          <span class="content" v-if="data.familiarRegionsName">{{ data.familiarRegionsName.join('，') }}</span>
        </div>
        <div>
          <span class="label">服务专长</span>
          <span class="content">{{ data.serviceAdept }}</span>
        </div>
        <div>
          <span class="label">熟悉楼盘</span>
          <span class="content">
            <router-link
              v-for="item in data.familiarProjectIds"
              :key="item.id"
              :to="{ name: 'newHouseDetail', params: { id: item.id } }"
            >{{ item.name }}</router-link>
          </span>
        </div>
        <div>
          <span class="label">所属公司</span>
          <span class="content">{{ data.companyName }}</span>
        </div>
        <div class="personalIntroduction">
          <span class="label">个人介绍</span>
          <span class="content">{{ data.selfIntroduction }}</span>
        </div>
      </div>
      <div class="data">
        <div>
          <div class="number">
            <span v-if="data.serviceNum || data.serviceNum === 0">{{ data.serviceNum }}</span>
            <span v-else>-</span>
          </div>
          <div class="label">服务人数</div>
        </div>
        <div>
          <div class="number">
            <span v-if="data.replySpeed || data.replySpeed === 0">
              <span v-if="data.replySpeed >= 1">{{ data.replySpeed }}分钟+</span>
              <span v-else>{{ data.replySpeed }}分钟-</span>
            </span>
            <span v-else>-</span>
          </div>
          <div class="label">响应速度</div>
        </div>
        <div>
          <div class="number">
            <span v-if="data.replyRate || data.replyRate === 0">{{ (data.replyRate * 100).toFixed(0) }}%</span>
            <span v-else>-</span>
          </div>
          <div class="label">回复率</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./baseinfo"></script>

<style lang="scss" scoped src="./baseinfo.scss"></style>
