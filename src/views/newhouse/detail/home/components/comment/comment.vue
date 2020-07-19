<template>
  <div class="comment">
    <el-card shadow="never" header="楼盘点评">
      <el-row :span="20" v-for="item in (expand ? data : data.slice(0, 2))" :key="item.evaluateId">
        <el-col :span="18">
          <span v-html="item.content"></span>
          <div class="comment__agree">
            <i class="el-icon-plus"></i>
            <span>{{ item.agreeNum }}</span>
            <span class="date">{{ item.createDate }}</span>
          </div>
        </el-col>
        <el-col :span="6" v-if="item.saleMan" class="sale-man">
          <el-image :src="item.saleMan.headImgUrl"></el-image>
          <div class="sale-man__info">
            <div class="name">
              <router-link :to="{ name: 'adviserDetail', params: { id: item.saleMan.id } }">{{ item.saleMan.name }}</router-link>
              <el-button icon="icon-message2">向TA咨询</el-button>
            </div>
            <div>
              <span class="label">自我介绍：</span>
              <span class="value">{{ item.saleMan.selfIntroduction }}</span>
            </div>
            <div>
              <span>熟悉区域：</span>
              <span class="value">{{ item.saleMan.familiarRegions }}</span>
            </div>
            <div>
              <div>服务专长：</div>
              <div class="value">{{ item.saleMan.serviceAdept }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider content-position="center" v-if="data.length > 2">
        <el-button type="text" @click="expand = !expand">
          <span v-if="!expand">展开更多评价<i class="el-icon-d-arrow-right"></i></span>
          <span v-else>收起更多评价<i class="el-icon-d-arrow-left"></i></span>
        </el-button>
      </el-divider>
      <el-divider v-else></el-divider>
    </el-card>
  </div>
</template>

<script src="./comment"></script>

<style lang="scss" scoped src="./comment.scss"></style>
