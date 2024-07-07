<script setup lang="ts">
import type { Board } from '@/types/board'
import BoardCard from './BoardCard.vue'
import { CirclePlus } from '@element-plus/icons-vue'

defineProps<{ data: Array<Board> }>()
</script>

<template>
  <div class="mb-4 float-right">
    <el-button text bg :icon="CirclePlus" type="primary">Create new board</el-button>
  </div>
  <div class="clear-both"></div>
  <div class="grid grid-cols-3 gap-3">
    <BoardCard v-for="board in data" :key="board.id" :board="board" />
  </div>
</template>

<style lang="scss" scoped></style>
