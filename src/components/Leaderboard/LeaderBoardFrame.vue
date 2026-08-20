<template>
  <div>
    <ul class="m-0 list-none p-0 divide-y divide-gray-200">
      <li v-if="loadingState">loading......</li>
      <LeaderboardRow
        v-else
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
import { useLeaderBoard } from '@/composables/useLeaderBoard'

const { loading, fetchLeaderboard, players } = useLeaderBoard()

const loadingState = ref(loading || false)

const rankedPlayers = computed(() =>
  [...players.value].sort((a, b) => (b.score !== a.score ? b.score - a.score : a.time - b.time)),
)
onMounted(() => {
  fetchLeaderboard()
})
</script>

<style scoped></style>
