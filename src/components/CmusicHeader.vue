<script setup lang="ts">
import { ref } from 'vue'
// 引入路由
import { useRouter } from 'vue-router'

const activeIndex = ref('/')

const router = useRouter()

const routes = ref()

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
      <el-sub-menu v-if="route.children.length > 1" :index="route.path">
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
      <el-menu-item v-else :index="route.path" :key="route.path">
        <span>{{ route.meta.title }}</span>
      </el-menu-item>
    </template>

    <el-button class="login-button" @click="$router.push('/Cuser/login')">登录</el-button>
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
  justify-content: center;
  align-items: center;
  border-bottom: none;
}

/* 未选择菜单样式 */
:deep(.el-menu-item) {
  width: 100px;
  height: 30px;
  margin-right: 100px;
  line-height: 30px;
  border-radius: 50px !important;
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

/* 登录按钮样式 */
.login-button {
  margin-left: 200px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
</style>
