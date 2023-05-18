<script setup lang="ts">
import { useBoardStore } from '@/stores/board';
import { storeToRefs } from 'pinia';

const store = useBoardStore();
const { clicked } = storeToRefs(store);
console.log('clicked', clicked);
</script>

<template>
  <div class="sidebar-history">
    <div class="sidebar-history-grid">
      <div class="coordinate" v-for="c in clicked">
        {{ c }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar-history {
  width: 100%;
  height: 100%;
  overflow: scroll;
}

.sidebar-history-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.coordinate {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1rem 0.5rem;
  background-color: var(--globalColorNeutral50);
}
</style>
