<template>
  <div class="bg-primary-lighter shadow flex items-center gap-4 rounded-xl p-2">
    <div class="text-primary">
      <slot v-if="$slots.icon" name="icon"></slot>
    </div>
    <div>
      <p class="font-bold text-primary mb-1"><slot name="title"></slot></p>
      <p class="text-xs mt-0"><slot name="subtext"></slot></p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
