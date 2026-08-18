<template>
  <div>
    <ul class="flex flex-nowrap list-none m-0 p-0">
      <li v-for="(tab, index) in tabs" :key="tab.key">
        <TabButton
          @click="currentActive(tab)"
          class="cursor-pointer"
          :tab="tab"
          :class="{
            'rounded-l-lg': index === 0,
            'rounded-r-lg': index === tabs.length - 1,
            'bg-white': activeTab != tab.key,
            'bg-primary text-white': activeTab === tab.key,
          }"
        />
      </li>
    </ul>
    <component :is="activeTabComponent"></component>
  </div>
</template>

<script setup lang="ts">
import AllTime from './Leaderboard/AllTime.vue'
import ThisMonth from './Leaderboard/ThisMonth.vue'
import ThisWeek from './Leaderboard/ThisWeek.vue'
import TabButton from './TabButton.vue'
import type { Tab } from '@/types/tabs.ts'
import { ref, computed } from 'vue'
import type { TabKey } from '@/types/tabs.ts'

function currentActive(tab: Tab) {
  activeTab.value = tab.key
}

const activeTab = ref<TabKey>('all-time')
const activeTabComponent = computed(() => {
  return tabs.find((tab) => tab.key === activeTab.value)?.component
})

const tabs: Tab[] = [
  {
    key: 'all-time',
    label: 'All time',
    component: AllTime,
  },
  {
    key: 'this-week',
    label: 'This Week',
    component: ThisMonth,
  },
  {
    key: 'this-month',
    label: 'This Month',
    component: ThisWeek,
  },
]
</script>

<style scoped></style>
