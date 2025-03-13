'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import { algorithms } from '../algorithms';

export default function AlgorithmList() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredAlgorithms =
    activeTab === 'all'
      ? algorithms
      : algorithms.filter((algo) => algo.category === activeTab);

  return (
    <div className='space-y-8'>
      <Tabs defaultValue='all' value={activeTab} onValueChange={setActiveTab}>
        <TabsList className='mb-4'>
          <TabsTrigger value='all'>All</TabsTrigger>
          <TabsTrigger value='sorting'>Sorting</TabsTrigger>
          <TabsTrigger value='searching'>Searching</TabsTrigger>
          <TabsTrigger value='graph'>Graph</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className='grid gap-6'>
        {filteredAlgorithms.map((algorithm) => (
          <Card className='overflow-hidden p-4' key={algorithm.id}>
            <Collapsible>
              <CardHeader className='cursor-pointer'>
                <div className='flex justify-between items-center'>
                  <div>
                    <CardTitle className='flex items-center gap-2'>
                      <p>{algorithm.name}</p>
                      <Badge variant='outline'>{algorithm.category}</Badge>
                      <Badge variant='outline'>
                        {algorithm.timeComplexity}
                      </Badge>
                    </CardTitle>
                    <CardDescription className='mt-1'>
                      {algorithm.description}
                    </CardDescription>
                  </div>

                  <CollapsibleTrigger asChild>
                    <Button
                      variant='ghost'
                      size='sm'
                      disabled={!algorithm.isActive}
                    >
                      <ChevronsUpDown className='h-4 w-4' />
                      <span className='sr-only'>Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
              </CardHeader>

              <CollapsibleContent>
                <CardContent>{algorithm.visualizer}</CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>
    </div>
  );
}
