<template>
  <div>
    <div class="mb-6">
      <ReceptionProviderWechatButton scene="signup" />
      <ReceptionElementSeparator label="通过用户名注册" />
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
