<template>
  <NuxtLayout
    :class="[
      'min-h-screen',
      'font-light',
      'bg-white text-black',
      'dark:bg-black dark:text-white',
    ]"
  >
    <NuxtPage />
    <UNotifications />
    <AppCommandPalette />
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const appName = config.public.appName;

useHead({
  titleTemplate(title) {
    return title ? `${title} - ${appName}` : appName;
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
});
</script>
