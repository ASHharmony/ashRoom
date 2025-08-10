<script setup lang="ts">
import { ref } from 'vue'
// 引入路由
import { useRouter } from 'vue-router'

// 引入userstore
import { useUserStore } from '@/stores/useUserStore'

const userStore = useUserStore()

const activeIndex = ref('/')

const router = useRouter()

const routes = ref()

// 滚动按钮字符数组
const nameArr = ref(['L', 'O', 'V', 'E', ' ', ' ', ' ', ' ', 'C', 'C'])

// filter 筛选isshow为true的路由
routes.value = router.options.routes.filter((item) => item.meta && item.meta.isshow)

console.log(routes.value)
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    active-text-color="#003d00"
    text-color="#42493a"
    :router="true"
  >
    <template v-for="route in routes" :key="route.path">
      <!-- 含有子菜单 -->
      <el-sub-menu v-if="route.children.length > 1" :index="route.path" class="had-menu-btn">
        <template #title>
          <span>{{ route.meta.title }}</span>
        </template>
        <el-menu-item
          v-for="item in route.children"
          :index="route.path + item.path"
          :key="item.path"
        >
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </el-sub-menu>

      <!-- 不含子菜单 -->
      <el-menu-item v-else :index="route.path" :key="route.path" class="had-menu-btn">
        <span>{{ route.meta.title }}</span>
      </el-menu-item>
    </template>

    <!-- <span v-if="userStore.userInfo === undefined">
      <el-button class="headbtn login-button" @click="$router.push('/Cuser/login')">登录</el-button>
      <el-button class="headbtn register-button" @click="$router.push('/Cuser/register')"
        >注册</el-button
      >
    </span> -->
    <el-menu-item
      class="headbtn login-button"
      v-if="userStore.userInfo === undefined"
      :index="'/Cuser/login'"
      :key="'/Cuser/login'"
    >
      <span>登录</span>
    </el-menu-item>
    <el-menu-item
      class="headbtn register-button"
      v-if="userStore.userInfo === undefined"
      :index="'/Cuser/register'"
      :key="'/Cuser/register'"
    >
      <span>注册</span>
    </el-menu-item>
    <span v-else>
      <!-- <el-button>{{ userStore.userInfo?.nickname }}</el-button>
      <el-avatar src="/public/c-headimg.jpg" /> -->
      <!-- From Uiverse.io by Creatlydev -->
      <button class="Rbutton">
        <p class="Rbutton-text">
          <!-- <span style="--index: 0">C</span>
          <span style="--index: 1">M</span>
          <span style="--index: 2">U</span>
          <span style="--index: 3">S</span>
          <span style="--index: 4">I</span>
          <span style="--index: 5">C</span>
          <span style="--index: 6"> </span>
          <span style="--index: 7"> </span>
          <span style="--index: 8">C</span>
          <span style="--index: 9">C</span> -->

          <!-- 将index动态赋值给css -->
          <span v-for="(item, index) in nameArr" v-bind:key="index" :style="`--index:${index}`">{{
            item
          }}</span>
        </p>

        <div class="Rbutton-circle">
          <el-avatar src="/public/c-headimg.jpg" class="Rbutton-avatar" />
        </div>
      </button>
    </span>
  </el-menu>
</template>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

/* 强制设置背景 */
.el-menu,
.el-menu-item,
.el-menu-item.is-active,
.el-menu-item:focus,
.el-menu-item:active,
.el-menu-item:hover,
.el-sub-menu__title,
.el-sub-menu.is-active > .el-sub-menu__title,
.el-sub-menu__title:hover {
  background: #97dd61 !important;
}

/* 头部菜单样式 */
.el-menu-demo {
  height: 40px;
  background-color: #97dd61;
  display: flex;
  align-items: center;
  border-bottom: none;
}

/* 未选择菜单样式 */
:deep(.el-menu-item) {
  width: 100px;
  height: 30px;
  /* margin-right: 100px; */
  line-height: 30px;
  border-radius: 50px !important;
}

/* 每个菜单按钮间距 */
.had-menu-btn {
  margin-right: 100px;
}

/* 移动菜单位置 */
.had-menu-btn:first-child {
  margin-left: 500px;
}

