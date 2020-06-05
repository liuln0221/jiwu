<template>
  <div class="list">
    <div v-for="item in data" :key="item.id">
      <div class="list__content">
        <div class="list__image">
          <router-link
              tag="a"
              target="_blank"
              :to="{ name: 'oldHouseDetail', params: {id: item.id} }"
            >
            <el-image :src="item.src"></el-image>
          </router-link>
        </div>
        <div class="list__info">
          <div class="list__info__name-price">
            <router-link
              tag="a"
              target="_blank"
              :to="{ name: 'oldHouseDetail', params: {id: item.id} }"
            >
              <span class="list__info__name">{{ item.name }}</span>
            </router-link>
            <span class="list__info__price">{{ item.price }}万</span>
          </div>
          <div class="list__info__local">
            <div>
              <span>{{ item.local }}</span>
              <span>{{ item.houseType }}</span>
              <span>{{ item.area }}平米</span>
            </div>
            <span class="list__info__unit-price">{{ item.unitPrice }}元/平米</span>
          </div>
          <div class="list__info__address">
            <span>{{ item.address }}</span>
            <span>查看周边地图</span>
          </div>
          <div class="list__info__tag-time">
            <span class="tag" v-if="item.tags && item.tags.length > 0"><el-tag size="small" v-for="tag in item.tags" :key="tag.name">{{ tag.label }}</el-tag></span>
            <span class="time">{{ item.updateTime | dateStrToFormat('YYYY-MM-DD') }}更新</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./list"></script>

<style lang="scss" scoped src="./list.scss"></style>
