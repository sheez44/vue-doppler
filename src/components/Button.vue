<template>
  <button
    :class="[
      'rounded-lg px-4 py-2 font-medium transition-colors',
      variant === 'primary' && 'bg-primary text-white hover:bg-primary-light',
      variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
})
</script>

<style scoped></style>
