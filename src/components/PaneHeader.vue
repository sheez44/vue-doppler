<template>
  <div class="flex gap-4 relative">
    <slot name="icon"></slot>
    <div class="mb-6">
      <h2 class="font-bold m-0"><slot name="title"></slot></h2>
      <h3 class="font-normal text-sm m-0"><slot name="sub-title"></slot></h3>
    </div>
    <button @click="$emit('click')">X</button>
  </div>
</template>

<script setup lang="ts">
defineEmits<{ click: [] }>()
</script>

<style scoped></style>
