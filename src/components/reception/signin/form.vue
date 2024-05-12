<template>
  <form class="space-y-4">
    <div class="py-4">
      <ReceptionElementButton label="登录">
        <template #description>
          <div class="text-center">
            <UButton
              label="还没有账户，创建新账户"
              variant="link"
              color="white"
              size="xs"
              trailingIcon="i-solar-arrow-right-linear"
              to="/reception/signup"
            />
          </div>
        </template>
      </ReceptionElementButton>
    </div>
  </form>
</template>
