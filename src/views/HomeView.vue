<template>
  <div class="flex flex-col h-full p-4">
    <GameSettings />

    <InfoPane>
      <template #icon>
        <Lightbulb size="32" color="var(--color-primary)" />
      </template>
      <template #title>How to play</template>
      <template #subtext
        >Find the only matching icon between the cards. Be fast - time is ticking!</template
      >
    </InfoPane>

    <RouterLink
      to="/game"
      class="bg-primary text-white hover:bg-primary-light no-underline rounded-2xl inline text-center py-2 mt-4"
      >Start game</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
import InfoPane from '@/components/InfoPane.vue'
import GameSettings from '@/components/GameSettings.vue'
import { Lightbulb } from '@lucide/vue'
</script>

<style scoped></style>
