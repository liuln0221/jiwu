<template>
  <div class="map-traffic">
    <!-- 地图 -->
    <el-row :gutter="20">
      <el-col :span="18"></el-col>
      <el-col :span="6">
        <el-tabs v-model="activeName" stretch>
          <el-tab-pane label="商业" name="business">
            <record v-if="activeName === 'business'" :data="activeName"></record>
          </el-tab-pane>
          <el-tab-pane label="交通" name="traffic">
            <record v-if="activeName === 'traffic'" :data="activeName"></record>
          </el-tab-pane>
          <el-tab-pane label="教育" name="education">
            <record v-if="activeName === 'education'" :data="activeName"></record>
          </el-tab-pane>
          <el-tab-pane label="医疗" name="medicalCare">
            <record v-if="activeName === 'medicalCare'" :data="activeName"></record>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <!-- 详细地址 -->
    <el-card header="详细地址" shadow="never">
      <div>楼盘地址：北京市朝阳区建国路乙108号</div>
      <div>售楼处地址：朝阳国贸桥东南角建国路乙108号雅诗阁服务公寓东塔一层</div>
    </el-card>
    <!-- 详细地址 -->
    <el-card header="周边设施" shadow="never">
      <div>交通</div>
    </el-card>
    <!-- 免责声明 -->
    <disclaimer></disclaimer>
    <!-- 扩展 -->
    <expand :data="data"></expand>
  </div>
</template>

<script src="./maptraffic"></script>

<style lang="scss" scoped src="./maptraffic.scss"></style>
