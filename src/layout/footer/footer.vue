<template>
  <div class="footer">
    <div class="footer__aboutcopy">
      <router-link
        v-for="(item, index) in aboutcopys"
        :key="index"
        :to="{ name: item.name }"
        target="_blank"
      >{{ item.label }}</router-link>
    </div>
    <!-- <div class="footer__links">
      <el-row :gutter="20">
        <el-col :span="2" class="footer__links__title">{{ location.name }}导航</el-col>
        <el-col :span="22">你可以按区域查找{{ location.name }}新房、二手房，也可以按区域查询{{ location.name }}房价。同时，你买房过程中遇到的很多问题都可以在这里得到解答。</el-col>
      </el-row>
      <el-row
        :gutter="20"
        v-for="link in links"
        :key="link.name"
      >
        <el-col :span="2" class="footer__links__title">{{ link.title }}</el-col>
        <el-col :span="22">
          <el-button
            type=text
            v-for="option in link.options"
            :key="option.name"
          >{{ option.label }}</el-button>
        </el-col>
      </el-row>
    </div> -->
    <div class="footer__conyfiv">
      <div>Copyright © 2020 <el-link :underline="false">jiwu.com</el-link> 深圳市吉屋网络技术有限公司 ALL Rights Reserved</div>
      <div>
        <el-link :underline="false">ICP备案(粤ICP备11045667号)</el-link>
        <el-link :underline="false">增值电信业务经营许可证</el-link>
        <el-link :underline="false">房地产经纪机构备案</el-link>
        <el-link :underline="false">工商网监</el-link>
        <el-link :underline="false">中国电子认证服务产业联盟</el-link>
        <el-link :underline="false">粤公网安备  44030502001914号
          <el-image src="http://www.beian.gov.cn/img/ghs.png"></el-image>
        </el-link>
      </div>
    </div>
  </div>
</template>

<script src="./footer"></script>

<style lang="scss" scoped src="./footer.scss"></style>
