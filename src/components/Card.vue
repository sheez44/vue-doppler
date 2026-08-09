<template>
  <div>
    <ul class="list-none p-0 grid grid-cols-3">
      <li v-for="(icon, index) in icons" :key="index">
        <Icon :icon="icon" :class="playerClass"></Icon>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { IconName } from '@/data/icons'
import Icon from './Icon.vue'
import { computed } from 'vue'

const playerClass = computed(() => {
  return type === 'player'
    ? 'hover:scale-120 cursor-pointer hover:text-blue-500 transition-colors'
    : 'text-gray-800'
})

const { icons, type } = defineProps<{
  icons: IconName[]
  type: 'reference' | 'player'
}>()
</script>

<style scoped></style>
