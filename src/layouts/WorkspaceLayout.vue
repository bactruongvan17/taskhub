<script setup lang="ts">
import HeaderDefaultLayout from '@/components/layout/default/HeaderDefaultLayout.vue'
import Sidebar from '@/components/layout/default/Sidebar.vue'
import { useLayoutStore } from '@/stores/layout'
import { computed } from 'vue'

const layoutStore = useLayoutStore()
const isActiveSidebar = computed(() => !layoutStore.isCollapseSidebar)
</script>

<template>
  <HeaderDefaultLayout />
  <main class="px-2 py-4">
    <el-row :gutter="20" class="!m-0">
      <el-col :span="isActiveSidebar ? 6 : 3"><Sidebar /></el-col>
      <el-col :span="isActiveSidebar ? 18 : 21"><slot /></el-col>
    </el-row>
  </main>
</template>

<style scoped></style>
