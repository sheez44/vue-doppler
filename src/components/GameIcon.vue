<template>
  <component :is="icons[toPascalCase(icon)]" :size="size" v-if="icons[toPascalCase(icon)]" />
  <span v-else> Missing icon: {{ icon }} → {{ toPascalCase(icon) }} </span>
</template>

<script setup lang="ts">
import * as icons from '@lucide/vue'
import { toPascalCase } from '@/utils/general'
import { randomIntFromInterval } from '@/utils/random'

const size = randomIntFromInterval(15, 85)

const { icon } = defineProps<{
  icon: string
}>()
</script>

<style scoped></style>
