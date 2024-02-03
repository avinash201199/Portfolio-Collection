import React from 'react';
import PropTypes from 'prop-types';

const Stack = ({ stack, title, subtext }) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 items-center gap-2 md:gap-4 xl:gap-2'>
      <div className='col-span-2 sm:col-span-3 md:col-span-5 lg:col-span-6 xl:col-span-2 py-4 px-4 xl:px-2 bg-gradient-to-br from-dark-red to-light-red text-white font-rowdies rounded-xl'>
        <div className='h-20 text-center flex flex-col items-center justify-center gap-1'>
          <h1 className='text-2xl font-rowdies'>{title}</h1>
          <p className='font-urbanist font-semibold italic'>({subtext})</p>
        </div>
      </div>
      {stack.map((item, idx) => (
        <a
          key={idx}
          href={item.website}
          target='_blank'
          rel='noreferrer'
          className='text-white flex justify-center items-center p-4 bg-gray-400 bg-opacity-40 rounded-xl group relative'
        >
          <div className='absolute inset-0 scale-0 group-hover:scale-100 duration-300 bg-coke dark:bg-white text-white dark:text-coke rounded-xl p-1 cursor-pointer'>
            <div className='h-full w-full flex flex-col items-center justify-center gap-1'>
              <p className='font-acme text-center text-lg lg:text-base'>
                {item.name}
              </p>
              <div className='py-0.5 px-2 text-sm bg-white dark:bg-coke text-coke dark:text-white rounded-full font-urbanist capitalize tracking-wide'>
                {item.tag}
              </div>
            </div>
          </div>
          <img src={item.icon} alt={item.name} className='h-20 w-20'></img>
        </a>
      ))}
    </div>
  );
};

Stack.propTypes = {
  stack: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
};

export default Stack;
