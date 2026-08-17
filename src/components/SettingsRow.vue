<template>
  <div
    class="relative first:before:hidden before:absolute before:-top-3 before:left-0 before:right-0 before:border-t before:border-gray-200"
  >
    <div class="grid grid-cols-[40px_1fr_50px] gap-4">
      <Icon :height="40" :width="40">
        <slot name="logo" />
      </Icon>

      <div>
        <div class="font-bold text-sm">
          <slot name="title" />
        </div>
        <div class="text-xs">
          <slot name="sub-title" />
        </div>
      </div>

      <div class="h-8 w-full">
        <slot name="dropdown" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'
</script>

<style scoped></style>
