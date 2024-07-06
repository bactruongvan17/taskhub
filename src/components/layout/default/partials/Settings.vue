<script setup lang="ts">
import { Setting } from '@element-plus/icons-vue'
</script>

<template>
  <el-dropdown trigger="click">
    <el-icon :size="18"><Setting /></el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Settings</el-dropdown-item>
        <el-dropdown-item>Release Notes</el-dropdown-item>
        <el-dropdown-item>Learning Center</el-dropdown-item>
        <el-dropdown-item>Support Center</el-dropdown-item>
        <el-dropdown-item>Trust and Security</el-dropdown-item>
        <el-dropdown-item>Privacy Policy</el-dropdown-item>
        <el-dropdown-item>Terms</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped></style>
