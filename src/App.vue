<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import AuthLayout from './layouts/AuthLayout.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import { ref, watch } from 'vue'
import WorkspaceLayout from './layouts/WorkspaceLayout.vue'

const layouts: { [key: string]: any } = {
  auth: AuthLayout,
  default: DefaultLayout,
  workspace: WorkspaceLayout
}

const route = useRoute()

const layout = ref(DefaultLayout)

watch(
  () => route.meta.layout,
  (val) => {
    layout.value = layouts[val as string]
  }
)
</script>

<template>
  <Transition name="fade">
    <component :is="layout">
      <RouterView />
    </component>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
