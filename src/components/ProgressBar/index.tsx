import * as Progress from '@radix-ui/react-progress';
import { useState, useEffect } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(50);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
  //   }, 100);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
      <Progress.Root
        className='relative overflow-hidden bg-white rounded-full w-48 h-5'
        style={{ transform: 'translateZ(0)' }}
      >
        <Progress.Indicator
          className='bg-purple-600 w-full h-full transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
      <span className='font-medium text-white '>Meta de Fretes</span>
      <span className='font-medium text-white '>{progress} %</span>
    </div>
  );
}
