import { ref } from 'vue'
import type { LeaderBoard } from '@/types/leaderboard'

export function useLeaderBoard() {
  const FETCH_URL = 'http://localhost:3333/players'

  const loading = ref(false)
  const players = ref<LeaderBoard[]>([])

  async function fetchLeaderboard() {
    loading.value = true

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const response = await fetch(FETCH_URL)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }
      players.value = await response.json()
    } finally {
      loading.value = false
    }
  }

  async function addPlayerToLeaderBoard(data: object) {
    try {
      const response = await fetch(FETCH_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        console.log(`POST failed with ${response.status}.`)
      }
    } catch (err) {
      console.error('POST error', err)
    }
  }

  return {
    fetchLeaderboard,
    addPlayerToLeaderBoard,
    loading,
    players,
  }
}
