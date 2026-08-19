<template>
  <div>
    <ul class="m-0 list-none p-0">
      <LeaderboardRow
        v-for="(player, index) in rankedPlayers"
        :key="player.id"
        :rank="index + 1"
        :player="player"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import LeaderboardRow from '@/components/Leaderboard/LeaderboardRow.vue'
import { ref, onMounted, computed } from 'vue'
import type { LeaderBoard } from '@/types/leaderboard'

const loading = ref(false)
const players = ref<LeaderBoard[]>([])
const fetchLeaderboard = async () => {
  loading.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const response = await fetch('http://localhost:3333/players')
    players.value = await response.json()
  } finally {
    loading.value = false
  }
}

const rankedPlayers = computed(() => {
  return [...players.value].sort((a, b) => b.score - a.score).sort((a, b) => b.time - a.time)
})
onMounted(() => {
  fetchLeaderboard()
})
</script>

<style scoped></style>
