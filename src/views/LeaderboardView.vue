<template>
  <div class="p-pane">
    <PaneHeader>
      <template #icon>
        <Icon :height="56" :width="56">
          <Trophy size="32" />
        </Icon>
      </template>
      <template #title>Leaderboard</template>
      <template #sub-title>Top players</template>
    </PaneHeader>
    <Tabs />
  </div>
</template>

<script setup lang="ts">
import PaneHeader from '@/components/PaneHeader.vue'
import { Trophy } from '@lucide/vue'
import Icon from '@/components/Icon.vue'
import Tabs from '@/components/Tabs.vue'
</script>

<style scoped></style>
