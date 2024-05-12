<template>
  <UDropdown :items="items">
    <div class="flex gap-4 items-center">
      <UAvatar src="https://avatars.githubusercontent.com/u/35514521?v=4" alt="头像" />
      <div v-if="withName" :class="['text-gray-600 dark:text-gray-400', text]">姜伦</div>
    </div>
  </UDropdown>
</template>

<script setup lang="ts">
import type { DropdownItem } from '#ui/types';

// 属性类型定义
type Props = {
  withName?: boolean;
  text?: string;
};

defineProps<Props>();

// 颜色模式
const colorMode = useColorMode();

// 当前颜色模式小图标
const currentColorModeIcom = computed(() => {
  switch (colorMode.value) {
    case 'light':
      return 'i-solar-sun-2-linear';
    case 'dark':
      return 'i-solar-moon-linear';
  }
});

// 主项目组
const mainItems = computed<DropdownItem[][]>(() => {
  return [
    [
      {
        label: '姜伦',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/35514521?v=4',
          alt: '头像',
        },
      },
    ],
    [
      {
        label: '外观',
        icon: currentColorModeIcom.value,
        click: (event: PointerEvent) => {
          event.preventDefault();
          currentItems.value = 'appearance';
        },
      },
    ],
  ];
});

// 外观项目组
const appearanceItems = computed<DropdownItem[][]>(() => {
  return [
    [
      {
        label: '返回',
        icon: 'i-solar-arrow-left-linear',
        click: (event: PointerEvent) => {
          event.preventDefault();
          currentItems.value = 'main';
        },
      },
    ],
    [
      {
        label: '浅色',
        icon: 'i-solar-sun-2-linear',
        click: (event: PointerEvent) => {
          event.preventDefault();
          colorMode.preference = 'light';
        },
      },
      {
        label: '深色',
        icon: 'i-solar-moon-linear',
        click: (event: PointerEvent) => {
          event.preventDefault();
          colorMode.preference = 'dark';
        },
      },
      {
        label: '跟随设备',
        icon: 'i-solar-devices-linear',
        click: (event: PointerEvent) => {
          event.preventDefault();
          colorMode.preference = 'system';
        },
      },
    ],
  ];
});

// 当前项目组名称
const currentItems = ref<'main' | 'appearance'>('main');

// 当前项目组
const items = computed(() => {
  switch (currentItems.value) {
    case 'appearance':
      return appearanceItems.value;
    default:
      return mainItems.value;
  }
});
</script>
