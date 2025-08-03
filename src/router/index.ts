import { createRouter, createWebHistory } from 'vue-router'
import CmusicHome from '@/views/CmusicHome.vue'
import CmusicLogin from '@/views/CmusicLogin.vue'
import CmusicIndex from '@/layout/CmusicIndex.vue'
import CmusicRadar from '@/views/CmusicRadar.vue'
import MySinger from '@/views/MyCmusic/MySinger.vue'
import MySongList from '@/views/MyCmusic/MySonglist.vue'
import CmusicRegister from '@/views/CmusicRegister.vue'
import MyInfo from '@/views/MyCmusic/MyInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: CmusicIndex,
      meta: {
        title: 'Cmusic广场',
        isshow: true,
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component: CmusicHome,
        },
      ],
    },
    {
      path: '/cmusicRadar/',
      name: 'cmusicRadar',
      // 重定向
      redirect: '/cmusicRadar/Radar',
      component: CmusicIndex,
      meta: {
        title: 'Cmusic雷达',
        isshow: true,
      },
      children: [
        {
          path: 'Radar',
          name: 'Radar',
          component: CmusicRadar,
        },
      ],
    },
    {
      path: '/myCmusic/',
      name: 'myCmusic',
      component: CmusicIndex,
      meta: {
        title: '我的C空间',
        isshow: true,
      },
      children: [
        {
          path: 'mysinger',
          name: 'mysinger',
          component: MySinger,
          meta: {
            title: '我的关注',
            // 这里改成false 在检查时会被过滤
            isshow: false,
          },
        },
        {
          path: 'mysonglist',
          name: 'mysonglist',
          component: MySongList,
          meta: {
            title: '我的歌单',
            isshow: false,
          },
        },
        {
          path: 'myinfo',
          name: 'myinfo',
          component: MyInfo,
          meta: {
            title: '我的信息',
            isshow: false,
          },
        },
      ],
    },
    {
      path: '/Cuser/',
      component: CmusicIndex,
      meta: {
        title: '登录',
        isshow: false,
      },
      children: [
        {
          path: 'login',
          name: 'login',
          component: CmusicLogin,
        },
        {
          path: 'register',
          name: 'register',
          component: CmusicRegister,
        },
      ],
    },
  ],
})

export default router
