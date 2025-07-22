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
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
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
        <el-icon>
          <component :is="route.meta.icon"></component>
        </el-icon>
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

.login-button {
  margin-top: 20px;
  margin-left: 200px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
</style>
