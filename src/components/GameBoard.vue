<template>
  <div>
    <h1>Current round is: {{ currentRound }}</h1>
    <ProgressBar :settings="settings" :round="currentRound" @timeout="handleTimeout" />
    <div class="grid grid-cols-2 gap-4">
      <Card :icons="cards.cardA" type="reference"></Card>
      <Card :icons="cards.cardB" type="player" v-on:handleIconClick="handleClick"></Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue'
import ProgressBar from './ProgressBar.vue'

import { useGame } from '@/composables/useGame'

const { validateClick, startGame, cards, currentRound, settings, endRound } = useGame()

function handleClick(icon: string) {
  validateClick(icon)
}

function handleTimeout() {
  endRound()
}

startGame()
</script>

<style scoped></style>
