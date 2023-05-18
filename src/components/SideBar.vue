<script setup lang="ts">
import { SideBarHistory } from '@/components';
import { Button } from '@/components/common';
import { useBoardStore } from '@/stores/board';

const store = useBoardStore();
const { $reset } = store;
</script>

<template>
  <div class="board-layout-sidebar">
    <div class="sidebar-content">
      <h3 class="sidebar-title">Click History</h3>
      <SideBarHistory />
      <div>
        <Button variant="primary" text="Clear" :action="$reset" />
        <span class="button-helper-text">Clears click history and all highlighted tiles</span>
      </div>
    </div>
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
.sidebar-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  height: calc(100% - 4rem);
}

.sidebar-title {
  margin: 0;
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: solid 1px var(--globalTertiaryBackground);
  color: var(--globalColorThemeHigh);
  font-size: 2.4rem;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
}

.button-helper-text {
  display: block;
  font-size: 1.4rem;
  margin-top: 0.5rem;
  opacity: 0.6;
}
</style>
