<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <TheHeader/>
  <RouterView />
</template>

<!-- Scoped Style -->
<style lang="scss" scoped>
  // Everything inside will only style any matching element within this file
  // Matching elements inside components are unaffected
</style>

<style lang="scss">
// Do not remove this comment
// NOTE: As long as there is content inside this block, _main.scss will apply its styling throughout the app
</style>