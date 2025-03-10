'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { waitFor } from '@/lib/utils';

const SortingVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [algorithm, setAlgorithm] = useState<string>('bubbleSort');
  const [isSorting, setIsSorting] = useState<boolean>(false);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = (): void => {
    const newArray = Array.from(
      { length: 20 },
      () => Math.floor(Math.random() * 100) + 10
    );
    setArray(newArray);
  };

  const bubbleSort = async (): Promise<void> => {
    const arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if ((arr[j] as number) > (arr[j + 1] as number)) {
          [arr[j], arr[j + 1]] = [arr[j + 1] as number, arr[j] as number];
          setArray(arr);
          await waitFor(100);
          setArray([...arr]); // Ensure array is updated with correct types
        }
      }
    }
  };

  const handleSort = (): void => {
    setIsSorting(true);

    if (algorithm === 'bubbleSort') {
      bubbleSort();
    }

    setIsSorting(false);

    // Add more algorithms here
  };

  return (
    <Card className='p-6 max-w-4xl mx-auto mt-10'>
      <div className='flex gap-4 justify-center mb-6'>
        <Button onClick={resetArray} disabled={isSorting}>
          Generate New Array
        </Button>
        <Select
          value={algorithm}
          onValueChange={setAlgorithm}
          disabled={isSorting}
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select Algorithm' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='bubbleSort'>Bubble Sort</SelectItem>
            {/* Add more algorithms here */}
          </SelectContent>
        </Select>
        <Button onClick={handleSort} disabled={isSorting}>
          Sort
        </Button>
      </div>
      <div className='flex justify-center items-end h-96'>
        <AnimatePresence>
          {array.map((value, idx) => (
            <motion.div
              key={idx}
              className='bg-primary w-4 mx-1'
              style={{ height: `${value}px` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          ))}
        </AnimatePresence>
      </div>
    </Card>
  );
};

export default SortingVisualizer;
