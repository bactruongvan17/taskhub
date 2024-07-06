<script setup lang="ts">
import { ArrowDown, Check, CircleCheck, CirclePlus } from '@element-plus/icons-vue'
import { ElButton } from 'element-plus'
import Settings from './partials/Settings.vue'
import Notifications from './partials/Notifications.vue'
import Accounts from './partials/Accounts.vue'
import DarkMode from './partials/DarkMode.vue'
</script>

<template>
  <header class="flex items-center justify-between px-4 py-2">
    <div class="flex items-center gap-4">
      <!-- Logo -->
      <div class="flex items-center gap-1">
        <img alt="TaskHub" src="@/assets/images/logo.svg" style="width: 32px; height: 32px" />
        <span class="font-bold text-lg">TaskHub</span>
      </div>

      <!-- Menu -->
      <div class="flex items-center gap-1">
        <el-button text>Home</el-button>
        <el-dropdown trigger="click">
          <ElButton text>
            Workspaces<el-icon class="el-icon--right"><ArrowDown /></el-icon>
          </ElButton>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
              <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
              <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="flex items-center gap-6">
      <!-- DarkMode -->
      <DarkMode />

      <!-- Settings -->
      <Settings />

      <!-- Notification -->
      <Notifications />

      <!-- Account -->
      <Accounts />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  // background-color: #f5f5f5;
  border-bottom: 1px solid #e3e3e3;
}
</style>
