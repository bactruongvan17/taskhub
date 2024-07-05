<script setup lang="ts">
import GoogleIcon from '@/assets/icons/icons-google.svg'
import FacebookIcon from '@/assets/icons/icons-facebook.svg'
import MicrosoftIcon from '@/assets/icons/icons-microsoft.svg'
import SocialItem from './SocialItem.vue'
const items = [
  { name: 'Google', icon: GoogleIcon },
  { name: 'Facebook', icon: FacebookIcon },
  { name: 'Microsoft', icon: MicrosoftIcon }
]
</script>

<template>
  <div>
    <p class="text-sm text-gray-500 mb-2">Or continue with:</p>
    <div class="flex flex-col gap-2">
      <SocialItem v-for="item in items" :key="item.name" :name="item.name" :icon="item.icon" />
    </div>
  </div>
</template>

<style scoped></style>
