<script setup lang="ts">
// import { ref } from 'vue';

// const count = ref(0);
</script>

<template>
  <div class="board-layout-sidebar">
    <div class="board-layout-sidebar-content">SIDEBAR</div>
  </div>
</template>

<style scoped lang="scss">
.board-layout-sidebar {
  background-color: var(--globalBackground);
  border-radius: 0.5rem;
  color: var(--globalColorThemeMid);
  height: 100%;
  width: 25%;
  min-width: 300px;
  max-width: 500px;
  @media (max-width: 960px) {
    min-height: 300px;
    width: 100%;
    max-width: none;
    min-width: 0;
  }
}
.board-layout-sidebar-content {
  padding: 4rem;
}
</style>
