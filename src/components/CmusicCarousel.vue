<script setup lang="ts">
import { ref } from 'vue'
import { CarouselObj } from '../models/CarouselObj'

// 定义轮播图信息数据类型
interface CarouselItem {
  id: number
  imageURL: string
}

const carouselItems: CarouselItem[] = [
  { id: 1, imageURL: '/carousel/ca1.png' },
  { id: 2, imageURL: '/carousel/ca2.png' },
  { id: 3, imageURL: '/carousel/ca3.png' },
  { id: 4, imageURL: '/carousel/ca4.png' },
  { id: 5, imageURL: '/carousel/ca5.png' },
  { id: 6, imageURL: '/carousel/ca6.png' },
]

// 创建轮播图对象数组
const carouselList = carouselItems.map((item) => new CarouselObj(item.id, item.imageURL))

// 当前激活的轮播图索引
const activeIndex = ref(0)

// 处理轮播图切换事件
const handleCarouselChange = (currentIndex: number) => {
  activeIndex.value = currentIndex
}
</script>

<template>
  <!-- 轮播图容器 -->
  <div
    class="carousel-wrapper"
    :style="{
      backgroundImage: `url(${carouselItems[activeIndex].imageURL})`,
    }"
  >
    <!-- 轮播图 -->
    <el-carousel
      class="carouse-container"
      :interval="4000"
      type="card"
      height="210px"
      @change="handleCarouselChange"
    >
      <el-carousel-item
        class="carousel-item-container"
        v-for="(item, index) in carouselList"
        :key="index"
        @click="item.goTo()"
      >
        <!-- 轮播图片 -->
        <el-image :src="item.image" fit="cover"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
/* 轮播图外层容器 - 设置背景 */
.carousel-wrapper {
  position: relative;
  width: 1360px;
  height: 250px;
  padding: 20px;
  margin: auto;
  margin-top: 10px;
  /* border-radius: 8px; */
  overflow: hidden;
  transition: background-image;
  background-size: cover;
  background-position: center;
}

/* 背景模糊层 */
.carousel-wrapper::before {
  /* z-index: -1; */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  filter: blur(20px);
}

/* 轮播图容器 */
.carouse-container {
  background-color: transparent;
  position: relative;
  z-index: 1;
}

/* 轮播图项 */
.carousel-item-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.carousel-item-container:hover {
  transform: scale(1.02);
}

/* 图片样式 */
.el-image {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
