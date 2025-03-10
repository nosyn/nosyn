'use client';

import SortingVisualizer from './_components/sorting-visualizer';

export default function Page() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center mb-6'>
        Sorting Algorithm Visualizer
      </h1>
      <SortingVisualizer />
    </div>
  );
}
