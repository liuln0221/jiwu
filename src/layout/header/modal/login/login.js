import { VerifyCode, User } from '@/api';

export default {
  name: 'login',
  data() {
    return {
      dialogVisible: false,
      checked: true,
      form: {
        tel: '',
        graphVerifyCode: '',
        smsVerifyCode: ''
      },
      invalid: true,
      smsVerifyCodeDisabled: true,
      errorMsg: '',
      graphVerifyCode: {}, // 图形验证码
      smsVerifyCode: {}, // 短信验证码
      smsVerifyCodeTime: 60 // 获取短信验证码倒计时（60s）
    };
  },
  computed: {
    rules() {
      return {
        tel: [
          { required: true, message: '请输入您的手机号码！', trigger: 'change' },
          { pattern: /^1[0-9]{10}$/, message: '手机号码有误，请重新填写。', trigger: 'change' }
        ],
        graphVerifyCode: [
          { required: true, message: '请输入图形验证码！', trigger: 'change' }
        ],
        smsVerifyCode: [
          { required: true, message: '请输入短信验证码！', trigger: 'change' }
        ]
      };
    }
  },
  methods: {
    check() {
      this.invalid = (this.$refs.form).fields.some((e) => {
        if (e.isRequired ? e.validateState !== 'success' : e.validateState === 'error') {
          this.errorMsg = e.validateMessage;
          if (e.prop === 'tel' || e.prop === 'graphVerifyCode') {
            this.smsVerifyCodeDisabled = true;
          }
        } else {
          this.errorMsg = '';
          this.smsVerifyCodeDisabled = false;
        }
        return e.isRequired ? e.validateState !== 'success' : e.validateState === 'error';
      });
    },
    show() {
      this.dialogVisible = true;
      this.getGraphVerifyCode();
    },
    hide() {
      this.dialogVisible = false;
      this.$refs.form.resetFields();
      this.$refs.form.clearValidate();
      this.errorMsg = '';
    },
    /**
     * 获取图形验证码
     */
    getGraphVerifyCode() {
      const param = {
        height: '48',
        width: '105',
        verifySize: '4'
      };
      VerifyCode.getGraphVerifyCode(param).then(res => {
        this.graphVerifyCode = res.data;
      });
    },
    /**
     * 获取短信验证码
     */
    getSmsVerifyCode() {
      const interval = setInterval(() => {
        if (this.smsVerifyCodeTime > 0 && this.smsVerifyCodeTime <= 60) {
          this.smsVerifyCodeTime --;
        } else {
          this.smsVerifyCodeTime = 60;
          clearInterval(interval);
        }
      }, 1000);
      const param = {
        graphVerifyCode: this.form.graphVerifyCode,
        graphVerifyCodeId: this.graphVerifyCode.id,
        phone: this.form.tel
      };
      VerifyCode.getSmsVerifyCode(param).then(res => {
        this.smsVerifyCode = res.data;
      });
    },
    /**
     * 登录
     */
    login() {
      const param = {
        phone: this.form.tel,
        smsVerifyCode: this.form.smsVerifyCode
      };
      User.login(param).then(() => {
        this.hide();
      });
    }
  }
};
