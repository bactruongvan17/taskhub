import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
  const isCollapseSidebar = ref<boolean>(false)

  function toggleCollapseSidebar() {
    isCollapseSidebar.value = !isCollapseSidebar.value
  }

  return {
    isCollapseSidebar,
    toggleCollapseSidebar
  }
})
