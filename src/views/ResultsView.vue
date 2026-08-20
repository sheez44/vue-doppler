<template>
  <div class="p-pane flex flex-col gap-4">
    <div class="flex flex-col items-center">
      <Trophy size="120" color="var(--color-yellow)" />
      <div class="font-bold text-2xl my-1">Game Completed!</div>
      <div>Great job!</div>
    </div>
    <ResultsPanes />
    <InfoPane v-if="true">
      <template #icon>
        <PartyPopper size="32" color="var(--color-yellow)" />
      </template>
      <template #title>New Best Score!</template>
      <template #subtext>You beat your previous score of 6</template>
    </InfoPane>
    <div class="flex gap-4">
      <RouterLink :to="{ name: 'home' }" class="btn btn-inverted w-full"
        >Play Again <RotateCcw size="16" color="var(--color-black)"
      /></RouterLink>
      <RouterLink :to="{ name: 'leaderboard' }" class="btn btn-primary w-full"
        >View leaderboard <Trophy size="16"
      /></RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import ResultsPanes from '@/components/ResultsPanes.vue'
import InfoPane from '@/components/InfoPane.vue'
import { Trophy, PartyPopper, RotateCcw } from '@lucide/vue'
</script>

<style scoped></style>
