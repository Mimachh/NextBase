'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "../../style/title.css"


interface Props {
    text: string;
    className?: string;
}

const quote = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  
  const singleLetter = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const Title = ({ text, className = '' }: Props) => {




    return (
      <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
        <motion.h1
          className={`inline-block w-full text-dark font-bold text-8xl ${className} dark:text-light`}
          variants={quote}
          initial='initial'
          animate='animate'
        //   whileInView='animate'
        >
          {text.split('').map((letter :string, index: number) => (
            <motion.span key={index}  className={`inline-block title
             ${index === 3 ? 'title-forth-letter' : ''}
             ${index === 0 ? 'title-first-letter' : ''}
             `} 
            variants={singleLetter}

            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    );
  };
  
  export default Title;