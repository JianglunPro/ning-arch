<template>
  <div class="flex-1 flex flex-col items-center justify-center">
    <div class="flex gap-4 items-center">
      <UButton color="primary">按钮</UButton>
      <div class="text-primary-500">鲲浪，创建初创～</div>
      <UButton padded color="green" @click="appConfig.ui.primary = 'green'" />
      <UButton padded color="violet" @click="appConfig.ui.primary = 'violet'" />
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>
