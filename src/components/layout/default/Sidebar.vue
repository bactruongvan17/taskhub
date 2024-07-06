<script setup lang="ts">
import { ElMenu, ElMenuItem } from 'element-plus'
import { reactive, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAnglesLeft,
  faAnglesRight,
  faCog,
  faUserPlus,
  faWindowRestore
} from '@fortawesome/free-solid-svg-icons'
import { useLayoutStore } from '@/stores/layout'
import { useRouter } from 'vue-router'

const router = useRouter()

const workspace = reactive({
  id: '1',
  name: 'My workspace'
})

const layoutStore = useLayoutStore()
const activeMenu = ref<number>(1)

const changeMenu = (index: number, path: string) => {
  activeMenu.value = index
  router.push(path)
}
</script>

<template>
  <aside>
    <div class="flex items-center justify-between">
      <h1 class="text-base" v-show="!layoutStore.isCollapseSidebar">{{ workspace.name }}</h1>
      <el-button text bg @click="layoutStore.toggleCollapseSidebar()">
        <FontAwesomeIcon :icon="layoutStore.isCollapseSidebar ? faAnglesRight : faAnglesLeft" />
      </el-button>
    </div>
    <ElMenu :default-active="activeMenu.toString()" :collapse="layoutStore.isCollapseSidebar">
      <ElMenuItem index="1" @click="changeMenu(1, '/workspace/1/boards')">
        <el-icon><FontAwesomeIcon :icon="faWindowRestore" /></el-icon>
        <template #title>Boards </template>
      </ElMenuItem>
      <ElMenuItem index="2" @click="changeMenu(2, '/workspace/1/members')">
        <el-icon><FontAwesomeIcon :icon="faUserPlus" /></el-icon>
        <template #title>Members </template>
      </ElMenuItem>
      <ElMenuItem index="3" @click="changeMenu(3, '/workspace/1/settings')">
        <el-icon><FontAwesomeIcon :icon="faCog" /></el-icon>
        <template #title>Settings </template>
      </ElMenuItem>
    </ElMenu>
  </aside>
</template>

<style lang="scss" scoped></style>
