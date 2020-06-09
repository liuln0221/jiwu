<template>
  <div class="list">
    <div class="list__item" v-for="item in data" :key="item.id">
      <router-link :to="{ name: 'adviserDetail', params: { id: item.id } }">
        <el-image :src="item.img"></el-image>
      </router-link>
      <div class="list__item__info">
        <div class="name">
          <router-link :to="{ name: 'adviserDetail', params: { id: item.id } }">{{ item.name }}</router-link>
          <!-- <i class="el-icon-plus"></i> -->
          <el-button icon="el-icon-plus">在线咨询</el-button>
        </div>
        <div>
          <div class="label">熟悉区域</div>
          <div :title="item.familiarArea.join('，')">{{ item.familiarArea.join('，') }}</div>
        </div>
        <div>
          <div class="label">服务专长</div>
          <div :title="item.serviceExpertise.join('，')">{{ item.serviceExpertise.join('，') }}</div>
        </div>
        <div class="familiarProperties">
          <div class="label">熟悉楼盘</div>
          <div>
            <router-link
              target="_blank"
              :to="{ name: 'newHouseDetail', params: { id: i.id } }"
              v-for="i in item.familiarProperties"
              :key="i.id"
            >{{ i.name }}</router-link>
          </div>
        </div>
        <div>
          <div class="label">所属公司</div>
          <div>{{ item.company }}</div>
        </div>
      </div>
      <div class="list__item__data">
        <div>
          <div class="num">{{ item.resRate * 100 }}%</div>
          <div class="label">回复率</div>
        </div>
        <div>
          <div class="num">{{ item.servicePersonNum }}</div>
          <div class="label">服务人数</div>
        </div>
        <div>
          <div><span class="num">{{ item.resSpeed }}分钟</span>+</div>
          <div class="label">响应速度</div>
        </div>
      </div>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="data.length">
    </el-pagination>
  </div>
</template>

<script src="./list"></script>

<style lang="scss" scoped src="./list.scss"></style>
