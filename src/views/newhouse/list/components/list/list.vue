<template>
  <div class="list">
    <div v-for="item in data" :key="item.id">
      <div class="list__content">
        <div class="list__image">
          <router-link
              tag="a"
              target="_blank"
              :to="{ name: 'newHouseDetail', params: {id: item.id} }"
            >
            <el-image :src="item.src"></el-image>
          </router-link>
        </div>
        <div class="list__info">
          <div class="list__info__name-price">
            <router-link
              tag="a"
              target="_blank"
              :to="{ name: 'newHouseDetail', params: {id: item.id} }"
            >
              <span class="list__info__name">{{ item.name }}</span>
              <span class="list__info__preferential">
                <i>惠</i><span>24小时线上咨询 立享优惠</span>
              </span>
            </router-link>
            <span class="list__info__price">{{ item.price }}元/平米</span>
          </div>
          <div class="list__info__local">
            <span>{{ item.local }}</span>
            <el-button type="text" icon="el-icon-plus">关注楼盘</el-button>
          </div>
          <div class="list__info__tel">
            <span><i class="el-icon-phone"></i>{{ item.tel.number }}<span class="list__info__tel__relay">转</span>{{ item.tel.relay }}</span>
          </div>
          <div class="list__info__tag">
            <el-tag size="small" v-for="tag in item.tags" :key="tag.name">{{ tag.label }}</el-tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./list"></script>

<style lang="scss" scoped src="./list.scss"></style>
