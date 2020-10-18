<template>
  <div class="contact">
    <el-card shadow="never" header="联系我们">
      <div class="contact__info">
        <div class="contact__info__title">严选好房网（总部）</div>
          <div class="contact__info__tel">
            <span class="label"><span>电话</span></span>
            <span>{{ data.tel }}</span>
          </div>
          <div class="contact__info__net">
            <span class="label"><span>网址</span></span>
            <span>{{ data.net }}</span>
          </div>
          <div class="contact__info__local">
            <span class="label"><span>地址</span></span>
            <span>{{ data.local }}</span>
          </div>
      </div>
      <!-- <el-row :gutter="20">
        <el-col :span="8" v-for="item in data.info" :key="item.id">
          <i :class="item.icon"></i>
          <div>
            <div class="title">{{ item.title }}</div>
            <div v-if="item.hotline">
              <span class="label">服务热线</span>{{ item.hotline }}
            </div>
            <div v-if="item.detail">
              <span class="label">了解详情</span>
              <router-link :to="{}">{{ item.detail }}</router-link>
            </div>
            <div v-if="item.contacts">
              <span class="label">联系人</span> {{ item.contacts }}
            </div>
            <div v-if="item.email">
              <span class="label"><span>邮箱</span></span> {{ item.email }}
            </div>
            <div v-if="item.qq">
              <span class="label"><span>Q Q</span></span> {{ item.qq }}
            </div>
          </div>
        </el-col>
      </el-row> -->
    </el-card>
  </div>
</template>

<script src="./contact"></script>

<style lang="scss" scoped src="./contact.scss"></style>
