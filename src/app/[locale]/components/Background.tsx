'use client';

import { TwitterIcon } from './Icons'

import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Background() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      x.set(clientX);
      y.set(clientY);
    };


  return (
 
        <div 
        className='w-6 h-auto fixed bottom-0 left-0 ml-4 mb-4'

        ><TwitterIcon className={"dark:fill-primary fill-primaryDark"} />
        </div>

  )
}
