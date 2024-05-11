<template>
  <div class="flex-1 flex flex-col items-center justify-center">
    <div class="flex gap-4 items-center">
      <UButton color="green" variant="solid" size="lg" :ui="ui">
        按钮
        <template #leading>
          <UAvatar src="https://avatars.githubusercontent.com/u/35514521?v=4" size="xs" />
        </template>
      </UButton>
      <UButton @click="appConfig.ui.button.font = 'font-medium'">加粗</UButton>
      <UButton @click="appConfig.ui.button.font = 'font-light'">变细</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const ui = /*ui*/ { rounded: 'rounded-full' };
const appConfig = useAppConfig();
console.log(appConfig);
</script>
