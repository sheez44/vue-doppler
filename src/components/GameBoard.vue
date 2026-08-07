<template>
  <div class="grid grid-cols-2 gap-4">
    <Card :icons="cards.cardA"></Card>
    <Card :icons="cards.cardB"></Card>
  </div>
</template>

<script setup lang="ts">
import { useCards } from '@/composables/useCards'
import Card from '@/components/Card.vue'
import { ref } from 'vue'

const { generateCards } = useCards()

const cards = ref(generateCards())
</script>

<style scoped></style>
