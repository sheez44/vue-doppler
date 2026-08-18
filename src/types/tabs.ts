import type { Component } from 'vue'

export type TabKey = 'all-time' | 'this-week' | 'this-month'

export interface Tab {
  key: TabKey
  label: string
  component: Component
}
