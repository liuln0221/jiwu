<template>
  <div class="login">
    <el-dialog
      :visible.sync="dialogVisible"
      width="400px"
      :before-close="hide"
      :show-message="false"
    >
      <el-form
        :model="form"
        :rules="rules"
        ref="form"
        hide-required-asterisk
        @validate="check"
      >
        <div class="title">手机快捷登录</div>
        <!-- 手机号 -->
        <el-form-item prop="tel">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <!-- 图形验证码 -->
        <el-form-item prop="graphVerifyCode">
          <el-input v-model="form.graphVerifyCode">
            <el-image
              slot="suffix"
              :src="graphVerifyCode.imgBase64"
              @click.native="getGraphVerifyCode"
            ></el-image>
          </el-input>
        </el-form-item>
        <!-- 短信验证码 -->
        <el-form-item prop="smsVerifyCode">
          <el-input v-model="form.smsVerifyCode">
            <el-button
              v-if="smsVerifyCodeTime === 60"
              slot="suffix"
              type="text"
              :disabled="smsVerifyCodeDisabled"
              @click="getSmsVerifyCode"
            >获取验证码</el-button>
            <el-button
              v-else
              slot="suffix"
              type="text"
            >{{ smsVerifyCodeTime }}s后获取</el-button>
          </el-input>
        </el-form-item>
        <!-- 协议 -->
        <el-checkbox v-model="checked">我已阅读并同意<router-link :to="{ name: 'serviceStatement' }" target="_blank">《吉屋用户服务协议》</router-link></el-checkbox>
        <!-- 校验信息 -->
        <div class="login__error">{{ errorMsg }}</div>
      </el-form>
      <span slot="footer">
        <el-button @click="login" :disabled="!checked || invalid">登录</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script src="./login"></script>

<style lang="scss" scoped src="./login.scss"></style>
