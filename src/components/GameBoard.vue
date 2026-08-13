<template>
  <div>
    <h1>Current round is: {{ currentRound }}</h1>
    <ProgressBar :settings="settings" :round="currentRound" />
    <div class="grid grid-cols-2 gap-4">
      <Card :icons="cards.cardA" type="reference"></Card>
      <Card :icons="cards.cardB" type="player"></Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue'
import ProgressBar from './ProgressBar.vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '@/stores/useGameStore'

const game = useGameStore()

const { cards, currentRound, settings } = storeToRefs(game)
const { startGame } = game

startGame()
</script>

<style scoped></style>
