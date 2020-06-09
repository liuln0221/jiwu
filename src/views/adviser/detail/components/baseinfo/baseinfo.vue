<template>
  <div class="base-info">
    <el-image :src="data.img"></el-image>
    <div class="base-info__content">
      <div class="name">
        <span>{{ data.name }}</span>
        <el-button icon="el-icon-plus">向TA咨询</el-button>
      </div>
      <div class="tags">
        <el-tag size="mini" v-for="(tag, index) in data.tags" :key="index">{{ tag.label }}</el-tag>
      </div>
      <div class="info">
        <div>
          <span class="label">熟悉区域</span>
          <span class="content">{{ data.familiarArea.join('，') }}</span>
        </div>
        <div>
          <span class="label">服务专长</span>
          <span class="content">{{ data.serviceExpertise.join(' ') }}</span>
        </div>
        <div>
          <span class="label">熟悉楼盘</span>
          <span class="content">
            <router-link
              v-for="item in data.familiarProperties"
              :key="item.id"
              :to="{ name: 'newHouseDetail', params: { id: item.id } }"
            >{{ item.name }}</router-link>
          </span>
        </div>
        <div>
          <span class="label">所属公司</span>
          <span class="content">{{ data.company }}</span>
        </div>
        <div class="personalIntroduction">
          <span class="label">个人介绍</span>
          <span class="content">{{ data.personalIntroduction }}</span>
        </div>
      </div>
      <div class="data">
        <div>
          <div class="number">{{ data.servicePersonNum }}</div>
          <div class="label">服务人数</div>
        </div>
        <div>
          <div class="number">{{ data.resSpeed }}分钟+</div>
          <div class="label">响应速度</div>
        </div>
        <div>
          <div class="number">{{ data.resRate * 100 }}%</div>
          <div class="label">回复率</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./baseinfo"></script>

<style lang="scss" scoped src="./baseinfo.scss"></style>
