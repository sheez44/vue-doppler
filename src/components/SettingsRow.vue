<template>
  <div class="grid grid-cols-[40px_1fr_50px] gap-4">
    <Icon :height="40" :width="40">
      <slot name="logo"></slot>
    </Icon>

    <div>
      <div class="font-bold text-sm"><slot name="title"></slot></div>
      <div class="text-xs"><slot name="sub-title"></slot></div>
    </div>
    <div class="h-8 w-full">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'
</script>

<style scoped></style>
