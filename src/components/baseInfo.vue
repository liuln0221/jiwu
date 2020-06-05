<template>
  <div class="base-info">
    <div v-for="data in dataList" :key="data.label">
      <div class="base-info__label" :style="`min-width: ${labelWidth ? `${labelWidth}px` : ''}`">
        <p v-if="!data.getLabel">{{ data.label }}：</p>
        <!-- 自定义 -->
        <p v-else>{{ data.getLabel() }}:</p>
      </div>
      <div>
        <!-- 密码 -->
        <p v-if="data.type === 'password'" @click="pwdShow = !pwdShow" class="base-info__pwd">
          <span v-if="!pwdShow">
            <span>******</span>
          </span>
          <span v-else>{{ data.value || data.value === 0 ? data.value : '-' }}</span>
          <el-icon class="el-icon-view"></el-icon>
        </p>
        <!-- 数组 -->
        <p
          v-else-if="data.type === 'array'"
          v-for="(item, index) in data.value"
          :key="index"
        >{{ item }}</p>
        <!-- 状态（带操作） -->
        <p v-else-if="data.type === 'state'" class="base-info__state">
          <i :class="data.icon" v-if="data.icon"></i>
          <span class="base-info__state__text">{{ data.value || data.value === 0 ? data.value : '-' }}</span>
          <span class="base-info__state__operate" v-for="(btn, index) in data.buttons" :key="index">
            <el-button
              @click="handleButton(btn.click)"
              size="medium"
              :title="btn.text"
              :disabled="btn.disabled"
            ><i :class="btn.icon"></i>
            </el-button>
          </span>
        </p>
        <!-- 文本 -->
        <p v-else>
          {{ data.value || data.value === 0 ? data.value : '-' }}
          <span v-if="data.unit">{{ data.unit }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basicInfo',
  props: [ 'dataList', 'labelWidth' ],
  data() {
    return {
      pwdShow: false
    };
  },
  methods: {
    /**
     * 操作列按钮点击事件, 参数(row: 所在行对象, callback: 初始化传入的按钮回调函数)
     */
    handleButton(callback) {
      callback();
    }
  }
}
</script>

<style lang="scss" scoped>
.base-info {
  & > div {
    display: flex;
    line-height: 36px;
    .base-info__label {
      color: #999;
    }

    p {
      margin: 0;
    }

    .base-info__pwd {
      span {
        position: relative;
        top: 3px;
      }
      i {
        margin-left: 5px;
        vertical-align: bottom;
        cursor: pointer;
      }
      i:hover {
        color: #409eff;
      }
    }

    .base-info__state {
      i {
        position: relative;
        top: 1px;
        margin-right: 5px;
      }
      .base-info__state__operate {
        margin-left: 10px;

        .el-button {
          border: none;
          background: none;
          padding: 0;

          &:focus {
            color: #a39f9f;
          }
        }
      }
    }
  }
}
</style>


