<template>
  <div class="adviser" v-if="advisers.length > 0">
    <el-card shadow="never" header="你的购房服务专家——置业顾问">
      <el-row :gutter="20">
        <el-col
          :span="3"
          v-for="adviser in advisers"
          :key="adviser.id"
        >
          <div class="adviser__item">
            <router-link :to="{ name: 'adviserDetail', params: { id: adviser.id } }">
              <el-image :src="adviser.headImgUrl"></el-image>
            </router-link>
            <div class="adviser__content">
              <router-link class="adviser__name" :to="{ name: 'adviserDetail', params: { id: adviser.id } }">{{ adviser.name }}</router-link>
              <el-button class="adviser__consulte" icon="icon-message2" @click="consultRegister(adviser.id)">向TA咨询</el-button>
              <div class="adviser__text">响应速度：
                <span v-if="adviser.resSpeed">{{ adviser.resSpeed }}分钟+</span>
                <span v-else>-</span>
              </div>
              <div class="adviser__text">回复速度：
                <span v-if="adviser.resRate">{{ (adviser.resRate * 100).toFixed(0) }}%</span>
                <span v-else>-</span>
              </div>
              <div class="adviser__text">服务人数：
                <span v-if="adviser.servicePersonNum">{{ adviser.servicePersonNum }}</span>
                <span v-else>-</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./adviser"></script>

<style lang="scss" scoped src="./adviser.scss"></style>
