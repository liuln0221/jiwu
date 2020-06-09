<template>
  <div class="dynamic">
    <el-row :gutter="20" class="home__dynamic">
      <el-col :span="18">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span class="header">
              <el-link :underline="false">最新动态</el-link>
              <el-button size="mini" class="icon-notice">新动态通知我</el-button>
            </span>
            <el-button type="text">{{ data.name }}动态<i class="el-icon-arrow-right"></i></el-button>
          </div>
          <div class="newHouse-detail__dynamic">
            <div class="title">
              <el-link :underline="false">梵悦108，国贸CBD精装现房在售，在售均价约10万元/平</el-link>
              <div>{{ data.updateTime | dateStrToFormat('YYYY-MM-DD') }}</div>
            </div>
            <div class="info">
              <el-link :underline="false">梵悦108位于北京市朝阳区建国路乙108号，在售住宅产品，70年产权。梵悦108，目前在售户型建筑面积为94平米-257.12平米，均价约10万元/平，总价1200万元/套起，精装修现房，物业费30元/平方米.月。 梵悦108项目位于国贸桥，国贸CBD最核心的黄金十字角，眼望...<el-button type="text">阅读全文 ></el-button></el-link>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="home__information" header="咨询"  shadow="never">
          <div v-for="(information, index) in informations" :key="index">
            <el-link :underline="false"><i class="el-icon-caret-right"></i>{{ information.label }}</el-link>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./dynamic"></script>

<style lang="scss" scoped src="./dynamic.scss"></style>