<template>
  <button @click="open = true">Open Settings</button>
  <Teleport to="body">
    <div v-if="open" class="modal w-full bg-white p-pane">
      <PaneHeader @click="open = false">
        <template #icon>
          <Icon :height="56" :width="56">
            <Settings size="32" />
          </Icon>
        </template>
        <template #title>Game settings</template>
        <template #sub-title>customize your game</template>
      </PaneHeader>
      <div class="flex flex-col gap-6 bg-white border border-gray-50 rounded-xl p-4 shadow mb-4">
        <GameSettingsRow v-for="setting in gameSettings" :key="setting.id">
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
        </GameSettingsRow>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Settings } from '@lucide/vue'
import { gameSettings } from '@/data/settings'
import { useSettingsStore } from '@/stores/useSettingsStore'
import GameSettingsRow from '@/components/GameSettingsRow.vue'
import Icon from '@/components/Icon.vue'
import PaneHeader from '@/components/PaneHeader.vue'
const settings = useSettingsStore()
const open = ref(false)
</script>

<style scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}
</style>
