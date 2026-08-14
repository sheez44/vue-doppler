// stores/settings.ts

import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    timerPerRound: 8,
    numberOfRounds: 10,
    iconsPerCard: 8,
  }),

  actions: {
    reset() {
      this.timerPerRound = 8
      this.numberOfRounds = 10
      this.iconsPerCard = 5
    },
  },
})
