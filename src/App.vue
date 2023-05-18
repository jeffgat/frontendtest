<script setup lang="ts">
import { Board, SideBar } from '@/components';
import '@/assets/globals.scss';
</script>

<template>
  <main>
    <div class="board-layout">
      <Board msg="CHESS BOARD" />
      <SideBar />
    </div>
  </main>
</template>

<style scoped lang="scss">
.board-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 4rem;
  height: calc(100vh - 8rem);

  @media (max-width: 960px) {
    height: 100%;
    flex-direction: column;
    margin: 2rem;
  }
}
</style>
