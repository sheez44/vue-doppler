<template>
  <li class="grid grid-cols-[25px_3fr_1fr_1fr] text-left items-center py-2 gap-2">
    <div>
      <span
        :class="{
          'bg-amber-500': rank === 1,
          'bg-slate-300': rank === 2,
          'bg-amber-700': rank === 3,
          'w-6 h-6 rounded-full block text-center text-white': isPodium,
        }"
      >
        {{ rank }}
      </span>
    </div>
    <div class="flex gap-2 items-center">
      <img :src="player.profile" height="32" width="32" class="rounded-full" />
      {{ player.username }}
    </div>

    <div class="font-semibold">{{ player.score }}/10</div>
    <div>{{ formatTime(player.time) }}</div>
  </li>
</template>

<script setup lang="ts">
import type { LeaderBoard } from '@/types/leaderboard'
import { formatTime } from '@/utils/general'
import { computed } from 'vue'

const { rank } = defineProps<{
  player: LeaderBoard
  rank: number
}>()

const isPodium = computed(() => rank <= 3)
</script>

<style scoped></style>
