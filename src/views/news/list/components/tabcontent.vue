<template>
  <div class="tabcontent">
    <div class="tabcontent__image" v-if="data.coverImgUrl">
      <router-link
          target="_blank"
          :to="{ name: 'newsDetail', params: {id: data.id} }"
        >
        <el-image :src="data.coverImgUrl"></el-image>
      </router-link>
    </div>
    <div class="tabcontent__info">
      <router-link target="_blank" :to="{ name: 'newsDetail', params: {id: data.id} }">{{ data.title }}</router-link>
      <div class="tabcontent__info__content line-clamp" v-html="data.content"></div>
      <div class="tabcontent__info__operate">
        <div class="time">
          <el-button v-if="data.tag" type="text">{{ data.tag }}</el-button>
          <span>{{ data.issueTime | dateStrToFormat('YYYY-MM-DD') }}</span>
        </div>
        <el-button v-if="subscribe" type="text" class="subscribe" icon="el-icon-plus">订阅</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabContent',
  props: [ 'data', 'image', 'subscribe' ]
}
</script>

<style lang="scss" scoped>
.tabcontent {
  display: flex;
  padding: 30px 0;
  border-bottom: 1px solid #eee;

  .tabcontent__image {
    padding-right: 30px;
    .el-image {
      width: 160px;
      height: 120px;
    }
  }

  .tabcontent__info {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    a {
      font-size: 20px;
      font-weight: 700;
      max-height: 60px;
      line-height: 30px;
      margin-top: -4px;
      justify-content: start;
    }

    /deep/.tabcontent__info__content {
      color: #869099;
      line-height: 22px;

      p {
        margin: 0;
      }
    }

    .tabcontent__info__operate {
      display: flex;
      justify-content: space-between;

      .time {
        .el-button {
          margin-right: 10px;
        }

        span {
          color: #869099;
          line-height: 22px;
        }
      }

      .subscribe {
        height: 24px;
        padding: 0 2px;
        border: 1px solid #47b3e3;
        color: #47b3e3;
      }
    }
  }
}
</style>
