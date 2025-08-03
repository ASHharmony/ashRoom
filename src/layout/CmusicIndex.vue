<script setup lang="ts">
import CmusicHeader from '@/components/CmusicHeader.vue'
import CmusicFooter from '@/components/CmusicFooter.vue'
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="CmusicHeader">
        <CmusicHeader></CmusicHeader>
      </el-header>
      <el-main class="CmusicMain"><router-view></router-view></el-main>
      <el-footer class="CmusicFooter">
        <CmusicFooter></CmusicFooter>
      </el-footer>
    </el-container>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
.CmusicHeader {
  height: 30px;
  margin: 0;
  padding: 0;
}
.CmusicMain {
  background-color: #f8fff8;
  width: 100%;
  min-height: 600px;
  margin: 0;
  margin-top: 10px;
  padding: 0;
}
.CmusicFooter {
  background-color: #f8fff8;
  min-height: 100px;
}
</style>
