<script setup lang="ts">
import { useBoardStore } from '@/stores/board';
import { storeToRefs } from 'pinia';

const store = useBoardStore();
const { clicked } = storeToRefs(store);
</script>

<template>
  <div class="sidebar-history">
    <div class="sidebar-history-grid">
      <div class="coordinate" v-for="(c, idx) in clicked">
        <span class="index">{{ `${idx}. ` }}</span>
        <span>{{ c }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar-history {
  width: 100%;
  height: 100%;
  max-height: 100vh;
  overflow: scroll;
}

.sidebar-history-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.coordinate {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1rem 0.5rem;

  &:nth-child(2n) {
    background-color: #ededef;
  }

  & .index {
    opacity: 0.6;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
}
</style>
