import { waitFor } from '@/lib/utils';
import { create } from 'zustand';
import { bubbleSort } from './algorithm';
import { createObservableArray } from '@/lib/observer';

const DEFAULT_NUMBER_OF_ELEMENTS = 20;

type BubbleSortStore = {
  elements: number[];
  sorted: boolean;
  numberOfElements: number;
  isExecuting: boolean;
  stop: () => void;
  execute: () => Promise<void>;
  reset: () => void;
};

export const useBubbleSortStore = create<BubbleSortStore>((set, get) => ({
  isExecuting: false,
  sorted: false,
  elements: Array.from(
    { length: DEFAULT_NUMBER_OF_ELEMENTS },
    () => Math.floor(Math.random() * 100) + 1
  ),
  numberOfElements: DEFAULT_NUMBER_OF_ELEMENTS,
  execute: async () => {
    if (get().isExecuting) return;

    const steps: number[][] = [];
    const observableArr = createObservableArray(get().elements, (arr, step) => {
      console.log(`Step ${step}:`, arr);
      steps.push(arr);
    });

    bubbleSort(observableArr);

    set({ isExecuting: true });

    for (let i = 0; i < steps.length; i++) {
      if (!get().isExecuting) return;
      set({ elements: steps[i] });
      await waitFor(100);
    }

    set({ isExecuting: false, sorted: true });
  },
  stop: () => set({ isExecuting: false }),
  reset: () => {
    set({
      elements: Array.from(
        { length: get().numberOfElements },
        () => Math.floor(Math.random() * 100) + 1
      ),
      isExecuting: false,
      sorted: false,
    });
  },
}));
