<template>
  <div :class="[background, 'shadow rounded-xl p-pane']">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  background: {
    type: String,
    default: 'bg-white',
  },
})
</script>

<style scoped></style>
