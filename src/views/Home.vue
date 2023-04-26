<template>
  <body>
    <div id="darkdock" class = "dock-container darkdock">
      <DarkDock @dark-toggle="darkToggle"/>
    </div>
    <div id="lightdock" class = "dock-container lightdock">
      <LightDock @light-toggle="lightToggle"/>
    </div>
    <div id="colordock" class = "dock-container colordock">
      <ColorDock @color-toggle="colorToggle"/>
    </div>
  </body>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import DarkDock from '@/components/DarkDock.vue';
  import LightDock from '@/components/LightDock.vue';
  import ColorDock from '@/components/ColorDock.vue';

  let darkdock: HTMLElement | null = null;
  let lightdock: HTMLElement | null = null;
  let colordock: HTMLElement | null = null;

  onMounted(() => {
    darkdock = document.getElementById('darkdock');
    lightdock = document.getElementById('lightdock');
    colordock = document.getElementById('colordock');
  });

  function darkToggle() {
    document.documentElement.setAttribute('data-theme', 'light');
    if (darkdock && lightdock && colordock) {
      darkdock.style.display = 'none';
      lightdock.style.display = 'flex';
      colordock.style.display = 'none';
      console.log(lightdock.style.display);
    }
  }
  function lightToggle() {
    document.documentElement.setAttribute('data-theme', 'color');
    if (darkdock && lightdock && colordock) {
      darkdock.style.display = 'none';
      lightdock.style.display = 'none';
      colordock.style.display = 'flex';
      console.log(lightdock.style.display);
    }
  }
  function colorToggle() {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (darkdock && lightdock && colordock) {
      darkdock.style.display = 'flex';
      lightdock.style.display = 'none';
      colordock.style.display = 'none';
      console.log(lightdock.style.display);
    }
  }
</script>

<style scoped lang = "scss">
  body {
    display: flex;
    flex-direction: column;
  }
  .dock-container {
    font-weight: 700;
    margin-top: auto;
    // display: flex;
  }

  .darkdock {
    display: flex;
  }
  .lightdock {
    display: none;
  }

  .colordock {
    display: none;
  }
</style>
