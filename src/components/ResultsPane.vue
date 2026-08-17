<template>
  <div class="px-4 text-center min-w-32">
    <slot name="icon"></slot>

    <div class="font-bold">
      <slot name="title"></slot>
    </div>

    <div>
      <slot name="info"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
