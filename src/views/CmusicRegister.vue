<script setup lang="ts">
// 引入vue相关
import { reactive } from 'vue'

// 引入组件
import type { FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

import http from '@/utils/request'
import router from '@/router'

// 定义表单数据类型
interface RuleForm {
  email: string
  username: string
  nickname: string
  password: string
  repassword: string
}

// 实例化
const form = reactive<RuleForm>({
  email: '',
  username: '',
  nickname: '',
  password: '',
  repassword: '',
})

// 定义表单验证规则
const rules = reactive<FormRules<RuleForm>>({
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        const emailrule = /[\w]+(\.[\w]+)*@[\w]+(\.[\w])+/
        if (!emailrule.test(value)) {
          return new Error('邮箱格式错误')
        } else {
          callback()
        }
      },
      trigger: 'blur',
    },
  ],
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
  repassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value != form.password) {
          return new Error('两次输入密码不一致')
        } else {
          callback()
        }
      },
      trigger: 'blur',
    },
  ],
})

// 提交表单 异步
const submitForm = async (formEl: RuleForm | undefined) => {
  if (!formEl) {
    ElMessage.error('注册失败，请检测输入内容')
  } else {
    try {
      const response = await http.post('/register', formEl)
      if (response.data.status === 201) {
        // 弹窗
        ElMessage.success('注册成功，即将跳转至登录界面')
        // 跳转
        setTimeout(() => {
          router.push('/Cuser/login')
        }, 1000)
      } else {
        ElMessage.error(`注册失败:${response.data.message}`)
      }
    } catch (error) {
      // 断言
      ElMessage.error((error as Error).message)
    }
  }
}
</script>

<template>
  <div class="login-page">
    <div class="left-container">
      <img class="left-image" src="../../public/flower.png" alt="" />
    </div>
    <div class="form-container">
      <el-form :rules="rules" :model="form">
        <el-form-item class="inp-container" prop="email">
          <el-icon class="inp-icon">
            <Message />
          </el-icon>
          <el-input v-model="form.email" type="text" placeholder="请输入邮箱" class="inp" />
        </el-form-item>
        <el-form-item class="inp-container" prop="username">
          <el-icon class="inp-icon">
            <User />
          </el-icon>
          <el-input v-model="form.username" type="text" placeholder="请输入账号" class="inp" />
        </el-form-item>
        <el-form-item class="inp-container" prop="nickname">
          <el-icon class="inp-icon">
            <Service />
          </el-icon>
          <el-input v-model="form.nickname" type="text" placeholder="请输入昵称" class="inp" />
        </el-form-item>
        <el-form-item class="inp-container" prop="password">
          <el-icon class="inp-icon">
            <Key />
          </el-icon>
          <el-input
            v-model="form.password"
            type="password"
            autocomplete="off"
            placeholder="请输入密码"
            class="inp"
            show-password
          />
        </el-form-item>
        <el-form-item class="inp-container" prop="repassword">
          <el-icon class="inp-icon">
            <Refresh />
          </el-icon>
          <el-input
            v-model="form.repassword"
            type="password"
            autocomplete="off"
            placeholder="请确认密码"
            class="inp"
          />
        </el-form-item>
        <el-form-item>
          <el-button color="#5fbf60" class="reg-btn" plain @click="submitForm(form)"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  margin: auto;
  width: 100%;
  min-height: 650px;
  /* 背景渐变 */
  background-image: linear-gradient(to right bottom, #97dd61, #41cb74); /*#00b789*/
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 左边容器 */
.left-container {
  padding: 0;
  margin: 0;
  flex: 1;
  height: 650px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* background-color: #41cb74; */
  box-sizing: border-box;
}

/* 图片 */
.left-container img {
  width: 65%;
  height: 65%;
  object-fit: contain;
  margin-left: 300px;
}

/* 表单容器 */
.form-container {
  flex: 1;
  height: 650px;
  /* background-color: #41cb74; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  box-sizing: border-box;
}

/* 表单容器样式 */
.inp-container {
  width: 300px;
  height: 50px;
  /* border: 1px solid #000000; */
  border-radius: 50px;
  background: linear-gradient(145deg, #5fbf60, #70e372);
  box-shadow:
    5px 5px 32px #65cc67,
    -5px -5px 32px #6ddc6f;
  margin-top: 25px;
  margin-left: 50px;
}

/* 表单图标样式 */
.inp-icon {
  /* 左移 */
  margin-left: 30px;
  color: #ffd28c;
  font-size: 16px;
}

/* 表单样式 */
.inp {
  margin-left: 10px;
  width: 180px;
}

/* 提示字样式 */
:deep(.el-input__inner::placeholder) {
  color: #f0ebd8;
  font-weight: 600;
  font-size: 16px;
}

/* 修改表单样式  去除选中边框*/
:deep(.el-input__wrapper) {
  box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
  /* 输入框背景透明 */
  background-color: transparent;
}

/* 修改表单内容样式 */
:deep(.el-input__inner) {
  color: #ffd28c;
  font-weight: 600;
  font-size: 16px;
}

/* 表单错误样式 */
:deep(.el-form-item.is-error .el-input__wrapper) {
  box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
}

/* 错误表单选中样式 */
:deep(.el-form-item.is-error .el-form-item__content .el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
}

/* 错误表单鼠标悬停样式 */
:deep(.el-form-item.is-error .el-form-item__content .el-input__wrapper:hover) {
  box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
}

/* 密码可见按钮样式 */
:deep(.el-input__suffix-inner i) {
  color: #ff0000 !important;
}

:deep(.el-form-item__error) {
  margin-left: 60px;
}

/* 注册按钮样式 */
.reg-btn {
  width: 150px;
  height: 40px;
  border-radius: 50px;
  margin-top: 10px;
  margin-left: 120px;
  font-weight: 600;
}
</style>
