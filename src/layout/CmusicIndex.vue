<script setup lang="ts">
import CmusicHeader from '@/components/CmusicHeader.vue'
import CmusicFooter from '@/components/CmusicFooter.vue'
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header style="margin: 0; padding: 0"> <CmusicHeader></CmusicHeader> </el-header>
      <el-main> <router-view></router-view> </el-main>
      <el-footer> <CmusicFooter></CmusicFooter> </el-footer>
    </el-container>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
