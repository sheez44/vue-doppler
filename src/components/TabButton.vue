<template>
  <div class="px-8 py-1 border border-gray-200">
    {{ tab.label }}
  </div>
</template>

<script setup lang="ts">
import type { Tab } from '@/types/tabs.ts'

const { tab } = defineProps<{
  tab: Tab
}>()
</script>

<style scoped></style>
