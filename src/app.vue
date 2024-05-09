<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const appName = config.public.appName;

useHead({
  titleTemplate(title) {
    return title ? `${title} - ${appName}` : appName;
  },
});
</script>
