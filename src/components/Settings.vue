<template>
  <div>
    <PaneHeader>
      <template #icon>
        <Icon :height="56" :width="56">
          <Settings size="32" />
        </Icon>
      </template>
      <template #title>Game settings</template>
      <template #sub-title>customize your game</template>
    </PaneHeader>
    <div class="flex flex-col gap-6 bg-white border border-gray-50 rounded-xl p-4 shadow mb-4">
      <SettingsRow v-for="setting in gameSettings" :key="setting.id">
        <template #logo>
          <component :is="setting.icon" size="18" />
        </template>
        <template #title>
          {{ setting.title }}
        </template>
        <template #sub-title>
          {{ setting.info }}
        </template>

        <template #dropdown>
          <select class="w-full" v-model="settings[setting.key]">
            <option v-for="option in setting.options" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
        </template>
      </SettingsRow>
    </div>
    <InfoPane>
      <template #icon>
        <Lightbulb size="32" color="var(--color-primary)" />
      </template>
      <template #title>How to play</template>
      <template #subtext
        >Find the only matching icon between the cards. Be fast - time is ticking!</template
      >
    </InfoPane>
  </div>
</template>

<script setup lang="ts">
import { Settings, Lightbulb } from '@lucide/vue'
import { gameSettings } from '@/data/settings'
import { useSettingsStore } from '@/stores/useSettingsStore'
import SettingsRow from '@/components/SettingsRow.vue'
import Icon from '@/components/Icon.vue'
import InfoPane from '@/components/InfoPane.vue'
import PaneHeader from '@/components/PaneHeader.vue'
const settings = useSettingsStore()
</script>

<style scoped></style>
