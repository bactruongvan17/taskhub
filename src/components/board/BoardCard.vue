<script setup lang="ts">
import { VISIBILITY_TEXT } from '@/data/const'
import { visibilityTypes, type Board } from '@/types/board'
import {
  faCog,
  faEarthAsia,
  faLock,
  faPeopleGroup,
  faUserLock,
  faUsers,
  faUsersViewfinder
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { filename } from 'pathe/utils'
import { computed } from 'vue'

const props = defineProps<{ board: Board }>()

const getBgSrc = (): string | undefined => {
  const modules: Record<string, { default: string }> = import.meta.glob(
    '@/assets/images/board_bg/*.svg',
    { eager: true }
  ) as Record<string, { default: string }>

  const images: Record<string, string> = Object.fromEntries(
    Object.entries(modules).map(([key, value]) => [filename(key), value.default])
  )

  return images[filename(props.board.background)]
}

const style = computed(() => {
  return {
    'background-image': `url(${getBgSrc()})`
  }
})
</script>

<template>
  <div class="card-board cursor-pointer" :style="style">
    <div class="title">{{ board.title }}</div>
    <div class="bg-overlay"></div>
  </div>
</template>

<style lang="scss" scoped>
.card-board {
  height: 100px;
  border-radius: 4px;
  position: relative;

  &:hover {
    .bg-overlay {
      background-color: rgba($color: #000000, $alpha: 0.1);
    }
  }

  .title {
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 4px 8px;
  }

  .bg-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
