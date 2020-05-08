<template>
  <div class="knowledgebase">
    <el-card shadow="never">
      <div slot="header">
        <span>知识库</span>
        <el-button type="text">更多<i class="el-icon-arrow-right"></i></el-button>
      </div>
    </el-card>
    <el-row :gutter="20">
      <el-col
        :span="6"
        v-for="(knowledge) in knowledges"
        :key="knowledge.title"
      >
        <el-container :style="{ height: knowledge.expand ? '414px' : '' }">
          <el-header>{{ knowledge.title }}</el-header>
          <el-main>
            <div class="knowledgebase__main">
              <el-button
                type="text"
                v-for="item in knowledge.values"
                :key="item.name"
              >{{ item.label }}</el-button>
            </div>
          </el-main>
          <el-footer v-if="knowledge.isExpand">
            <el-button type="text" @click="click(knowledge)">
              <span v-if="knowledge.expand">收起<i class="el-icon-arrow-up"></i></span>
              <span v-else>展开<i class="el-icon-arrow-down"></i></span>
            </el-button>
          </el-footer>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./knowledgebase"></script>

<style lang="scss" scoped src="./knowledgebase.scss"></style>
