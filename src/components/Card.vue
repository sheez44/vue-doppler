<template>
  <div>
    <ul class="list-none p-0 grid grid-cols-3">
      <li v-for="(icon, index) in icons" :key="index">
        <Icon :icon="icon"></Icon>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { IconName } from '@/data/icons'
import Icon from './Icon.vue'

defineProps<{
  icons: IconName[]
}>()
</script>

<style scoped></style>
