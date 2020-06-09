<template>
  <div class="dynamic">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-card shadow="never">
          <div slot="header">
            <div class="header">
              <span>{{ data.name }}动态</span>
              <el-button type="text" class="dynamic__disclaimer">《免责声明》</el-button
              >
              <el-button size="mini" class="icon-notice dynamic__notice">新动态通知我</el-button>
            </div>
          </div>
          <div class="newHouse-detail__dynamic">
            <div class="title">
              <el-link :underline="false">梵悦108，国贸CBD精装现房在售，在售均价约10万元/平</el-link>
              <div>{{ data.updateTime | dateStrToFormat('YYYY-MM-DD') }}</div>
            </div>
            <div class="info">
              <el-link :underline="false">梵悦108位于北京市朝阳区建国路乙108号，在售住宅产品，70年产权。梵悦108，目前在售户型建筑面积为94平米-257.12平米，均价约10万元/平，总价1200万元/套起，精装修现房，物业费30元/平方米.月。 梵悦108项目位于国贸桥，国贸CBD最核心的黄金十字角，眼望...</el-link>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <!-- 扩展 -->
    <expand :data="data"></expand>
  </div>
</template>

<script src="./dynamic"></script>

<style lang="scss" scoped src="./dynamic.scss"></style>
