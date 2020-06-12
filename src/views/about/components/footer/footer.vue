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
