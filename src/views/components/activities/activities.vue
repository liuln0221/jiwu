<template>
  <div class="activities">
    <el-card shadow="never" :header="`${data.name}热门活动`">
      <div
        class="activities__item"
        v-for="(item, index) in activities"
        :key="index"
        :style="{ background: item.backColor }"
      >
        <div>
          <span class="name">{{ item.name }}</span>
          <el-button :style="{ background: item.btnColor }" @click="acticityRegister(item)">{{ item.buttonName }}</el-button>
        </div>
        <div>
          <span>{{ item.content }}</span>
          <!-- <span class="count">{{ item.count }}人已报名</span> -->
        </div>
      </div>
    </el-card>
  </div>
</template>

<script src="./activities"></script>

<style lang="scss" scoped src="./activities.scss"></style>
