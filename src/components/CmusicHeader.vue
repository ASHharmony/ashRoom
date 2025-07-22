<script setup lang="ts">
import { ref } from 'vue'
// 引入路由
import { useRouter } from 'vue-router'

const activeIndex = ref('/')

const router = useRouter()

const routes = ref()

// router.getRoutes() 方法获取所有路由
// filter 筛选isshow为true的路由
routes.value = router.getRoutes().filter((item) => {
  if (item.meta.isshow == true) {
    // 处理子路由
    // 如果子路由长度为0 就表明没有子路由
    if (item.children.length) {
      // 过滤子路由
      //console.log(item.children)
      item.children = item.children.filter((child) => {
        if (child.meta && !(child.meta.isshow == false)) {
          return child
        }
      })
    }
    return item
  }
})

// console.log(routes.value)
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router="true"
  >
    <template v-for="route in routes" :key="route.path">
      <!-- 含有子菜单 -->
      <el-sub-menu v-if="route.children.length" :index="route.path">
        <template #title>
          <span>{{ route.meta.title }}</span>
        </template>
        <el-menu-item
          v-for="item in route.children"
          :index="route.path + item.path"
          :key="item.path"
        >
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
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
  </el-menu>
</template>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
</style>
