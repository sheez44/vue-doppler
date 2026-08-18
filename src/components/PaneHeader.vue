<template>
  <div class="flex gap-4">
    <slot name="icon"></slot>
    <div class="mb-6">
      <h2 class="font-bold m-0"><slot name="title"></slot></h2>
      <h3 class="font-normal text-sm m-0"><slot name="sub-title"></slot></h3>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
