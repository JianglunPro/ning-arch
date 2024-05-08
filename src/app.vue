<template>
  <div class="min-h-screen flex items-center justify-center bg-black text-white">
    鲲浪
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

// 只会打印出 public 中的配置
// 其他配置会被视为 private 不会被打印, 开发服务器中会自动打印所有配置, 也可以在 nuxt devtool 中查看
console.log(config);
</script>
