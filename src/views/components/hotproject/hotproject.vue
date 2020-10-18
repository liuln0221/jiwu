<template>
  <div class="hot-project">
    <el-card shadow="never">
      <div slot="header">
        <div>热销新盘</div>
        <router-link :to="{ name: 'newHouse' }">
          <el-button type="text">更多<i class="el-icon-arrow-right"></i></el-button>
        </router-link>
      </div>
      <div v-for="item in data" :key="item.id">
        <router-link :to="{ name: 'newHouseDetail', params: { id: item.id } }" target="_blank">
          <el-image class="hot-project__img" :src="item.showImgPath"></el-image>
          <div>
            <div class="hot-project__name">{{ item.name }}</div>
            <div class="hot-project__local">[{{ location.name }}]{{ item.site }}</div>
          </div>
        </router-link>
        <div class="hot-project__adviser" v-if="item.salesList && item.salesList.length > 0">
          <el-image class="adviser__img" :src="item.salesList[0].headImgUrl"></el-image>
          <el-button class="adviser__consult" icon="icon-message2" @click="consultRegister(item.id, item.salesList[0].id)">向TA咨询</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script src="./hotproject"></script>

<style lang="scss" scoped src="./hotproject.scss"></style>
