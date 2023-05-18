<script setup lang="ts">
defineProps<{
  variant: string;
  text: string;
  action: () => void;
}>();
</script>

<template>
  <button class="button" :class="variant" @click="action">{{ text }}</button>
</template>

<style scoped lang="scss">
.button {
  position: relative;
  border: 0;
  border: none;
  border-bottom: solid 1px rgba(102, 100, 99);
  border-radius: 0.5rem;
  box-shadow: none;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  height: 5rem;
  max-width: 100%;
  width: 100%;
  cursor: pointer;
  &.primary {
    background-color: #dbd9d7;
    color: #666463;
  }
  &:hover {
    background-color: #e7e6e5;
  }
  &:active {
    color: #474544;
    background-color: #c6c4c3;
  }
}
</style>
