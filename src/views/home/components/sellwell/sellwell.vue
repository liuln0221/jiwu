<template>
  <div class="sellwell">
    <el-card shadow="never" header="热销新盘">
      <el-row :gutter="20">
        <el-col :span="12" class="img__first">
          <router-link target="_blank" :to="{ name: 'newHouseDetail', params: { id: data[0].id } }">
            <el-image :src="data[0].imgUrl"></el-image>
          </router-link>
          <div class="img__first__name">{{ data[0].name }}</div>
          <div class="img__first__detail">
            <div class="img__first__detail__text" :title="data[0].site">{{ data[0].site }}</div>
            <div class="img__first__detail__price">{{ data[0].price }}元/平米</div>
          </div>
        </el-col>
        <el-col :span="12" class="img__more">
          <el-col :span="12" v-for="item in data.slice(1)" :key="item.name">
            <router-link target="_blank" :to="{ name: 'newHouseDetail', id: item.id }">
              <el-image :src="item.imgUrl"></el-image>
            </router-link>
            <div class="img__more__name">{{ item.name }}</div>
            <div class="img__more__detail">
              <!-- <div class="img__more__detail__name">{{ item.title }}</div> -->
              <div class="img__more__detail__text" :title="item.site">{{ item.site }}</div>
              <div class="img__more__detail__price">{{ item.price }}元/平米</div>
            </div>
          </el-col>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./sellwell"></script>

<style lang="scss" scoped src="./sellwell.scss"></style>
