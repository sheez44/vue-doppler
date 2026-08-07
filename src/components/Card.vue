<template>
  <div>
    <ul class="list-none p-0">
      <li v-for="(icon, index) in icons" :key="index">
        {{ icon }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { IconName } from '@/data/icons'

defineProps<{
  icons: IconName[]
}>()
</script>

<style scoped></style>
