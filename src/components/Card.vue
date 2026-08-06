<template>
  <div>Card</div>
</template>

<script setup lang="ts">
import { useDeck } from '@/composables/useDeck'

const { icons } = useDeck()

console.log(icons)
</script>

<style scoped></style>
