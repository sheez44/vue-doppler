<template>
  <div
    :class="[bgcolor, 'inline-flex rounded-full text-white justify-center items-center']"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const {
  height = 48,
  width = 48,
  bgcolor = 'bg-primary',
} = defineProps<{
  height?: number
  width?: number
  bgcolor?: string
}>()
</script>
