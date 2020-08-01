<template>
  <div class="adviser">
    <el-card shadow="never">
      <div slot="header">
        <div>
          <span>置业顾问</span>
          <span class="adviser__consult">向TA咨询：政策解读、房价行情、楼盘推荐…</span>
        </div>
      </div>
      <el-row :gutter="20">
        <el-col :span="12" v-for="item in data" :key="item.id">
          <div>
            <div class="adviser__item">
              <router-link :to="{ name: 'adviserDetail', params: { id: item.id } }">
                <el-image :src="item.headImgUrl"></el-image>
              </router-link>
              <div>
                <div>
                  <router-link :to="{ name: 'adviserDetail', params: { id: item.id } }" class="name">{{ item.name }}</router-link>
                  <span class="label" v-for="(label, index) in item.labels" :key="index">{{ label }}</span>
                </div>
                <div>服务人数：<span class="service-num">{{ item.serviceNum }}人</span></div>
              </div>
            </div>
            <el-button>向TA咨询</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./adviser"></script>

<style lang="scss" scoped src="./adviser.scss"></style>
