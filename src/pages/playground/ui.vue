<template>
  <div class="flex-1 flex flex-col items-center justify-center">
    <div class="flex gap-4 items-center">
      <UKbd>{{ metaSymbol }}</UKbd>
      <UKbd>O</UKbd>
    </div>
    <UModal v-model="isModalOpen">
      <UCard>宁皓网</UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const { metaSymbol } = useShortcuts();

const isModalOpen = ref(false);

defineShortcuts({
  meta_o: {
    handler: () => {
      isModalOpen.value = true;
    },
  },
});
</script>
