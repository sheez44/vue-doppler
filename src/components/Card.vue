<template>
  <ul class="relative w-100 h-100 max-w-full list-none p-0">
    <li
      v-for="(icon, index) in icons"
      :key="index"
      class="absolute"
      :style="{
        left: `${positions[index].x}%`,
        top: `${positions[index].y}%`,
        transform: 'translate(-50%, -50%)',
      }"
      @click="$emit('handleIconClick', icon, index)"
    >
      <Icon :icon="icon" :class="playerClass" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { IconName } from '@/data/icons'
import Icon from './Icon.vue'
import { computed } from 'vue'

const positions = [
  { x: 50, y: 50 }, // center
  { x: 32, y: 22 },
  { x: 70, y: 25 },
  { x: 18, y: 50 },
  { x: 82, y: 50 },
  { x: 30, y: 78 },
  { x: 70, y: 78 },
  { x: 50, y: 12 },
]

const playerClass = computed(() => {
  return type === 'player'
    ? 'hover:scale-120 cursor-pointer hover:text-blue-500 transition-colors'
    : 'text-gray-800'
})

const { icons, type } = defineProps<{
  icons: IconName[]
  type: 'reference' | 'player'
}>()

defineEmits<{
  handleIconClick: [icon: string, index: number]
}>()
</script>

<style scoped></style>
