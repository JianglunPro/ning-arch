// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // 根目录
  srcDir: 'src',

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
