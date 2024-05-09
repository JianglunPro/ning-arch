<template>
  <div
    :class="[
      'min-h-screen',
      'centered-box',
      'font-light',
      { 'bg-black text-white': isDark },
    ]"
    @click="isDark = !isDark"
  >
    鲲浪
  </div>
</template>

<!-- 使用 :class 来组织 tailwindcss 的分类似乎是个不错的方法 -->

<!-- 可以使用 postcss 来定义一个“组合类” -->

<style lang="postcss" scoped>
.centered-box {
  @apply flex items-center justify-center;
}
</style>

<script setup lang="ts">
const config = useRuntimeConfig();

// 只会打印出 public 中的配置
// 其他配置会被视为 private 不会被打印, 开发服务器中会自动打印所有配置, 也可以在 nuxt devtool 中查看
console.log(config);

const isDark = ref(false);
</script>
