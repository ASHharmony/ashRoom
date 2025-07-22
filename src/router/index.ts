import { createRouter, createWebHistory } from 'vue-router'
import CmusicHome from '@/views/CmusicHome.vue'
import CmusicLogin from '@/views/CmusicLogin.vue'
import CmusicIndex from '@/layout/CmusicIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: CmusicIndex,
      meta: {
        title: '首页',
        isshow: true,
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: CmusicHome,
        },
      ],
    },
    {
      path: '/login',
      component: CmusicIndex,
      meta: {
        title: '登录',
        isshow: true,
      },
      children: [
        {
          path: '',
          name: 'login',
          component: CmusicLogin,
        },
      ],
    },
  ],
})

export default router
