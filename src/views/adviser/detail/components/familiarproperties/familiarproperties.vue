<template>
  <div class="familiar-properties">
    <el-card shadow="never" header="我熟悉的楼盘">
      <div v-for="item in data" :key="item.id">
        <div class="familiar-properties__content">
          <div class="familiar-properties__image">
            <router-link
                tag="a"
                target="_blank"
                :to="{ name: 'newHouseDetail', params: {id: item.id} }"
              >
              <el-image :src="item.src"></el-image>
            </router-link>
          </div>
          <div class="familiar-properties__info">
            <div class="familiar-properties__info__name-price">
              <router-link
                tag="a"
                target="_blank"
                :to="{ name: 'newHouseDetail', params: {id: item.id} }"
              >
                <span class="familiar-properties__info__name">{{ item.name }}</span>
                <span class="familiar-properties__info__preferential">
                  <i>惠</i><span>买房要趁早，点击领取专属优惠</span>
                </span>
              </router-link>
              <span class="familiar-properties__info__price">{{ item.price }}元/平米</span>
            </div>
            <div class="familiar-properties__info__local">
              <span>{{ item.local }}</span>
              <span class="followed">{{ item.followedNum }}人已关注</span>
            </div>
            <div class="familiar-properties__info__tel">
              <span><i class="el-icon-phone"></i>{{ item.tel.number }}<span class="familiar-properties__info__tel__relay">转</span>{{ item.tel.relay }}</span>
            </div>
            <div class="familiar-properties__info__tag">
              <el-tag size="small" v-for="tag in item.tags" :key="tag.name">{{ tag.label }}</el-tag>
            </div>
          </div>
        </div>
        <div class="familiar-properties__reason" v-if="item.reason">
          <div class="label">推荐理由</div>
          <div class="content">{{ item.reason }}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script src="./familiarproperties"></script>

<style lang="scss" scoped src="./familiarproperties.scss"></style>
