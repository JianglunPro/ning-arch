import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  // 安全列表
  safelist: [],

  // 主题
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '1/1': '1 / 1',
      },
    },
  },

  // 浅色和深色模式
  // 和 nuxt 配合
  darkMode: 'class',
};

// Tip: 自动提示功能需要安装插件，并且做好配置，详见 .vscode/settings.json
