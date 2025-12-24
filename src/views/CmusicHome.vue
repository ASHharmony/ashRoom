<script setup lang="ts">
import CmusicCarousel from '@/components/CmusicCarousel.vue'
import { ref } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter()

import type { CollapseModelValue } from 'element-plus'

// import { Headset } from '@element-plus/icons-vue'

const activeNames = ref('0')
// 历史活跃
const historyName = ref('0')
const handleChange = (val: CollapseModelValue) => {
  // console.log(val)
  // console.log('a', activeNames.value)
  if (val === '') {
    activeNames.value = historyName.value
  }
}

const goTosortPage = (title: string) => {
  // console.log(title)
  // 使用编程式导航跳转
  router.push({
    path: '/sort',
    query: {
      sort: title,
    },
  })
}

interface sortitem {
  title: string
  sortarr: string[]
  icon: string
}

const sortdata: sortitem[] = [
  { title: '语种', sortarr: ['华语', '欧美', '日语', '韩语', '粤语'], icon: 'Compass' },
  {
    title: '风格',
    sortarr: [
      '流行',
      '摇滚',
      '民谣',
      '电子',
      '舞曲',
      '说唱',
      '轻音乐',
      'R&B',
      '古典',
      '民族',
      '英伦',
      '金属',
      '拉丁',
      '古风',
    ],
    icon: 'Baseball',
  },
  {
    title: '场景',
    sortarr: [
      '清晨',
      '夜晚',
      '学习',
      '工作',
      '午休',
      '下午茶',
      '地铁',
      '驾车',
      '运动',
      '旅行',
      '散步',
      '酒吧',
      '旅行',
    ],
    icon: 'Sunny',
  },
  {
    title: '情感',
    sortarr: ['怀旧', '清新', '烂漫', '孤独', '感动', '欢快', '暧昧', '放松', '治愈', '致郁'],
    icon: 'Dessert',
  },
  {
    title: '电台',
    sortarr: ['ACG', '电影', '翻唱', 'KTV', '钢琴', '经典', '校园', '儿童', '666'],
    icon: 'VideoPlay',
  },
]
</script>

<template>
  <!-- 轮播图 -->
  <CmusicCarousel />
  <!-- 分类 -->
  <!-- <el-card class="sort-container">
    <template #header
      ><div class="sort-header"><div class="sort-title">音乐分类</div></div></template
    >
    <div class="sort-body">
      <img class="sort-img" src="/public/sort-img.png" />
      <div class="sort-box">
        <el-collapse
          accordion
          expand-icon-position="left"
          v-model="activeNames"
          @change="handleChange"
        >
          <el-collapse-item
            :name="index + ''"
            v-for="(item, index) in sortdata"
            :key="index"
            :icon="item.icon"
          >
            <template #title="{ isActive }">
              <div :class="['title-wrapper', { 'is-active': isActive }]">{{ item.title }}</div>
            </template>
            <div class="sort-arr">
              <div class="sort-arr-item" v-for="(value, arrindex) in item.sortarr" :key="arrindex">
                | &nbsp;&nbsp;&nbsp;<text class="sort-arr-item-text" @click="goTosortPage(value)">{{
                  value
                }}</text
                >&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              |
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </el-card> -->
  <h1>开发中，暂无内容</h1>
</template>

<style scoped>
.home-page {
  background-color: #f4fced;
}

.sort-container {
  margin: auto;
  margin-top: 10px;
  max-width: 1400px;
}

/* 分类内容 */
.sort-body {
  height: 300px;
  display: flex;
  justify-content: space-around;
}

/* 标题左移 */
:deep(.el-collapse-item__header) {
  padding-left: 40px;
}

/* 分类图片 */
.sort-img {
  height: 280px;
  border-radius: 20px;
}

/* 分类盒子 */
.sort-box {
  min-width: 1200px;
}

/* 标题 */
.title-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 20px;
}

/* 活跃标题 */
.title-wrapper.is-active {
  color: #97dd61;
}

/* 分类隐藏内容容器 */
.sort-arr {
  display: flex;
  color: #7c7c7c;
  margin-left: 40px;
}

:deep(.el-collapse-item__content) {
  padding-bottom: 10px;
}

/* 分类内部容器 */
.sort-arr-item {
  cursor: default;
}

/* 分类项文本 */
.sort-arr-item-text {
  cursor: pointer;
}

/* 鼠标悬浮 */
.sort-arr-item-text:hover {
  color: #97dd61;
  font-weight: 600;
}
</style>
