import type { GameSettings } from '@/types/settings'
import { Hourglass, Dices, Star } from '@lucide/vue'

export const gameSettings: GameSettings[] = [
  {
    id: 1,
    title: 'Timer per round',
    info: 'How many seconds per round?',
    options: [5, 8, 11],
    icon: Hourglass,
    key: 'timerPerRound',
  },
  {
    id: 2,
    title: 'Number of rounds',
    info: 'How many rounds to play',
    options: [6, 8, 10, 12, 15, 20, 25],
    icon: Dices,
    key: 'numberOfRounds',
  },
  {
    id: 3,
    title: 'Difficulty (icons per card)',
    info: 'More icons = harder!',
    options: [4, 5, 6, 7, 8],
    icon: Star,
    key: 'iconsPerCard',
  },
]
