<template>
  <div>
    <div>
      <Settings />
      <h2 class="bold">Game settings</h2>
      <h3>customize your game</h3>
    </div>

    <div v-for="setting in gameSettings" :key="setting.id">
      <component :is="setting.icon" />

      <h3>{{ setting.title }}</h3>
      <p>{{ setting.info }}</p>

      <select v-model="settings[setting.key]">
        <option v-for="option in setting.options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Settings } from '@lucide/vue'
import { gameSettings } from '@/data/settings'
import { useSettingsStore } from '@/stores/useSettingsStore'

const settings = useSettingsStore()
</script>

<style scoped></style>
