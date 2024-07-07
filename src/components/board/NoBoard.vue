<script setup lang="ts">
import { CirclePlus } from '@element-plus/icons-vue'
</script>

<template>
  <el-empty description="You don't have any boards.">
    <el-button text bg type="primary">
      <el-icon><CirclePlus /></el-icon>
      <span>Create new board</span>
    </el-button>
  </el-empty>
</template>

<style lang="scss" scoped></style>
