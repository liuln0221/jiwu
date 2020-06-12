<template>
  <div class="agreement">
    <el-card shadow="never" header="用户服务协议">
      <p>欢迎您使用吉屋的服务！</p>
      <p class="blod">为使用吉屋的服务，您应当阅读并遵守本《吉屋用户服务协议》（以下简称“本协议”）。本协议是用户与吉屋之间的法律协议，是用户注册吉屋账号并使用吉屋平台服务或非经注册程序直接使用吉屋平台服务时的通用条款。请您务必审慎阅读、充分理解本协议各条款内容，特别是免除或者限制责任的条款、管辖与法律适用条款。限制、免责条款可能以黑体加粗或加下划线的形式提示您重点注意。如果您不同意本协议的约定，您应立即停止注册程序或停止使用吉屋平台服务；如您继续访问和使用吉屋平台服务，即视为您已确知并完全同意本协议各项约定。</p>
      <p v-for="(item, index) in data" :key="index">{{ item }}</p>
    </el-card>
  </div>
</template>

<script src="./agreement"></script>

<style lang="scss" scoped src="./agreement.scss"></style>
