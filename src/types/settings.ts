import type { Component } from 'vue'

export interface GameSettings {
  id: number
  title: string
  info: string
  options: number[]
  icon: Component
  key: string
}
