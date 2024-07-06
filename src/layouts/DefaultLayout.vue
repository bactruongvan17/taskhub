<script setup lang="ts">
import HeaderDefaultLayout from '@/components/layout/default/HeaderDefaultLayout.vue'
</script>

<template>
  <HeaderDefaultLayout />
  <main class="px-2 py-4">
    <slot />
  </main>
</template>

<style scoped></style>
