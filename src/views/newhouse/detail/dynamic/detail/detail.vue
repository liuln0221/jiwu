<template>
  <div class="dynamic-detail">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-card shadow="never">
          <div slot="header">
            <div>
              <div>{{ information.title }}</div>
              <div class="dynamic-detail__source">
                来源：<span>{{ information.author }}</span>
                <span>{{ information.issueTime | dateStrToFormat('YYYY-MM-DD') }}</span>
              </div>
            </div>
          </div>
          <div class="dynamic-detail__content" v-html="information.content"></div>
          <div class="dynamic-detail__tel">咨询楼盘优惠：<span>{{ data.sellPhone }}</span></div>
          <!-- 最新动态 -->
          <div class="newHouse-detail__dynamic" v-if="newInformation">
            <div class="title">
              <router-link
                :to="{ name: 'newHouseDetailDynamicDetail', params: { informationId: newInformation.id } }"
                target="_blank"
              >[最新动态]{{ newInformation.title }}</router-link>
              <div>{{ newInformation.issueTime | dateStrToFormat('YYYY-MM-DD') }}</div>
            </div>
            <div class="info">
              <router-link
                :to="{ name: 'newHouseDetailDynamicDetail', params: { informationId: newInformation.id } }" 
                target="_blank"
                v-html="newInformation.content"
              ></router-link>
            </div>
          </div>
          <!-- 上一篇动态 -->
          <div class="newHouse-detail__dynamic" v-if="prevInformation">
            <div class="title">
              <router-link
                :to="{ name: 'newHouseDetailDynamicDetail', params: { informationId: prevInformation.id } }"
                target="_blank"
              >[上一篇动态]{{ prevInformation.title }}</router-link>
              <div>{{ prevInformation.issueTime | dateStrToFormat('YYYY-MM-DD') }}</div>
            </div>
            <div class="info">
              <router-link
                :to="{ name: 'newHouseDetailDynamicDetail', params: { informationId: prevInformation.id } }" 
                target="_blank"
                v-html="prevInformation.content"
              ></router-link>
            </div>
          </div>
          <!-- 下一篇动态 -->
          <div class="newHouse-detail__dynamic" v-if="nextInformation">
            <div class="title">
              <router-link
                :to="{ name: 'newHouseDetailDynamicDetail', params: { informationId: nextInformation.id } }"
                target="_blank"
              >[下一篇动态]{{ nextInformation.title }}</router-link>
              <div>{{ nextInformation.issueTime | dateStrToFormat('YYYY-MM-DD') }}</div>
            </div>
            <div class="info">
              <router-link
                :to="{ name: 'newHouseDetailDynamicDetail', params: { informationId: nextInformation.id } }" 
                target="_blank"
                v-html="nextInformation.content"
              ></router-link>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <hot-project></hot-project>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./detail"></script>

<style lang="scss" scoped src="./detail.scss"></style>
