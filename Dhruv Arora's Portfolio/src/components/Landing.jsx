import React, { useEffect } from 'react';

const Landing = () => {
  return (
    <div className='h-screen w-full relative flex justify-center items-center'>
      <div className='absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'>
        <div className='h-screen lg:h-[600px] w-screen lg:w-[800px] bg-gradient-to-r from-dark-red to-light-red blur-[180px] lg:blur-[250px] shadow-2xl rounded-full opacity-65 object-cover'></div>
      </div>
      <div className='text-center '>
        <h4 className='text-3xl lg:text-5xl text-orange font-acme'>
          Hey, I&apos;m
        </h4>
        <h1 className='text-6xl lg:text-8xl text-coke dark:text-white font-rowdies uppercase mt-2 mb-6 md:mt-6 [text-shadow:_0_20px_20px_white] dark:[text-shadow:_0_20px_20px_#22092C]'>
          Dhruv Arora
        </h1>
        <h2 className='h-[40px] md:h-[75px] relative overflow-y-hidden text-center'>
          <span className='text-2xl md:text-5xl text-orange font-acme gap-5 flex flex-col animate-verticalMarquee3 md:animate-verticalMarquee'>
            <span className='h-px'></span>
            <span>Web Developer</span>
            <span>Curious Learner</span>
            <span>Competitive Programmer</span>
            <span>Tech Enthusiast</span>
            <span>Open Source Contributor</span>
          </span>
          <span className='text-2xl md:text-5xl absolute left-0 right-0 top-5 text-orange font-acme flex flex-col gap-5 animate-verticalMarquee4 md:animate-verticalMarquee2'>
            <span>Web Developer</span>
            <span>Curious Learner</span>
            <span>Competitive Programmer</span>
            <span>Tech Enthusiast</span>
            <span>Open Source Contributor</span>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Landing;
