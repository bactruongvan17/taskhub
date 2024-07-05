<script setup lang="ts">
defineProps<{
  name: string
  icon: any
}>()
</script>

<template>
  <div class="social-item flex items-center justify-center gap-1 cursor-pointer">
    <img :alt="name" :src="icon" />
    <span class="text-gray-500 text-sm">{{ name }}</span>
  </div>
</template>

<style scoped lang="scss">
.social-item {
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
  padding: 4px;

  &:hover {
    background-color: var(--el-border-color);
  }

  img {
    width: 24px;
    height: 24px;
  }
}
</style>
