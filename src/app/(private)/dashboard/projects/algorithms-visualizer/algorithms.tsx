import { BubbleSortVisualizer } from './_components/visualizers/sorts/bubble-sort/visualizer';

export interface Algorithm {
  id: string;
  name: string;
  isActive: boolean;
  description: string;
  category: 'sorting' | 'searching' | 'graph';
  timeComplexity: string;
  visualizer?: React.ReactElement;
}

export const algorithms: Algorithm[] = [
  {
    id: 'bubble-sort',
    name: 'Bubble Sort',
    isActive: true,
    description:
      'Simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
    category: 'sorting',
    timeComplexity: 'O(n²)',
    visualizer: <BubbleSortVisualizer />,
  },
  {
    id: 'quick-sort',
    name: 'Quick Sort',
    isActive: false,
    description:
      'Efficient, divide-and-conquer sorting algorithm that selects a pivot element and partitions the array around it.',
    category: 'sorting',
    timeComplexity: 'O(n log n)',
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    isActive: false,
    description:
      'Search algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.',
    category: 'searching',
    timeComplexity: 'O(log n)',
  },
  {
    id: 'dijkstra',
    name: "Dijkstra's Algorithm",
    isActive: false,
    description:
      'Algorithm for finding the shortest paths between nodes in a graph, which may represent road networks or computer networks.',
    category: 'graph',
    timeComplexity: 'O(|E| + |V|log|V|)',
  },
];
