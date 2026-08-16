<template>
  <div>
    <GameInfoHead />

    <div
      class="rounded-br-xl rounded-bl-xl grid grid-cols-2 gap-4 p-pane inset-shadow-sm inset-shadow-indigo-500/50 bg-primary-lighter"
    >
      <Card :icons="cards.cardA" type="reference"></Card>
      <Card :icons="cards.cardB" type="player"></Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue'

import { storeToRefs } from 'pinia'
import { useGameStore } from '@/stores/useGameStore'
import GameInfoHead from './GameInfoHead.vue'

const game = useGameStore()

const { cards } = storeToRefs(game)
const { startGame } = game

startGame()
</script>

<style scoped></style>
