import React from 'react';
// import photo from '../assets/Dhruv Arora.png';
import photo from '../assets/photo.png';

const About = () => {
  return (
    <div
      id='about'
      className='pb-0 md:pb-[100px] pt-[80px] md:pt-[100px] max-w-7xl mx-auto px-5 md:px-10 lg:px-20'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between gap-5 sm:gap-8 md:gap-10'>
        <div className='space-y-2 md:space-y-5 w-full md:w-1/2'>
          <h2 className='text-3xl md:text-5xl font-acme font-normal sm:font-bold text-coke dark:text-white'>
            Something <span className='text-orange'>About Me...&nbsp;</span>
          </h2>
          <p className='font-urbanist text-coke dark:text-gray-300 text-base md:text-lg lg:text-xl text-left md:text-justify font-medium'>
            Welcome! I&apos;m Dhruv Arora, a dynamic full-stack developer with a
            keen emphasis on crafting captivating frontend experiences. With a
            genuine passion for my work, I channel my enthusiasm into creating
            user-friendly and engaging websites that seamlessly blend aesthetics
            with functionality.
            <br />
            <br />
            My commitment extends beyond just writing code; I immerse myself in
            the art of design, ensuring each website not only meets high
            standards of professionalism but also delights users with a visually
            appealing interface. Detail-oriented by nature, I believe that the
            true beauty of a website lies in the subtleties, and I meticulously
            pay attention to every nuance of the design.
            <br />
            <br />
            Beyond the screen, I am driven by a passion for staying at the
            forefront of technological advancements. This drive motivates me to
            continuously explore new design trends, frontend frameworks, and
            interactive elements that can elevate my projects to new heights.
            <br />
            <br />
            Let&apos;s collaborate and transform your digital presence into a
            seamless and visually stunning experience. Feel free to reach out
            for discussions on how we can bring your ideas to life!
          </p>
        </div>
        <div className='min-w-52 w-1/2 mx-auto'>
          <div className='flex justify-center static md:sticky md:top-[30%]'>
            <div className='h-max w-full md:w-3/4 lg:w-3/5 aspect-square relative scale-100 md:scale-110'>
              <div className='absolute inset-0 border-y-[6px] border-t-dark-red border-b-light-red rounded-full animate-spinning'></div>
              <img
                src={photo}
                alt='my-image'
                className='aspect-square rounded-full h-full w-full object-cover scale-90 object-top'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
