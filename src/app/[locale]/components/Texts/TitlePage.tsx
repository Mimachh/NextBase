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

  const TitlePage = ({ text, className = '' }: Props) => {




    return (
      <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
        <motion.h1
          className={`inline-block w-full text-primaryDark dark:text-primary font-bold text-3xl ${className}`}
          variants={quote}
          initial='initial'
          animate='animate'
        //   whileInView='animate'
        >
          {text.split('').map((letter :string, index: number) => (
            <motion.span key={index}  className={`inline-block title
             ${index === 2 ? 'text-primary dark:text-primaryDark hover:text-primaryDark hover:dark:text-primary' : ''}

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
  
  export default TitlePage;