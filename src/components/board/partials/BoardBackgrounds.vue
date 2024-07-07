<script lang="ts" setup>
import { filename } from 'pathe/utils'
import { computed, onMounted } from 'vue'
import MoreBackground from './MoreBackground.vue'

const model = defineModel()

const getBackgrounds = computed(() => {
  const modules: Record<string, { default: string }> = import.meta.glob(
    '@/assets/images/board_bg/*.svg',
    { eager: true }
  ) as Record<string, { default: string }>

  const images: Record<string, string> = Object.fromEntries(
    Object.entries(modules).map(([key, value]) => [filename(key), value.default])
  )

  return images
})

const totalBg = computed(() => Object.keys(getBackgrounds.value).length)

const displayBackgrounds = computed(() => {
  return Object.fromEntries(Object.entries(getBackgrounds.value).slice(0, 9))
})

const selecteBackground = (item: string) => {
  model.value = item
}

onMounted(() => {
  if (!model.value) {
    model.value = Object.values(getBackgrounds.value)[0]
  }
})
</script>

<template>
  <div>
    <div class="grid grid-cols-5 gap-2">
      <div
        class="img-item"
        :class="model === item ? 'selected' : ''"
        v-for="item in displayBackgrounds"
        :key="item"
        @click="selecteBackground(item)"
      >
        <img alt="Background" :src="item" />
        <div class="bg-overlay"></div>
      </div>
      <template v-if="totalBg > 9">
        <MoreBackground
          :data="getBackgrounds"
          :selected="model as string"
          @select="selecteBackground"
        />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img-item {
  position: relative;
  height: 40px;
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
