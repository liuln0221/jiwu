<template>
  <div class="content" ref="content">
    <el-card
      shadow="never"
      v-for="item in data"
      :key="item.name"
      :header="item.label"
      :id="item.name"
    >
      <el-row v-for="(contents, index) in item.contents" :key="index">
        <el-col
          :span="12"
          v-for="content in contents"
          :key="content.title"
        >
          <div class="title">{{ content.title }}</div>
          <div class="data">
            <router-link
              v-for="link in content.links"
              :key="link.id"
              :to="{ name: 'newsDetail', params: { id: link.id } }"
            >{{ link.label }}</router-link>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script src="./content"></script>

<style lang="scss" scoped src="./content.scss"></style>
