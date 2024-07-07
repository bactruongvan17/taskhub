<script setup lang="ts">
import ListBoards from '@/components/board/ListBoards.vue'
import NoBoard from '@/components/board/NoBoard.vue'
import { visibilityTypes, type Board } from '@/types/board'

const boards: Array<Board> = [
  {
    id: '1',
    title: 'Vue.js career path',
    background: 'board_bg1.svg',
    visibility: visibilityTypes.PRIVATE
  },
  {
    id: '2',
    title: 'Learning Piano',
    background: 'board_bg2.svg',
    visibility: visibilityTypes.WORKSPACE
  },
  {
    id: '3',
    title: 'Remote team hub',
    background: 'board_bg3.svg',
    visibility: visibilityTypes.PUBLIC
  }
]
</script>

<template>
  <div>
    <template v-if="boards.length">
      <ListBoards :data="boards" />
    </template>
    <template v-else>
      <NoBoard />
    </template>
  </div>
</template>

<style scoped></style>
