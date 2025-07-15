<script setup lang="ts">
// 引入vue相关
import { reactive, ref } from 'vue'

// 引入组件
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  username: string
  password: string
}

const ruleFormRef = ref<FormInstance>()

// 引入图标
import { User, Key } from '@element-plus/icons-vue'

// 定义表单验证规则
const rules = reactive<FormRules<RuleForm>>({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
})

// 提交表单 异步
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const form = reactive({
  username: '',
  password: '',
})
</script>

<template>
  <div class="login-page">
    <div class="form-container">
      <el-form :rules="rules" :model="form">
        <el-form-item class="inp-container" prop="username">
          <el-icon>
            <User />
          </el-icon>
          <el-input v-model="form.username" type="text" placeholder="请输入账号" class="inp" />
        </el-form-item>
        <el-form-item prop="password" class="inp-container">
          <el-icon>
            <Key />
          </el-icon>
          <el-input
            v-model="form.password"
            type="password"
            autocomplete="off"
            placeholder="请输入密码"
            class="inp"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"> 登录 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  margin: auto;
  min-height: 650px;
  background-color: #f8fff8;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 表单样式 */
.inp {
  width: 200px;
}

/* 修改表单样式  去除边框*/
:deep(.el-input__wrapper) {
  box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
}
</style>
