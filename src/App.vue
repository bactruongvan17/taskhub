<script setup lang="ts">
import { RouterView } from 'vue-router'
import AuthLayout from './layouts/AuthLayout.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import { ref } from 'vue'

const layout = ref<typeof AuthLayout | typeof DefaultLayout>(DefaultLayout)
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style scoped></style>
