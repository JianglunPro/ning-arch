<template>
  <div>
    <div class="mb-6">
      <LayoutReceptionProviderWechatButton scene="signup" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'reception',
});

useHead({
  title: '加入',
});
</script>
