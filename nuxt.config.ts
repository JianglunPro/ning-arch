// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // 根目录
  srcDir: 'src',

  // 模块
  modules: [
    // nuxt ui 默认已经包含  @nuxtjs/tailwindcss 和 @nuxtjs/color-mode
    '@nuxt/ui',
  ],

  // 浅色和深色模式
  // 和 tailwindcss 配合
  colorMode: {
    classSuffix: '',
  },

  // 环境变量
  // 可以被 .env 文件中的值覆盖
  // NUXT_PUBLIC_APP_NAME=鲲浪
  // NUXT_SURREAL_ROOT_USER=root
  // NUXT_SURREAL_ROOT_PASS=123
  runtimeConfig: {
    public: {
      appName: '宁皓网',
    },
    surreal: {
      rootUser: 'root',
      rootPass: 'xxx',
    },
  },
});