/* 鼠标悬停菜单样式 */
:deep(.el-sub-menu__title:hover),
:deep(.el-menu-item:hover) {
  background-color: #97dd61 !important;
  border-radius: 50px !important;
  background: #97dd61;
  box-shadow:
    inset 7px 7px 9px #8bcb59,
    inset -7px -7px 9px #a3ef69;
  color: #ffd28c !important;
  font-weight: 600;
}

/* 选中菜单样式 */
:deep(.el-sub-menu.is-active > .el-sub-menu__title),
:deep(.el-menu-item.is-active) {
  border-radius: 50px !important;
  background: #97dd61;
  box-shadow:
    inset 8px 8px 5px #3c5827,
    inset -8px -8px 5px #f2ff9b;
  color: #f8fff8 !important;
  text-shadow: 0 1px 2px rgba(60, 88, 39, 0.5); /* 深绿色阴影增强对比 */
  font-weight: 700;
  transition: all 0.6s ease; /* 添加过渡效果 */
}

/* 强制设置有子菜单按钮宽度和高度 */
:deep(.el-sub-menu__title),
:deep(.el-sub-menu__title:hover),
:deep(.el-sub-menu.is-active > .el-sub-menu__title) {
  width: 100px !important;
  min-width: 100px !important;
  max-width: 100px !important;
  min-height: 30px !important;
  max-height: 30px !important;
  height: 30px !important;
  box-sizing: border-box;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

/* 有子菜单的标题样式 */
.el-sub-menu__title {
  width: 100px;
  height: 30px;
  line-height: 30px;
  /* 标题位置 */
  span {
    margin-left: 10px;
  }
}

/* 有子菜单的鼠标悬停样式
:deep(.el-sub-menu__title:hover) {
  width: 100px;
  height: 30px;
  background-color: #97dd61 !important;
  border-radius: 50px !important;
  background: #97dd61;
  box-shadow:
    inset 7px 7px 9px #8bcb59,
    inset -7px -7px 9px #a3ef69;
} */
/* 有子菜单的激活样式 */
/* :deep(.el-sub-menu.is-active > .el-sub-menu__title) {
  width: 100px;
  height: 30px;
  border-radius: 50px !important;
  background: #97dd61;
  box-shadow:
    inset 8px 8px 5px #3c5827,
    inset -8px -8px 5px #f2ff9b;
  color: #333 !important;
} */

/* 移动箭头位置 */
:deep(.el-sub-menu .el-sub-menu__icon-arrow) {
  margin-right: -57px !important;
}

/* 登录注册按钮总样式 */
.headbtn {
  width: 75px;
  /* transform: skewX(30deg); */
}

/* 登录按钮样式 */
.login-button {
  margin-left: 200px;
  margin-right: 5px;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.login-button:hover {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
:deep(.el-menu-item.is-active.login-button) {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

/* 注册按钮样式 */
.register-button {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.register-button:hover {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
:deep(.el-menu-item.is-active.register-button) {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

/* From Uiverse.io by Creatlydev */
.Rbutton {
  margin-left: 280px;
  cursor: pointer;
  border: none;
  background: #00c1ff;
  color: #fff;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  display: grid;
  place-content: center;
  transition:
    background 300ms,
    transform 200ms;
  font-weight: 600;
  z-index: 100;
}

.Rbutton-text {
  position: absolute;
  inset: 0;
  animation: text-rotation 8s linear infinite;

  > span {
    position: absolute;
    transform: rotate(calc(27deg * var(--index)));
    inset: 3px;
  }
}

.Rbutton-circle {
  position: relative;
  width: 35px;
  height: 35px;
  overflow: hidden;
  background: #fff;
  color: #00c1ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Rbutton-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  animation: avatar-rotation 8s linear reverse infinite;
}

/* .button__icon--copy {
  position: absolute;
  transform: translate(-150%, 150%);
} */

.Rbutton:hover {
  background: #ff458e;
  transform: scale(1.05);
}

@keyframes text-rotation {
  to {
    rotate: 360deg;
  }
}

/* 定义头像播放动画 */
@keyframes avatar-rotation {
  to {
    rotate: 360deg;
  }
}
</style>
