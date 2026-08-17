<template>
  <Pane class="flex items-center gap-4" background="bg-primary-lighter">
    <div>
      <slot v-if="$slots.icon" name="icon"></slot>
    </div>
    <div>
      <p class="font-bold text-primary mb-1"><slot name="title"></slot></p>
      <p class="text-xs mt-0"><slot name="subtext"></slot></p>
    </div>
  </Pane>
</template>

<script setup lang="ts">
import Pane from '@/components/Pane.vue'
</script>

<style scoped></style>
