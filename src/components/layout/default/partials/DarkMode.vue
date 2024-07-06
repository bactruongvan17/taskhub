<script setup lang="ts">
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <el-button @click="toggleDark()" :icon="isDark ? Moon : Sunny" text bg>{{
    isDark ? 'Dark' : 'Light'
  }}</el-button>
</template>

<style scoped></style>
