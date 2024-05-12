<template>
  <div>
    <div class="space-y-4">
      <ReceptionProviderWechatButton scene="signin" />
    </div>
    <ReceptionElementSeparator :label="separatorLabel" />
    <ReceptionSigninForm />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'reception',
});

useHead({
  title: '登录',
});

// 登录方式
const signinMethod = useState('signinMethod', () => 'password');

// 分隔符文字
const separatorLabel = computed(() => {
  return signinMethod.value === 'password'
    ? '通过用户名、邮箱、手机与密码完成登录'
    : '通过邮箱、手机与验证码完成登录';
});
</script>
