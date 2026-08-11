<template>
  <div>
    <h1>Current round is: {{ currentRound }}</h1>
    <div class="grid grid-cols-2 gap-4">
      <Card :icons="cards.cardA" type="reference"></Card>
      <Card :icons="cards.cardB" type="player" v-on:handleIconClick="handleClick"></Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue'

import { useGame } from '@/composables/useGame'

const { validateClick, startGame, cards, currentRound } = useGame()

function handleClick(icon: string) {
  validateClick(icon)
}

startGame()
</script>

<style scoped></style>
