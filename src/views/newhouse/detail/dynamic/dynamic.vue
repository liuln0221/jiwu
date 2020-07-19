<template>
  <div class="dynamic">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-card shadow="never">
          <div slot="header">
            <div class="header">
              <span>{{ data.name }}动态</span>
              <el-button type="text" class="dynamic__disclaimer">《免责声明》</el-button
              >
              <el-button size="mini" class="icon-notice dynamic__notice">新动态通知我</el-button>
            </div>
          </div>
          <div
            class="newHouse-detail__dynamic"
            v-for="item in informations"
            :key="item.id"
          >
            <div class="title">
              <router-link
                :to="{ name: 'newHouseDetailDynamicDetail', params: { informationId: item.id } }"
                target="_blank"
              >{{ item.title }}</router-link>
              <div>{{ item.issueTime | dateStrToFormat('YYYY-MM-DD') }}</div>
            </div>
            <div class="info">
              <router-link
                :to="{ name: 'newHouseDetailDynamicDetail', params: { informationId: item.id } }" 
                target="_blank"
                v-html="item.content"
              ></router-link>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <activities></activities>
        <hot-project></hot-project>
      </el-col>
    </el-row>
    <!-- 免责声明 -->
    <disclaimer></disclaimer>
    <!-- 扩展 -->
    <!-- <expand :data="data"></expand> -->
  </div>
</template>

<script src="./dynamic"></script>

<style lang="scss" scoped src="./dynamic.scss"></style>
