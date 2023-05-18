import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBoardStore = defineStore('board', () => {
  const clicked = ref<string[]>([]);
  const highlighted = ref<string[]>([]);

  function saveClick(square: string) {
    clicked.value = [...clicked.value, square];

    if (highlighted.value.includes(square)) {
      highlighted.value = highlighted.value.filter((h) => h !== square);
    } else {
      highlighted.value = [...highlighted.value, square];
    }
  }

  function $reset() {
    clicked.value = [];
    highlighted.value = [];
  }

  return { clicked, highlighted, saveClick, $reset };
});
