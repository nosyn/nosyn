'use client';

import AlgorithmList from './_components/algorithm-list';

export default function AlgorithmsVisualizerPage() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center mb-6'>
        Sorting Algorithm Visualizer
      </h1>
      <AlgorithmList />
    </div>
  );
}
