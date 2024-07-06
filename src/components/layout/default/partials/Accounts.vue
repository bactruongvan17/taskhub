<script setup lang="ts">
import { Edit, SwitchButton } from '@element-plus/icons-vue'
import { computed, ref } from 'vue'

const user = ref({
  id: '1',
  email: 'bactruongvan17@gmail.com',
  fullName: 'Bac Truong Van'
})

const avatar = computed(() => {
  return user.value.fullName.substring(0, 1).toUpperCase()
})
</script>

<template>
  <el-popover placement="bottom" :width="250" trigger="click">
    <template #reference>
      <el-avatar :size="30" class="cursor-pointer avatar-icon">{{ avatar }}</el-avatar>
    </template>
    <div class="popup-account">
      <div class="flex flex-col justify-center items-center">
        <el-avatar :size="50" class="mb-3 avatar-icon">{{ avatar }}</el-avatar>
        <span class="font-extrabold mb-1">{{ user.fullName }}</span>
        <span class="text-sm text-gray-400">{{ user.email }}</span>
      </div>
      <el-divider class="my-4" />
      <ul>
        <li>
          <el-icon><Edit /></el-icon> Update Profile
        </li>
        <li>
          <el-icon><SwitchButton /></el-icon> Logout
        </li>
      </ul>
    </div>
  </el-popover>
</template>

<style lang="scss">
.avatar-icon {
  background: #066a21;
  font-weight: bold;
}

.popup-account {
  ul {
    li {
      cursor: pointer;
      padding: 8px 12px;

      &:hover {
        background-color: var(--el-fill-color-light);
      }
    }
  }
}
</style>
