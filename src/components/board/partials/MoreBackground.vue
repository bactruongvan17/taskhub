<script lang="ts" setup>
import { MoreFilled } from '@element-plus/icons-vue'
defineProps<{ data: Record<string, string>; selected: string }>()
const emit = defineEmits<{
  (e: 'select', value: string): void
}>()
</script>

<template>
  <el-popover placement="right" :width="400" trigger="click">
    <template #reference>
      <el-button text bg :icon="MoreFilled" style="height: 40px"></el-button>
    </template>
    <div>
      <p class="text-center font-bold mb-4">Board background</p>
      <div class="grid grid-cols-5 gap-2">
        <div
          class="img-item"
          :class="selected === item ? 'selected' : ''"
          v-for="item in data"
          :key="item"
          @click="emit('select', item)"
        >
          <img alt="Background" :src="item" />
          <div class="bg-overlay"></div>
        </div>
      </div>
    </div>
  </el-popover>
</template>

<style lang="scss" scoped>
.img-item {
  position: relative;
  height: 60px;
  cursor: pointer;
  border-radius: 4px;

  &.selected {
    img {
      border: 3px solid var(--el-color-primary);
    }
  }
  .bg-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  &:hover {
    .bg-overlay {
      background-color: rgba($color: #000000, $alpha: 0.4);
    }
  }
}
img {
  border-radius: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
