<template>
  <li class="grid grid-cols-[25px_3fr_1fr_1fr_1fr] text-left">
    <div>
      <span
        :class="{
          'bg-amber-500': rank === 1,
          'bg-slate-300': rank === 2,
          'bg-amber-700': rank === 3,
        }"
      >
        {{ rank }}
      </span>
    </div>
    <div class="flex gap-2">
      <img :src="player.profile" height="32" width="32" class="rounded-full" /> {{ player.name }}
    </div>

    <div>{{ player.score }}</div>
    <div>{{ player.time }}</div>
  </li>
</template>

<script setup lang="ts">
import type { LeaderBoard } from '@/types/leaderboard'

defineProps<{
  player: LeaderBoard
  rank: number
}>()
</script>

<style scoped></style>
