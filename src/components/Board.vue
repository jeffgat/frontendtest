<script setup lang="ts">
import { BoardCoordinates } from '@/components';
import { useBoardStore } from '@/stores/board';
import { storeToRefs } from 'pinia';

// constants. reverse colCoords because 1 is at the bottom of the board
const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const NUMBERS = ['8', '7', '6', '5', '4', '3', '2', '1'];

const store = useBoardStore();
const { highlighted } = storeToRefs(store);
const { saveClick } = store;

const getHighlightPosition = (highlight: string) => {
  const rowIdx = LETTERS.indexOf(highlight[0]);
  const colIdx = NUMBERS.indexOf(highlight[1]);
  return {
    transform: `translate(${100 * rowIdx}%, ${100 * colIdx}%)`
  };
};

const handleClick = (e: MouseEvent) => {
  // get dimensions and click position
  const chessBoardEl = e.target as HTMLElement;
  const area = chessBoardEl.getBoundingClientRect();
  const square = area.width / 8;
  const rowClickPos = e.clientX - area.x;
  const colClickPos = e.clientY - area.y;

  // Math.max to prevent negative numbers returning undefined
  const rowIdx = Math.max(0, Math.floor(rowClickPos / square));
  const colIdx = Math.max(0, Math.floor(colClickPos / square));

  const letter = LETTERS[rowIdx];
  const number = NUMBERS[colIdx];

  const squareClicked = `${letter}${number}`;
  saveClick(squareClicked);
};
</script>

<template>
  <div class="board-layout-chessboard">
    <div class="board" @click="handleClick">
      <BoardCoordinates />
      <div class="highlight" v-for="h in highlighted" :style="getHighlightPosition(h)" />
    </div>
  </div>
</template>

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
  width: inherit;
  aspect-ratio: 1 / 1;
  border-radius: 3px;
  background-image: url('../assets/board.png');
  background-size: 100%;
  background-repeat: no-repeat;
}

.highlight {
  position: absolute;
  height: 12.5%;
  width: 12.5%;
  background-color: var(--globalColorHighlight);
  opacity: 0.5;
  pointer-events: none;
}
</style>
