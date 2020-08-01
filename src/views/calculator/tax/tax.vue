<template>
  <div class="tax">
    <calculator name="税费计算器" :custom="true">
      <template slot="custom">
        <el-form ref="form" :model="data" :rules="rules" label-width="140px">
          <!-- <el-form-item label="" prop="type">
            <el-radio-group v-model="data.type">
              <el-radio-button label="old">二手房</el-radio-button>
              <el-radio-button label="new">新房</el-radio-button>
            </el-radio-group>
          </el-form-item> -->
          <div v-if="data.type === 'new'">
            <el-form-item label="房屋单价" prop="price">
              <el-input v-model="data.price">
                <span slot="suffix">元/平方米</span>
              </el-input>
            </el-form-item>  
            <el-form-item label="房屋面积" prop="area">
              <el-input v-model="data.area">
                <span slot="suffix">平方米</span>
              </el-input>
            </el-form-item>        
            <el-form-item label="购房性质" prop="nature">
              <el-radio-group v-model="data.nature">
                <el-radio-button label="first">首套房</el-radio-button>
                <el-radio-button label="old">二手房</el-radio-button>
            </el-radio-group>
            </el-form-item>
          </div>
          <el-form-item>
            <el-button class="submit" @click="submit">开始计算</el-button>
            <el-button class="reset" @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
    </calculator>
    <result ref="result" :custom="true" @reset="reset">
      <template slot="custom">
        <custom-table :info="info" :store="store"></custom-table>
      </template>
    </result>
  </div>
</template>

<script src="./tax"></script>

<style lang="scss" scoped src="./tax.scss"></style>
