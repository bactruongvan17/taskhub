<script setup lang="ts">
import SocialSignIn from '@/components/auth/SocialSignIn.vue'
import { User, Lock, Right, Message } from '@element-plus/icons-vue'
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  fullName: '',
  email: '',
  password: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <ElCard class="login-page">
    <div class="flex items-center justify-center mb-3 gap-1">
      <img src="@/assets/images/logo.svg" alt="TaskHub" style="width: 40px; height: 40px" />
      <h1 class="text-primary">TaskHub</h1>
    </div>
    <p class="mb-2 text-sm font-semibold text-gray-500">Sign Up</p>

    <el-form :model="form" class="mb-4">
      <el-form-item>
        <el-input v-model="form.fullName" placeholder="Enter your name" :prefix-icon="User" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.email" placeholder="Enter your email" :prefix-icon="Message" />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password"
          type="password"
          show-password
          placeholder="Enter your password"
          :prefix-icon="Lock"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="w-full">
          Sign Up <ElIcon class="el-icon--right"><Right /></ElIcon>
        </el-button>
      </el-form-item>
    </el-form>

    <SocialSignIn />

    <p class="text-xs mt-4">Already have an account? <RouterLink to="/login">Login</RouterLink></p>
  </ElCard>
</template>

<style lang="scss" scoped>
.login-page {
  width: 280px;
  text-align: center;
}
</style>
