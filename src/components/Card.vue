<template>
  <div>Card</div>
</template>

<script setup lang="ts">
import { useCards } from '@/composables/useCards'

const { generateCards } = useCards()

const cards = generateCards()

console.log(cards)
</script>

<style scoped></style>
