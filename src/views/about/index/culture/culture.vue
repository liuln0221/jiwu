<template>
  <div class="culture">
    <el-card shadow="never" header="企业文化">
      <div
        :class="index % 2 === 0 ? 'culture__item' : 'custure__item--reverse'"
        v-for="(item, index) in data"
        :key="item.id"
      >
        <div class="culture__item__info">
          <div class="name"><span>{{ item.name }}</span></div>
          <div class="desc">
            <div v-for="(desc, dIndex) in item.description" :key="dIndex">{{ desc }}</div>
          </div>
        </div>
        <i :class="`culture__item__i_${index}`"></i>
      </div>
    </el-card>
  </div>
</template>

<script src="./culture"></script>

<style lang="scss" scoped src="./culture.scss"></style>
