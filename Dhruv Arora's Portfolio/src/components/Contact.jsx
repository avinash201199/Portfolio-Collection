import React from 'react';
import githubImg from '../assets/github.svg';
import linkedinImg from '../assets/linkedin.svg';
import emailImg from '../assets/email.svg';
import linktreeImg from '../assets/linktree.svg';

const Contact = () => {
  const d = new Date();

  return (
    <footer
      id='contact'
      className='py-[40px] sm:py-[80px] md:py-[100px] bg-white dark:bg-coke'
    >
      <div className='max-w-7xl mx-auto px-5 md:px-10 lg:px-20'>
        <div>
          <h1 className='text-3xl md:text-5xl font-acme font-normal sm:font-bold text-coke dark:text-white'>
            Interested in <span className='text-orange'>collaborating</span> on
            a project? <br />
            Feel free to <span className='text-orange'>Contact</span> on...
          </h1>
          <div className='flex items-center justify-center sm:justify-start gap-3 sm:gap-6 mt-6'>
            <a
              href='https://github.com/lord-benjamin'
              target='_blank'
              rel='noreferrer'
              className='bg-gray-400 bg-opacity-40 rounded-full p-2 sm:p-3 md:p-4'
            >
              <img
                src={githubImg}
                className='h-8 sm:h-10 md:h-16 w-8 sm:w-10 md:w-16'
              ></img>
            </a>
            <a
              href='https://linkedin.com/in/dhruv-arora-legit'
              target='_blank'
              rel='noreferrer'
              className='bg-gray-400 bg-opacity-40 rounded-full p-2 sm:p-3 md:p-4'
            >
              <img
                src={linkedinImg}
                className='h-8 sm:h-10 md:h-16 w-8 sm:w-10 md:w-16'
              ></img>
            </a>
            <a
              href='mailto:dhruvarora2612@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='bg-gray-400 bg-opacity-40 rounded-full p-2 sm:p-3 md:p-4'
            >
              <img
                src={emailImg}
                className='h-8 sm:h-10 md:h-16 w-8 sm:w-10 md:w-16'
              ></img>
            </a>
            <a
              href='https://linktr.ee/dhruv_arora'
              target='_blank'
              rel='noreferrer'
              className='bg-gray-400 bg-opacity-40 rounded-full p-2 sm:p-3 md:p-4'
            >
              <img
                src={linktreeImg}
                className='h-8 sm:h-10 md:h-16 w-8 sm:w-10 md:w-16'
              ></img>
            </a>
          </div>
        </div>
        <div className='w-full h-px border border-coke dark:border-white rounded-full opacity-40 my-[40px] sm:my-[80px] md:my-[100px]'></div>
        <div className='flex flex-col md:flex-row gap-y-8 gap-x-4 justify-between items-center text-center'>
          <div className='text-4xl sm:text-5xl font-rowdies text-orange'>
            <a href='/'>DA</a>
          </div>
          <div className='text-coke dark:text-white text-lg font-urbanist font-semibold'>
            © {d.getFullYear()} Designed and Developed by{' '}
            <span className='text-orange'>Dhruv Arora</span>. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
