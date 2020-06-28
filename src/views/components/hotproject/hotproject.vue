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
          <!-- <el-image class="hot-project__img" :src="item.img" src="http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360"></el-image> -->
          <el-image class="hot-project__img" src="http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360"></el-image>
          <div class="hot-project__local">[{{ location.name }}]{{ item.site }}</div>
        </router-link>
        <div class="hot-project__adviser">
          <el-image class="adviser__img" :src="item.adviser && item.adviser.img"></el-image>
          <el-button class="adviser__consult" icon="icon-message2">向TA咨询</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script src="./hotproject"></script>

<style lang="scss" scoped src="./hotproject.scss"></style>
