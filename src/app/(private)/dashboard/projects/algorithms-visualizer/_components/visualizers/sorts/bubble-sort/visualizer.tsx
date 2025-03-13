'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useBubbleSortStore } from './store';
import { Button } from '@/components/ui/button';
import { PlayIcon, RefreshCwIcon, StopCircleIcon } from 'lucide-react';

export function BubbleSortVisualizer() {
  const { elements, execute, isExecuting, reset, stop, sorted } =
    useBubbleSortStore();

  return (
    <div className='space-y-2'>
      <div className='w-full h-[200px] flex items-end justify-center gap-2'>
        <AnimatePresence>
          {elements.map((value, idx) => (
            <div key={idx} className='flex flex-col items-center gap-2'>
              <div className='h-ful bg-primary'>
                <motion.div
                  className=' w-4 mx-1'
                  style={{ height: `${value}px` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 5000 }} // Add delay based on index
                />
              </div>
              <span>{value}</span>
            </div>
          ))}
        </AnimatePresence>
      </div>
      {sorted && <div>Array is sorted!</div>}
      <div className='flex gap-3'>
        <Button onClick={() => execute()} disabled={isExecuting || sorted}>
          <PlayIcon className='size-4 mr-2' />
          Run
        </Button>
        <Button
          variant='destructive'
          onClick={() => stop()}
          disabled={!isExecuting || sorted}
        >
          <StopCircleIcon className='size-4 mr-2' />
          Stop
        </Button>
        <Button variant='outline' onClick={() => reset()}>
          <RefreshCwIcon className='size-4 mr-2' />
          Reset
        </Button>
      </div>
    </div>
  );
}
