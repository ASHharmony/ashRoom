<script setup lang="ts">
// 引入vue相关
import { reactive } from 'vue'

// 引入组件
import type { FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

import http from '@/utils/request'
import router from '@/router'

import { useUserStore } from '@/stores/useUserStore'

const userStore = useUserStore()

// 定义表单数据类型
interface RuleForm {
  username: string
  password: string
}

// 实例化
const form = reactive<RuleForm>({
  username: '',
  password: '',
})

// 引入图标
// import { User, Key } from '@element-plus/icons-vue'

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
const submitForm = async (formEl: RuleForm | undefined) => {
  if (!formEl) {
    ElMessage.error('登录失败，请检查账号和密码')
  } else {
    try {
      const response = await http.post('/login', formEl)
      if (response.data.status === 200) {
        // 弹窗
        ElMessage.success(`亲爱的${response.data.user.nickname},欢迎回家`)
        // 存储用户信息
        userStore.setUserInfo({
          id: response.data.user.id,
          nickname: response.data.user.nickname,
          avatar: response.data.user.avatar,
        })
        // 跳转
        setTimeout(() => {
          router.push('/home')
        }, 1000)
      } else {
        ElMessage.error(`登录失败:${response.data.message}`)
        // 清空表单
        form.username = ''
        form.password = ''
      }
    } catch (error) {
      // 断言
      ElMessage.error((error as Error).message)
      // 清空表单
      form.username = ''
      form.password = ''
    }
  }
}
</script>

<template>
  <div class="login-page">
    <div class="left-container">
      <img class="left-image" src="../../public/window.png" alt="" />
    </div>
    <div class="form-container">
      <el-form :rules="rules" :model="form">
        <el-form-item class="inp-container" prop="username">
          <el-icon class="inp-icon">
            <User />
          </el-icon>
          <el-input v-model="form.username" type="text" placeholder="请输入账号" class="inp" />
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
        <el-form-item>
          <el-button color="#5fbf60" class="login-btn" plain @click="submitForm(form)"
            >登录</el-button
          >
          <el-button
            color="#5fbf60"
            class="login-btn"
            plain
            @click="$router.push('/Cuser/register')"
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
  width: 250px;
  height: 50px;
  /* border: 1px solid #000000; */
  border-radius: 50px;
  background: linear-gradient(145deg, #5fbf60, #70e372);
  box-shadow:
    5px 5px 32px #65cc67,
    -5px -5px 32px #6ddc6f;
  margin-top: 30px;
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
  /* margin-left: 10px; */
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

.login-btn {
  width: 100px;
  height: 30px;
  border-radius: 50px;
  margin-top: 30px;
  margin-left: 50px;
  font-weight: 600;
}
</style>
