<script lang="ts" setup>
defineProps<{ backgroundImageUrl: string }>()
</script>

<template>
  <div class="preview" :style="{ backgroundImage: `url(${backgroundImageUrl})` }">
    <img src="@/assets/images/board_template.svg" alt="Preview" />
  </div>
</template>

<style lang="scss" scoped>
.preview {
  width: 80%;
  margin: 0 auto;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}
</style>
