<template>
  <div>
    <div class="flex gap-4">
      <Icon :height="56" :width="56">
        <Settings size="32" />
      </Icon>
      <div class="mb-6">
        <h2 class="font-boldbold m-0">Game settings</h2>
        <h3 class="font-normal text-sm m-0">customize your game</h3>
      </div>
    </div>
    <div class="flex flex-col gap-4 bg-white border border-gray-50 rounded-xl p-4 shadow">
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
  </div>
</template>

<script setup lang="ts">
import { Settings } from '@lucide/vue'
import { gameSettings } from '@/data/settings'
import { useSettingsStore } from '@/stores/useSettingsStore'
import SettingsRow from '@/components/SettingsRow.vue'
import Icon from './Icon.vue'

const settings = useSettingsStore()
</script>

<style scoped></style>
