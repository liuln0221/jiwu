<template>
  <div class="qa">
    <el-row :gutter="30">
      <el-col :span="18">
        <el-card shadow="never">
          <div slot="header">
            <div class="header">
              <span>有问必答</span>
              <span class="qa__desc">3分钟内，百万热心网友为您解答！</span>
            </div>
          </div>
          <!-- body -->
          <!-- 问答 -->
          <div class="qa__info" v-for="(qa, index) in qas.slice(0, 3)" :key="index">
            <div class="q">
              <div class="label">问</div>
              <div class="info">{{ qa.question }}</div>
            </div>
            <div class="a">
              <div class="label">答</div>
              <div class="info">{{ qa.answer }}</div>
            </div>
          </div>
        </el-card>
        <!-- 置业顾问 -->
        <el-card shadow="never" class="qa__adviser">
          <div slot="header">
            <div>
              <span>置业顾问</span>
              <span class="desc">向TA咨询：政策解读、房价行情、楼盘推荐…</span>
            </div>
          </div>
          <el-row :gutter="20">
            <el-col :span="12" v-for="item in sales" :key="item.id">
              <div>
                <div class="qa__adviser__info">
                  <router-link :to="{ name: 'adviserDetail', params: { id: item.id } }">
                    <el-image :src="item.headImgUrl"></el-image>
                  </router-link>
                  <div>
                    <div class="name">{{ item.name }}</div>
                    <div class="serviceNum">已服务{{ item.serviceNum }}人</div>
                  </div>
                </div>
                <el-button class="qa__adviser__consult" icon="icon-message2">向TA咨询</el-button>
              </div>
            </el-col>
          </el-row>
        </el-card>
        <!-- 问答 -->
        <div class="qa__info" v-for="(qa, index) in qas.slice(3)" :key="index">
          <div class="q">
            <div class="label">问</div>
            <div class="info">{{ qa.question }}</div>
          </div>
          <div class="a">
            <div class="label">答</div>
            <div class="info">{{ qa.answer }}</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never" header="提问"  class="qa__q">
          <el-input v-model="question" type="textarea" :rows="5" placeholder="详细描述您的问题，有利于获得更好的回答。"></el-input>
          <el-button @click="askQuestion" :disabled="!question">提交问题</el-button>
        </el-card>
        <hot-project></hot-project>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./qa"></script>

<style lang="scss" scoped src="./qa.scss"></style>
