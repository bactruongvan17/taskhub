<script lang="ts" setup>
import { computed, reactive } from 'vue'
import BoardBackgrounds from './partials/BoardBackgrounds.vue'
import BoardPreview from './partials/BoardPreview.vue'
import { VisibilityTypes } from '@/types/board'
import { faGlobeAsia, faLock, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { VISIBILITY_TEXT } from '@/data/const'

const drawer = defineModel()

const form = reactive<{
  title: string
  background: string
  visibility: VisibilityTypes
}>({
  title: '',
  background: '',
  visibility: VisibilityTypes.PRIVATE
})

const getVisibilityIcon = (type: VisibilityTypes) => {
  switch (type) {
    case VisibilityTypes.WORKSPACE:
      return faUsers
    case VisibilityTypes.PUBLIC:
      return faGlobeAsia
    case VisibilityTypes.PRIVATE:
      return faLock
    default:
      return faUsers
  }
}

const handleCancel = () => {
  drawer.value = false
}

const handleConfirm = () => {}
</script>

<template>
  <el-drawer v-model="drawer" direction="rtl" size="300px">
    <template #header>
      <span class="font-bold" style="color: #000000">Create board</span>
    </template>
    <template #default>
      <div class="mb-8">
        <BoardPreview :background-image-url="form.background" />
      </div>
      <div>
        <div class="label-form mb-2">Background</div>
        <BoardBackgrounds v-model="form.background" />
      </div>

      <el-form :model="form">
        <el-form-item>
          <div class="label-form">Board title *</div>
          <el-input v-model="form.title" placeholder="Enter board title" />
        </el-form-item>
        <el-form-item>
          <div class="label-form">Visibility</div>
          <el-select v-model="form.visibility" popper-class="board-visibility">
            <el-option
              v-for="item in VisibilityTypes"
              :key="item"
              :value="item"
              :label="VISIBILITY_TEXT[item].label"
            >
              <div class="flex items-center gap-4">
                <FontAwesomeIcon :icon="getVisibilityIcon(item)" />
                <div>
                  <div class="font-bold mb-2">{{ VISIBILITY_TEXT[item].label }}</div>
                  <div>{{ VISIBILITY_TEXT[item].desc }}</div>
                </div>
              </div>
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="handleCancel">Cancel</el-button>
        <el-button type="primary" @click="handleConfirm">Create</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<style lang="scss">
.label-form {
  font-size: 13px;
  font-weight: 500;
}

.board-visibility {
  width: 360px;

  .el-select-dropdown__item {
    line-height: normal;
    height: auto;
    white-space: normal;
    text-overflow: unset;
    padding: 10px 20px;
  }
}
</style>
