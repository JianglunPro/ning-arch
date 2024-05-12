<template>
  <div>
    <div v-if="title" class="font-normal text-sm text-white dark:text-black mb-3">
      {{ title }}
    </div>
    <UButton block size="xl" :variant="variant" :to="to" :ui="ui">
      <slot>{{ label }}</slot>
    </UButton>
    <div
      v-if="description || $slots.description"
      class="text-white dark:text-black text-xs py-2"
    >
      <slot name="description">{{ description }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  label?: string;
  variant?: 'solid' | 'outline';
  to?: string;
  title?: string;
  description?: string;
};

const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
});

const outline = {
  variant: {
    outline:
      // 修改前
      //'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
      'ring-1 ring-inset ring-current text-{color}-400 dark:text-{color}-400 hover:opacity-80 disabled:bg-transparent dark:hover:opacity-80 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
  },
};

const ui = computed(() => {
  if (props.variant === 'outline') {
    return outline;
  }
});
</script>
