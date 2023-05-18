<script setup lang="ts">
// import { ref } from 'vue';

defineProps<{ msg: string }>();

// const count = ref(0);
</script>

<template>
  <div class="board-layout-chessboard">
    <div class="board"></div>
  </div>
</template>
<!-- <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div> -->

<style scoped lang="scss">
.board-layout-chessboard {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: calc(100vh - 8rem);

  @media (max-width: 960px) {
    max-width: none;
    align-items: flex-start;
  }
}
.board {
  position: relative;
  background-image: url('../assets/chessboard.png');
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 3px;
  aspect-ratio: 1 / 1;
  width: 100%;
}
</style>
