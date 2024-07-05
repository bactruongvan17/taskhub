<script setup lang="ts"></script>

<template>
  <main id="main-auth">
    <slot />
  </main>
</template>

<style scoped>
#main-auth {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(250, 251, 252);
  background-image: url('@/assets/images/auth-bg-left.svg'),
    url('@/assets/images/auth-bg-right.svg');
  background-repeat: no-repeat, no-repeat;
  background-attachment: fixed, fixed;
  background-size: 220px, 220px;
  background-position:
    left bottom,
    right bottom;
}
</style>
