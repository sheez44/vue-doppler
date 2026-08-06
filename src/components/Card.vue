<template>
  <div>Card</div>
</template>

<script setup lang="ts">
import { useDeck } from '@/composables/useDeck'

const { generateDeck } = useDeck()

generateDeck()
</script>

<style scoped></style>
