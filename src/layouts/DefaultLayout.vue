<script setup lang="ts">
import HeaderDefaultLayout from '@/components/layout/default/HeaderDefaultLayout.vue'
</script>

<template>
  <HeaderDefaultLayout />
  <main class="p-4">
    <slot />
  </main>
</template>

<style scoped></style>
